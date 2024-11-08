"use client";

import Link from "next/link";
import ThemeSwitchBtn from "../ThemeSwitchBtn";

const NavBar = () => {
	return (
		<nav className="sticky top-0 z-50 px-8 w-full border-b border-border/40">
			<div className="container flex h-14 items-center">
				<div className="mr-4 flex">
					<Link href="/" className="mr-6 flex items-center space-x-2">
						<span className="font-bold">📣 Next + Hono </span>
					</Link>
				</div>

				<div className="flex flex-1 justify-end">
					<ThemeSwitchBtn />
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
