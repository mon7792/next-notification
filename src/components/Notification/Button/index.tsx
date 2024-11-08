"use client";

import { forwardRef } from "react";

import { Bell, BellDot } from "lucide-react";

import { Button } from "@/components/ui/button";

const DEFAULT_MAX_COUNT = 10;

type NotificationButtonProps = {
	count?: number;
};

const NotificationButton = forwardRef<
	HTMLButtonElement,
	NotificationButtonProps
>(({ count = 2, ...props }, ref) => {
	return (
		<div className="relative">
			{count > 0 && (
				<span className="absolute -top-1 -right-2 flex items-center justify-center bg-red-600 rounded-full w-5 h-5 text-xs font-bold">
					{count > DEFAULT_MAX_COUNT ? `${DEFAULT_MAX_COUNT}+` : count}
				</span>
			)}
			<Button ref={ref} variant="outline" size="icon" {...props}>
				{count > 0 ? <BellDot /> : <Bell />}

				<span className="sr-only">Notifications</span>
			</Button>
		</div>
	);
});

export default NotificationButton;
