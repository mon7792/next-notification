import type { Notification as NotificationType } from "@/types";

export enum NotificationActionType {
	LOAD_NOTIFICATIONS = "LOAD_NOTIFICATIONS",
	MARK_AS_READ = "MARK_AS_READ",
}

export type LoadNotificationsAction = {
	type: NotificationActionType.LOAD_NOTIFICATIONS;
	payload: NotificationType[];
};

export type MarkAsReadAction = {
	type: NotificationActionType.MARK_AS_READ;
	payload: number;
};

export type NotificationAction = LoadNotificationsAction | MarkAsReadAction;
