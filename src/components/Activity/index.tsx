"use client";

import { useContext, useEffect } from "react";
import ActivityInput from "./Input";
import ActivityItem from "./Item/ActivityItem";
import demoActivities from "@/data/activities";
import { ActivityContext } from "@/context/activities";
import { ActivityActionType } from "@/actions/activities";

const Activity = () => {
	const { activities, dispatch } = useContext(ActivityContext);

	// Load the demo activities from api
	useEffect(() => {
		dispatch({
			type: ActivityActionType.LOAD_ACTIVITIES,
			payload: demoActivities,
		});
	}, [dispatch]);

	return (
		<>
			<ActivityInput />
			<div className="flex flex-col gap-2">
				{activities.activities.map((activity) => (
					<ActivityItem key={activity.id} activity={activity} />
				))}
			</div>
		</>
	);
};

export default Activity;
