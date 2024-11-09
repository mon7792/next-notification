import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props {
	id: string;
	title: string;
	description: string;
	avatar?: {
		url: string;
		fallback: string;
	};
	isRead?: boolean;
	onClick?: () => void;
}

const NotificationCard = ({
	id,
	title,
	description,
	avatar,
	isRead,
	onClick,
}: Props) => {
	return (
		<div
			key={id}
			className="mb-4 flex items-center space-x-4 rounded-md py-1 cursor-pointer"
		>
			{avatar ? (
				<Avatar className="flex">
					<AvatarImage src={avatar?.url} />
					<AvatarFallback>{avatar?.fallback}</AvatarFallback>
				</Avatar>
			) : (
				<span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
			)}
			<div className="space-y-1">
				<p
					className={cn(
						"text-sm leading-none",
						isRead ? "font-normal" : "font-bold",
					)}
				>
					{title}
				</p>
				<p className="text-sm text-muted-foreground">{description}</p>
			</div>
		</div>
	);
};

export default NotificationCard;
