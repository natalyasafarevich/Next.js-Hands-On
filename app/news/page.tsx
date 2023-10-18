import Link from "next/link";
import { FC } from "react";

async function getData() {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts");
	return response.json();
}

async function News() {
	const post = await getData();
	// console.log(post);
	return (
		<div className="news">
			<h1 className="news__title">News Title</h1>
			<ul>
				{post.map((posts: any, i: number) => {
					return (
						<li key={i}>
							<Link href={`/news/${posts.id}`}>{posts.title}</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
export default News;
