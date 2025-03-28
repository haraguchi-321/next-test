import Link from 'next/link'
import { Post } from '@/types'

export default async function Home() {
  // サンプルデータ
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json() as Post[]
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">リスト表示</h1>
      <ul className="space-y-2">
        {posts.map((post: Post) => (
          <Link href={`/detail/${post.id}`} key={post.id}>
            <li
              className="p-3 mt-2 bg-blue-100 rounded-lg hover:bg-blue-200"
            >
              {post.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
