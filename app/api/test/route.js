import { supabase } from "@/lib/supabase";

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

export async function GET() {
  const { data, error } = await supabase
    .from("inquiries")
    .select("*");

  return Response.json({ data, error });
}