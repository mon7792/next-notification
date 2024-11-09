"use client";
import { useContext, useEffect } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";

import { NotificationContext } from "@/context/notification";
import { NotificationActionType } from "@/actions/notification";
import notifications from "@/data/notification";

import NavBar from "@/components/NavBar";
import ActivityInput from "@/components/Activity/Input";
import ActivityItem from "@/components/Activity/Item/ActivityItem";

// TODO: THIS SHOULD BECOME A LIST OF ACTIVITIES FROM THE API
const demoActivities = [
	{ id: 1, name: "Activity 1", done: false },
	{ id: 2, name: "Activity 2", done: true },
];

const HomePage = () => {
	const { dispatch } = useContext(NotificationContext);

	// Load notifications
	// make the call to the API or use react query
	useEffect(() => {
		console.log("HomePage");
		dispatch({
			type: NotificationActionType.LOAD_NOTIFICATIONS,
			payload: notifications,
		});
	}, [dispatch]);

	return (
		<>
			<NavBar />
			<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
				<main className="flex flex-col gap-8 row-start-2 items-center">
					<div className="flex flex-row gap-4 items-center">
						<Image
							className="dark:invert"
							src="https://nextjs.org/icons/next.svg"
							alt="Next.js logo"
							width={180}
							height={38}
							priority
						/>
						<Plus />
						<div className="flex flex-col">
							<div className="text-2xl font-bold">ACTIVITY</div>
							<div className="text-2xl font-bold text-pink-700">TRACKER</div>
						</div>
					</div>
					<ActivityInput />

					<div className="flex flex-col gap-2">
						{demoActivities.map((activity) => (
							<ActivityItem key={activity.id} activity={activity} />
						))}
					</div>
				</main>
				<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
					<a
						className="flex items-center gap-2 hover:underline hover:underline-offset-4"
						href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							aria-hidden
							src="https://nextjs.org/icons/file.svg"
							alt="File icon"
							width={16}
							height={16}
						/>
						Learn
					</a>
					<a
						className="flex items-center gap-2 hover:underline hover:underline-offset-4"
						href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							aria-hidden
							src="https://nextjs.org/icons/window.svg"
							alt="Window icon"
							width={16}
							height={16}
						/>
						Examples
					</a>
					<a
						className="flex items-center gap-2 hover:underline hover:underline-offset-4"
						href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							aria-hidden
							src="https://nextjs.org/icons/globe.svg"
							alt="Globe icon"
							width={16}
							height={16}
						/>
						Go to nextjs.org →
					</a>
				</footer>
			</div>
		</>
	);
};

export default HomePage;
