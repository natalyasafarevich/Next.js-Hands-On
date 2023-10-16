import Link from "next/link";
import Navigation from "./Navigation";

const navLink = [
	{
		label: "Home",
		href: "/",
	},
	{
		label: "Blog",
		href: "/blog",
	},
	{
		label: "About",
		href: "/about",
	},
	{
		label: "News",
		href: "/news",
	},
];

export const TheHeader = () => {
	return (
		<header>
		<Navigation navLink={navLink} />
		</header>
	);
};
