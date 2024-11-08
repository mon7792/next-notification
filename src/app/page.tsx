"use client";

import NotificationContextProvider from "@/context/notification";
import HomePage from "@/pages/home";

export default function Home() {
	return (
		<NotificationContextProvider>
			<HomePage />
		</NotificationContextProvider>
	);
}
