export default async function Post({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div>
      <h1>Detail</h1>
      <p>{id}</p>
    </div>
  )
}
