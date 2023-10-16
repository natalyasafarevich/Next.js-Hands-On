import { Metadata } from "next";

// import { useRouter } from "next/router";
type Props = {
	params: {
		slug: string;
	};
};

async function getPosts(slug: string) {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${slug}`
	);
	return response.json();
}

export async function generateMetadata({
	params: { slug },
}: Props): Promise<Metadata> {
	const post = await getPosts(slug);

	return {
		title: post.title,
		description:post.title
	};
}

export default async function News({ params: { slug } }: Props) {
	const post = await getPosts(slug);
	return <h1>news {post.title}</h1>;
}
