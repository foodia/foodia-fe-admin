import { NextResponse } from "next/server";

export default function middleware(req: any) {
  let verify = req.cookies.get("role")?.value;
  const url = req.url;

  if (verify !== "superadmin" && url.includes("detonator")) {
    // return NextResponse.redirect(new URL("/ui-components/auth", req.url));
  }

  return NextResponse.next();
}
