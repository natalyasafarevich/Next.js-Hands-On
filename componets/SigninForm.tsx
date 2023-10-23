"use client";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import type { FormEventHandler } from "react";

export default async function SignForm() {
	const router = useRouter();

	const hendelSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);

		const res = await signIn("credentials", {
			email: formData.get("email"),
			password: formData.get("password"),
			redirect: false,
		});
		if (res && !res.error) {
			// переброс на другуб страницу
			router.push("/profile");
		} else {
			console.log(res);
		}
	};
	return (
		<form onSubmit={hendelSubmit} action="">
			<input type="email" name="email" required />
			<input type="password" name="password" required />
			<button type="submit">Sing in</button>
		</form>
	);
}
