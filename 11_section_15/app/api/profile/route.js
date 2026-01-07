import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(request) {
  // Access request header
  //! way-1
  //   const requestHeaders = new Headers(request.headers);
  //   const authHeader = requestHeaders.get("Authorization");

  //   console.log(authHeader);

  // ! way-2
  const headerlist = await headers();
  const authheader = headerlist.get("Authorization");

  console.log(authheader);

  //! way-1 of handling header on chrome browser
  const response = NextResponse.json({
    message: "<h1> Hello world from Headers </h1>",
  });
  // chrome inspect ke andar network tab ke andar ye headers show honge
  response.headers.set("Tutorial-name", "Next.js tutorial");
  response.headers.set("Custom-headers", "Yash Sharma");
  response.headers.set("Content-type", "text/html"); //* Content-type change karne se browser me kese dikhaya na hai text ko wese dikha sakte hai jes eplain text , html etc.

  return response;

  //! way-2 of handling header on chrome browser
  // chrome inspect ke andar network tab ke andar ye headers show honge
  //   return new Response("<h1>Profile Api data </h1>", {
  //     // changing content type of browser
  //     headers: {
  //       "Content-Type": "text/html",
  //       // custom headers
  //       "Custom-Header": "Next.js tutorial",
  //     },
  //   });
}
