"use client";
import { Button } from "@/components/ui/button";
import { Bell, BellDot } from "lucide-react";

const DEFAULT_MAX_COUNT = 10;

type NotificationBtnProps = {
	count?: number;
};

const NotificationBtn = ({ count = 2 }: NotificationBtnProps) => {
	return (
		<div className="relative">
			{count > 0 && (
				<span className="absolute -top-1 -right-2 flex items-center justify-center bg-red-600 rounded-full w-5 h-5 text-xs font-bold">
					{count > DEFAULT_MAX_COUNT ? `${DEFAULT_MAX_COUNT}+` : count}
				</span>
			)}
			<Button variant="outline" size="icon">
				{count > 0 ? <BellDot /> : <Bell />}

				<span className="sr-only">Notifications</span>
			</Button>
		</div>
	);
};

export default NotificationBtn;
