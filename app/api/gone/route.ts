import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const clientId = request.nextUrl.searchParams.get("clientId");
  if (!clientId) {
    return NextResponse.json({ error: "clientId is required" }, { status: 400 });
  }

  try {
    await fetch(
      `${process.env.API_URL}/m/uninstall?${new URLSearchParams({ uuid: clientId }).toString()}`,
      { method: "POST" }
    );
  } catch {
    // the visitor still gets their goodbye page
  }

  return NextResponse.json({ success: true });
}
