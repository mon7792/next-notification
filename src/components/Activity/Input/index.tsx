import { useContext, useRef } from "react";
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
	const { dispatch } = useContext(ActivityContext);
	const ref = useRef<HTMLInputElement>(null);

	const handleAddActivity = () => {
		if (!ref.current) return;

		dispatch({
			type: ActivityActionType.CREATE_ACTIVITY,
			payload: createActivity(ref.current.value),
		});
		ref.current.value = "";
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			handleAddActivity();
		}
	};

	return (
		<div className="flex flex-row gap-4 items-center">
			<Input
				ref={ref}
				className="border-1"
				placeholder="Add a new activity"
				onKeyDown={handleKeyDown}
			/>
			<Button onClick={handleAddActivity}>Track</Button>
		</div>
	);
};

export default ActivityInput;