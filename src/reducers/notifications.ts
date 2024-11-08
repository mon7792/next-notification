import type { Notification as NotificationType } from "@/types";
import type { NotificationAction } from "@/actions/notification";
import { NotificationActionType } from "@/actions/notification";

export type NotificationState = {
	notifications: NotificationType[];
}

export const initialNotificationState: NotificationState = {
	notifications: [],
};


export const notificationReducer = (state: NotificationState, action: NotificationAction) => {
	switch (action.type) {
		case NotificationActionType.LOAD_NOTIFICATIONS:
			return { ...state, notifications: action.payload };
		case NotificationActionType.MARK_AS_READ:
			return {
				...state,
				notifications: state.notifications.map(notification =>
					notification.id === action.payload
						? { ...notification, isRead: true }
						: notification,
				),
			};
		default:
			return state;
	}
};
    