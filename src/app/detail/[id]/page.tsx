import { Post } from "@/types"

export default async function PostDetail({ params }: { params: { id: string } }) {
  const { id } = await params;
  const data = await fetch(`https://api.vercel.app/blog/${id}`)
  const post = await data.json() as Post


  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>{post.date}</p>
    </div>
  )
}
