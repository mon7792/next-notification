import { useRef } from "react";

import { useCreateActivity } from "@/api/mutation/activity";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const createAct = (name: string) => ({
	id: Date.now(),
	name,
	done: false,
});

const ActivityInput = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	
	const { mutate: createActivity } = useCreateActivity();

	const handleAddActivity = () => {
		if (!inputRef.current) return;
		createActivity(createAct(inputRef.current.value));
		inputRef.current.value = "";
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
			/>
			<Button onClick={handleAddActivity}>Track</Button>
		</div>
	);
};

export default ActivityInput;
