export type Notification = {
	id: number;
	title: string;
	description: string;
	isRead: boolean;
	avatar?: {
		url: string;
		fallback: string;
	};
};

export type Activity = {
	id: number;
	name: string;
	done: boolean;
};
