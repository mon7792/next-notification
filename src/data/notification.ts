
import type { Notification as NotificationType } from "@/types";

const notifications: NotificationType[] = [
	{
		id: 1,
		title: "Your call has been confirmed.",
		description: "1 hour ago",
		isRead: false,	
	},
	{
		id: 2,
		title: "You have a new message!",
		description: "1 hour ago",
		isRead: false,
		avatar: {
			url: "https://github.com/shadcn.png",
			fallback: "CN",
		},
	},
	{
		id: 3,
		title: "Your subscription is expiring soon!",
		description: "2 hours ago",
		isRead: true,
	},
];

export default notifications;
