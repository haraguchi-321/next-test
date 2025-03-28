import Link from 'next/link'

export default function Home() {
  // サンプルデータ
  const items = [
    { id: 1, title: "項目 1" },
    { id: 2, title: "項目 2" },
    { id: 3, title: "項目 3" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">リスト表示</h1>
      <ul className="space-y-2">
        {items.map((item) => (
          <Link href={`/detail/${item.id}`} key={item.id}>
            <li
              className="p-3 bg-blue-100 rounded-lg hover:bg-blue-200"
            >
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
