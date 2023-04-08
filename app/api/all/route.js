export async function GET() {
  const data = [
    {
      name: "Tursunxon",
      age: "19",
      id: 1,
    },
  ];

  return new Response(JSON.stringify(data));
}
