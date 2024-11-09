"use client";

import NotificationContextProvider from "@/context/notification";
import HomePage from "@/pages/home";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
export default function Home() {
	return (
		<NotificationContextProvider>
			<HomePage />
			<ReactQueryDevtools />
		</NotificationContextProvider>
	);
}
