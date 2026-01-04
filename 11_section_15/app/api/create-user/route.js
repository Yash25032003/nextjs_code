import { NextResponse } from "next/server";
import { users } from "../hello/route";

// creating a POST backend point at /api/create-user route
export async function POST(request) {
  try {
    const { name, email, age } = await request.json();
    if (!name || !email || !age) {
      return NextResponse.json({
        success: false,
        error: "Please provide all the required fields",
        status: 400,
      });
    }

    const emailexist = users.find((user) => user.email === email);
    if (emailexist) {
      return NextResponse.json({
        success: false,
        error: "Email already exists",
        status: 400,
      });
    }

    const newUser = {
      id: users.length + 1,
      name: name,
      email: email,
      age: age,
    };

    users.push(newUser);
    return NextResponse.json({
      success: true,
      message: "User created successfully",
      data: users,
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: "Failed to create user",
      status: 500,
    });
  }
}

// test it at post man by writing the url http://localhost:3000/api/create-user and have POST method and inside the body have raw data and enter name  , email and age.
