export async function GET(a,b) {
  const data = [
    {
      name: "Tursunxon",
      age: "18",
      id: 1,
    },
  ];
  

  return new Response(JSON.stringify(data));
}
