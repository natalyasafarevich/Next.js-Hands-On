export async function GET(req : Request) {
  const query = 'matric';
  const api = process.env.OMBD
  console.log(process.env.OMBD)
  const movie = await fetch(`https://jsonplaceholder.typicode.com_${api}/posts?q=${query}`)
}
