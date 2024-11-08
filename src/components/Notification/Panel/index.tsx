import { useContext } from "react";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Notification as NotificationType } from "@/types";
import { NotificationContext } from "@/context/notification";
import { NotificationActionType } from "@/actions/notification";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import NotificationCard from "../Card";

interface CardProps extends React.ComponentProps<typeof Card> {
	count?: number;
	notifications?: NotificationType[];
}

const NotificationPanel = ({
	className,
	count = 0,
	notifications = [],
	...props
}: CardProps) => {
	const { dispatch } = useContext(NotificationContext);

	const markNotificationsAsRead = (id: number) => {
		dispatch({ type: NotificationActionType.MARK_AS_READ, payload: id });
	};

	if (notifications.length === 0) {
		return (
			<Card className={cn("w-[380px]", className)} {...props}>
				<CardHeader>
					<CardTitle>Notifications</CardTitle>
					<CardDescription>No new messages.</CardDescription>
				</CardHeader>
			</Card>
		);
	}

	return (
		<Card className={cn("w-[380px]", className)} {...props}>
			<CardHeader>
				<CardTitle>Notifications</CardTitle>
				<CardDescription>You have {count} unread messages.</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-4">
				{notifications.map((notification, index) => (
					<NotificationCard
						key={notification.id}
						id={notification.id.toString()}
						title={notification.title}
						description={notification.description}
						avatar={notification.avatar}
						isRead={notification.isRead}
						onClick={() => markNotificationsAsRead(notification.id)}
					/>
				))}
			</CardContent>
			<CardFooter>
				<Button className="w-full">
					<Check /> Mark all as read
				</Button>
			</CardFooter>
		</Card>
	);
};

export default NotificationPanel;
