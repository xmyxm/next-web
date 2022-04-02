import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
import log from "../util/print-log";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const response = NextResponse.next();

  response.headers.set("x-modified-edge", "true");

  log.info(`执行请求中间件`);

  return response;
}
// return cors(
//     req,
//     new Response(JSON.stringify({ message: 'Hello World!' }), {
//       status: 200,
//       headers: { 'Content-Type': 'application/json' },
//     })
//   )
