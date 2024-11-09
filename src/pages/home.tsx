"use client";
import { useContext, useEffect } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";

import { NotificationContext } from "@/context/notification";
import { NotificationActionType } from "@/actions/notification";
import notifications from "@/data/notification";
import ActivityContextProvider from "@/context/activities";

import NavBar from "@/components/NavBar";
import Activity from "@/components/Activity";


const HomePage = () => {
	const { dispatch } = useContext(NotificationContext);

	// Load notifications
	// make the call to the API or use react query
	useEffect(() => {
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
					<ActivityContextProvider>
						<Activity />
					</ActivityContextProvider>
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
