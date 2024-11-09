import { useContext, useRef, useState } from "react";
import { ActivityActionType } from "@/actions/activities";
import { ActivityContext } from "@/context/activities";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const createActivity = (name: string) => ({
	id: Date.now(),
	name,
	done: false,
});

const ActivityInput = () => {
	const { activities, dispatch } = useContext(ActivityContext);
	const inputRef = useRef<HTMLInputElement>(null);
	const [isLoading, setIsLoading] = useState(false);

	const handleAddActivity = async () => {
		if (!inputRef.current) return;
		setIsLoading(true);

		const originalActivities = activities.activities;
		const optimisticActivity = createActivity(inputRef.current.value);
		dispatch({
			type: ActivityActionType.CREATE_ACTIVITY_OPTIMISTIC,
			payload: optimisticActivity,
		});
		inputRef.current.value = "";
		setIsLoading(false);

		// Simulate a delay
		await new Promise((resolve) => setTimeout(resolve, 5000))
			.then(() => {
				console.log("success");
			})
			.catch(() => {
				dispatch({
					type: ActivityActionType.LOAD_ACTIVITIES,
					payload: originalActivities,
				});
			});

		
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			handleAddActivity();
		}
	};

	return (
		<div className="flex flex-row gap-4 items-center">
			<Input
				ref={inputRef}
				className="border-1"
				placeholder="Add a new activity"
				onKeyDown={handleKeyDown}
				disabled={isLoading}
			/>
			<Button onClick={handleAddActivity} disabled={isLoading}>
				{isLoading ? "Tracking..." : "Track"}
			</Button>
		</div>
	);
};

export default ActivityInput;
