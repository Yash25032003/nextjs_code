import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {
  //! Accessing/Read the cookies way-1
  //   const themeCookie = request.cookies.get("Theme"); // name field jo rehti hai cookies me postman ke andae vo dalta hai isme

  //   console.log("cookies", themeCookie);

  //! Accessing/Read the cookies way-2
  const cookie = await cookies();
  const accessedCookie = cookie.get("Theme");
  console.log("cookies", accessedCookie);

  // ! sending/ set cookie to postman way-2 its an easy and recommended approach jab bhi postman me coookies set karna hai
  cookie.set("name", "yash");
  cookie.set("surname", "sharma");

  // deleting cookies
  cookie.delete("surname");

  return NextResponse.json({
    message: "Cookies read successfully",
    Headers: {
      "Set-Cookie": "Theme=dark",
    },
  });

  //! sending/set cookies from the postman way-1 less recommended approach
  //   return new Response("Setting-cookies", {
  //     headers: {
  //       "Set-Cookie": "Theme=dark",
  //     },
  //   });
}
