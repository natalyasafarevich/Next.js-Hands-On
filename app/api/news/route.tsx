import { NextResponse } from "next/server";
import { posts } from "./news";

// api - для запросов
// get - для получения данных
export async function GET(req: Request) {
	const { searchParams } = new URL("https://jsonplaceholder.typicode.com/posts");
	const query = searchParams.get("w");

	let current = posts;
	
	if (query) {
    console.log(query);
		current = posts.filter((post) =>
			post.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
		);
	}
	return NextResponse.json(posts);
}

// post - ДЛЯ СОЗДАНИЯ
export async function POST(req: Request) {
	const body = await req.json();

	// console.log(body);
	return NextResponse.json({ body });
}
