"use client";
import { useSession,signOut } from "next-auth/react";
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
	//! useSession() - только в клиенстком компоненте
	const session = useSession();
	console.log(session);

	const pathname = usePathname();
	console.log(pathname);

	return (
		<>
			{navLink.map((link) => {
				const isActive = pathname === link.href;
				return (
					<Link
						key={link.label}
						href={link.href}
						className={isActive ? "active" : ""}>
						{link.label}
					</Link>
				);
			})}
			{session?.data && <Link href={"/profile"}>Profile</Link>}
			{session?.data ? (
				<Link href="#" onClick={()=>{signOut({callbackUrl:"/"})}}>Sigh Out</Link>
			) : (
				<Link href={"/api/auth/signin"}>Sigh in</Link>
			)}
		</>
	);
}
