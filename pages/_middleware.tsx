import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const response = NextResponse.next();

  response.headers.set("x-modified-edge", "true");

  return response;
}
// return cors(
//     req,
//     new Response(JSON.stringify({ message: 'Hello World!' }), {
//       status: 200,
//       headers: { 'Content-Type': 'application/json' },
//     })
//   )
