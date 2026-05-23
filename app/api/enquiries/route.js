export async function GET() {
  return Response.json([
    {
      name: "Test User",
      phone: "1234567890",
      message: "Hello enquiry"
    }
  ]);
}