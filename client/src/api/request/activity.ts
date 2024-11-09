import type { Activity } from "@/types";

import demoActivities from "@/data/activities";

export const getActivities = async () => {
	await new Promise((resolve) => setTimeout(resolve, 5000));
	return demoActivities;
};

export const getActivity = async (id: number) => {
	await new Promise((resolve) => setTimeout(resolve, 5000));
	return demoActivities.find((activity) => activity.id === id);
};

export const createActivity = async (activity: Activity) => {
	await new Promise((resolve) => setTimeout(resolve, 5000));
	return activity;
};

export const updateActivity = async (id: number) => {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return id;
};



