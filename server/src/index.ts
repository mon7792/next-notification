import { Hono } from "hono";
import { cors } from "hono/cors";
import { streamSSE } from "hono/streaming";

import {
	createActivity,
	getActivities,
	getActivity,
	updateActivity,
} from "./activity";

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
		while (true) {
			const message = `${new Date().toISOString()}`;
			await stream.writeSSE({
				data: message,
				event: "time-update",
				id: String(id++),
			});
			await stream.sleep(1000);
		}
	});
});

export default {
	fetch: app.fetch,
	port: 4000,
};
