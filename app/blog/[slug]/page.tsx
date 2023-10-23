import { Metadata } from "next";
import { getData } from "../page";
async function getDatas(id: string) {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${id}`
	);
	return response.json();
}
type Props = {
	params: {
		slug: string;
	};
};

// generateStaticParams -создает статистические страницы со всеми постами
export async function generateStaticParams() {
	const post: any[] = await getData();
console.log(post)
	return post.map((i) => ({
		slug: i.id.toString(),
	}));
}
export async function generateMetadata({
	params: { slug },
}: Props): Promise<Metadata> {
	const post = await getDatas(slug);

	return {
		title: post.title,
	};
}

export default async function Post({ params: { slug } }: Props) {
	const post = await getDatas(slug);
	// console.log(post);
	return (
		<>
			<h1>{post.title}</h1>
			<p>{post.body}</p>
		</>
	);
}
