import type { Activity } from "@/types";
import { cn } from "@/lib/utils";
import { useUpdateActivity } from "@/api/mutation/activity";

import { Checkbox } from "@/components/ui/checkbox";

const ActivityItem = ({ activity }: { activity: Activity }) => {
	const { mutate: updateActivity } = useUpdateActivity();

	const handleMarkAsDone = () => {
		updateActivity({ id: activity.id, activity: { ...activity, done: !activity.done } });
	};

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
