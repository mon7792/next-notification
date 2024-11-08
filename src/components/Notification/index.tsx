"use client";
import { useContext } from "react";

import { NotificationContext } from "@/context/notification";

import NotificationButton from "./Button";
import NotificationPanel from "./Panel";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

const Notification = () => {
	const { notifications } = useContext(NotificationContext);
	const count = notifications.notifications.length;

	return (
		<Popover>
			<PopoverTrigger asChild>
				<NotificationButton count={count} />
			</PopoverTrigger>
			<PopoverContent className="w-[380px] p-0 border-0">
				<NotificationPanel count={count} notifications={notifications.notifications} />
			</PopoverContent>
		</Popover>
	);
};

export default Notification;