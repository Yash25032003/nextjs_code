import { NextResponse } from "next/server";

export let users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    age: 25,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    age: 30,
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    age: 28,
  },
];

// creating a GET endpoint on /api/hello route
export async function GET(request) {
  try {
    // query parameters ko access karne ka tarika
    const searchParams = request.nextUrl.searchParams;

    const name = searchParams.get("name"); // URL se name ki value ko access kar rahe hai

    const age = searchParams.get("age");

    let filtereddata = users;
    // agar age params me hoga as a filter to age field ko compare karenge user data se if exist to show kar denge warna empty .
    if (age) {
      filtereddata = filtereddata.filter((user) => user.age === Number(age));
    }
    // same for name field as well.
    if (name) {
      filtereddata = filtereddata.filter((user) =>
        user.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    return NextResponse.json({
      success: true,
      data: filtereddata,
      length: filtereddata.length,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: "failed to get the users",
      status: 500,
    });
  }
}

// aab above chota server jo banaya hai usko home par access karna ho to kese kare for that look at page.js of app folder
// postman ke throught GET method ko run kar sakte hai at URL http://localhost:3000/api/home , jo response show karega and code will be 200
