"use client";

import { useCallback } from "react";
import debounce from "lodash.debounce";
import type { CheckedState } from "@radix-ui/react-checkbox";

import type { Activity } from "@/types";
import { cn } from "@/lib/utils";
import { useUpdateActivity } from "@/api/mutation/activity";

import { Checkbox } from "@/components/ui/checkbox";

const ActivityItem = ({ activity }: { activity: Activity }) => {
	const { mutate: updateActivity } = useUpdateActivity();

	const handleMarkAsDone = (e: CheckedState) => {
		debouncedMarkTodoDone(activity.id, Boolean(e));
	};

	const debouncedMarkTodoDone = useCallback(
		debounce((activityId: string, isDone: boolean) => {
			updateActivity({ id: activityId, activity: { ...activity, done: isDone } });
		}, 200),
		[],
	);

	return (
		<div className="flex flex-row items-center gap-4 w-[380px] rounded-lg border p-4">
			<Checkbox checked={activity.done} onCheckedChange={handleMarkAsDone} />
			<div
				className={cn(
					"text-md",
					activity.done
						? "font-normal line-through text-gray-400"
						: "font-bold",
				)}
			>
				{activity.name}
			</div>
		</div>
	);
};

export default ActivityItem;
