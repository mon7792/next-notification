import { createContext, type Dispatch, useReducer } from "react";
import type { NotificationAction } from "@/actions/notification";
import {
	initialNotificationState,
	notificationReducer,
	type NotificationState,
} from "@/reducers/notifications";

type NotificationContextType = {
	notifications: NotificationState;
	dispatch: Dispatch<NotificationAction>;
};

export const NotificationContext = createContext<NotificationContextType>({
	notifications: initialNotificationState,
	dispatch: () => {},
});

const NotificationContextProvider = ({
	children,
}: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(
		notificationReducer,
		initialNotificationState,
	);

	return (
		<NotificationContext.Provider value={{ notifications: state, dispatch }}>
			{children}
		</NotificationContext.Provider>
	);
};

export default NotificationContextProvider;
