export const config = {
  runtime: "experimental-edge",
};
export default function (req: Request) {
  return new Response(
    JSON.stringify({
      geo: (req as any).geo,
      name: "Jim Halpert",
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    }
  );
}
