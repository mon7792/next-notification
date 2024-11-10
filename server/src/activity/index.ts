
import { v4 as uuidv4 } from "uuid";

import type { Activity } from "../types";
import { connect } from "../db";


export const createActivity = async (activity: Activity) => {
	const db = await connect();
	await db.query("insert into activity (id, name, done) values ($1, $2, $3)", [uuidv4(), activity.name, activity.done]);
};

export const getActivities = async (): Promise<Activity[]> => {
	const db = await connect();
	const result = await db.query("select * from activity");
	return result.rows;
};

export const getActivity = async (id: string): Promise<Activity> => {
	const db = await connect();
	const result = await db.query("select * from activity where id = $1", [id]);
	return result.rows[0];
};

export const updateActivity = async (id: string, activity: Activity) => {
	const db = await connect();
	await db.query("update activity set name = $1, done = $2 where id = $3", [activity.name, activity.done, id]);
};
