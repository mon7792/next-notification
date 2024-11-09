"use client";

import { useActivities } from "@/api/query/activity";

import ActivityInput from "./Input";
import ActivityItem from "./Item/ActivityItem";

const Activity = () => {
	const { data: activities, isLoading, isError } = useActivities();

	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error</div>;
	if (!activities) return null;

	return (
		<>
			<ActivityInput />
			<div className="flex flex-col gap-2">
				{activities.map((activity) => (
					<ActivityItem key={activity.id} activity={activity} />
				))}
			</div>
		</>
	);
};

export default Activity;
