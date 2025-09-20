"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { CustomLink } from "./NavBar";

interface WebMenuProps {
	links: CustomLink[];
}
export default function WebMenu({ links }: WebMenuProps) {
	const pathname = usePathname();
	// Calculate the middle index to split the links
	const middleIndex = Math.floor(links.length / 2);
	const firstHalfLinks = links.slice(0, middleIndex);
	const secondHalfLinks = links.slice(middleIndex);

	return (
		<div className="hidden mx-auto sm:block">
			<div className="flex gap-6 text-zinc-400 items-center">
				{firstHalfLinks.map(({ text, path }, index) => {
					const isActive = pathname === path || (path !== "/" && pathname.startsWith(path));
					return (
						<Link
							key={index}
							href={path}
							className={[
								"hover:text-teal-800 cursor-pointer w-20 text-center",
								isActive ? "text-black" : "",
							].join(" ")}
						>
							{text}
						</Link>
					);
				})}

				<Link className="mx-auto flex-none" href={"/"}>
					<Image
						src={"cpf_logo.webp"}
						alt="Castle Peak Farms Logo"
						className="h-44 w-44"
						width={176}
						height={176}
					/>
				</Link>

				{secondHalfLinks.map(({ text, path }, index) => {
					const isActive = pathname === path || (path !== "/" && pathname.startsWith(path));
					return (
						<Link
							key={index}
							href={path}
							className={[
								"hover:text-teal-800 cursor-pointer w-20 text-center",
								isActive ? "text-black" : "",
							].join(" ")}
						>
							{text}
						</Link>
					);
				})}
			</div>
		</div>
	);
}
