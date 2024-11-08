import { BellRing } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const PushNotification = () => {
	return (
		<div className="flex items-center space-x-4 rounded-md border p-4">
			<BellRing />
			<div className="flex-1 space-y-1">
				<p className="text-sm font-medium leading-none">Push Notifications</p>
				<p className="text-sm text-muted-foreground">
					Send notifications to device.
				</p>
			</div>
			<Switch />
		</div>
	);
};

export default PushNotification;
