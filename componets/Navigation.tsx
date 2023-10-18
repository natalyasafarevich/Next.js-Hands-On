'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkprops = {
	label: string;
	href: string;
};
type Props = {
	navLink: Array<NavLinkprops>;
};
export default function Navigation({ navLink }: Props) {
	const pathname = usePathname();
	console.log(pathname);

	return (
		<>
			{navLink.map((link) => {
				const isActive = pathname === link.href;
				return (
					<Link key={link.label} href={link.href} className={isActive ? "active" : ""}>
						{link.label}
					</Link>
				);
			})}
		</>
	);
}
