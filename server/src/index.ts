import { Hono } from "hono";
import { cors } from "hono/cors";
import { streamSSE } from "hono/streaming";
import { EventEmitter } from "node:events";

import {
	createActivity,
	getActivities,
	getActivity,
	updateActivity,
} from "./activity";

const eventEmitter = new EventEmitter();
const app = new Hono();

app.use("*", cors());

app.get("/", (c) => {
	return c.json({ message: "Hello Hono!" });
});

// activity
app.get("/activity", async (c) => {
	const activities = await getActivities();
	return c.json(activities);
});

// activity/:id
app.get("/activity/:id", async (c) => {
	const activity = await getActivity(c.req.param("id") as string);
	return c.json(activity);
});

// activity
app.post("/activity", async (c) => {
	const activity = await c.req.json();
	await createActivity(activity);
	return c.json(activity);
});

// activity/:id
app.put("/activity/:id", async (c) => {
	const activity = await c.req.json();
	await updateActivity(c.req.param("id") as string, activity);
	return c.json(activity);
});

// notification
// The below logic can be part of a separate service

let id = 0;

app.get("/sse", async (c) => {
	return streamSSE(c, async (stream) => {
		const listener = async (message: string) => {
			await stream.writeSSE({
				data: message,
				event: "time-update",
				id: String(id++),
			});
		};

		eventEmitter.on("new-message", listener);

		// Clean up listener when connection closes
		c.req.raw.signal.addEventListener("abort", () => {
			eventEmitter.off("new-message", listener);
		});

		// Keep connection alive
		while (true) {
			await stream.sleep(30000); // 30-second heartbeat
		}
	});
});

app.get("/trigger-message", async (c) => {
	eventEmitter.emit("new-message", new Date().toISOString());
	return c.json({ success: true });
});

export default {
	fetch: app.fetch,
	port: 4000,
};
