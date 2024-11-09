import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ActivityInput = () => {
	return (
		<div className="flex flex-row gap-4 items-center">
			<Input className="border-1" placeholder="Add a new activity" />
			<Button>Track</Button>
		</div>
	);
};

export default ActivityInput;