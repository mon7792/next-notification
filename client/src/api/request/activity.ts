import type { Activity } from "@/types";

export const getActivities = async (): Promise<Activity[]> => {
	const response = await fetch("http://localhost:4000/activity");
	const data = await response.json();
	return data;
};

export const getActivity = async (id: string): Promise<Activity> => {
	const response = await fetch(`http://localhost:4000/activity/${id}`);
	const data = await response.json();
	return data;
};

export const createActivity = async (activity: Activity) => {
	const response = await fetch("http://localhost:4000/activity", {
		method: "POST",
		body: JSON.stringify(activity),
	});
	const data = await response.json();
	return data;
};

export const updateActivity = async (id: string, activity: Activity) => {
	const response = await fetch(`http://localhost:4000/activity/${id}`, {
		method: "PUT",
		body: JSON.stringify(activity),
	});
	const data = await response.json();
	return data;
};



