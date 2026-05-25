import { supabase } from "@/lib/supabase";
function isAuthorized(req) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader) return false;

  const token = authHeader.split(" ")[1];

  return token === process.env.ADMIN_TOKEN;
}

export async function POST(req) {
  try {
    const body = await req.json();

    const { data, error } = await supabase
      .from("inquiries")
      .insert([body]);

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true, data });

  } catch (err) {
    return Response.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET(req) {

  // 🔐 CHECK LOGIN TOKEN
  if (!isAuthorized(req)) {
    return Response.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const { data, error } = await supabase
    .from("inquiries")
    .select("*");

  return Response.json({ data, error });
}