import { NextResponse } from "next/server";
import { users } from "../../hello/route";

export async function PUT(request, { params }) {
  try {
    // id ko access kara params se
    const { id } = await params;
    // integer me convert kiya id ko using parseInt
    const userid = parseInt(id);

    // index find kiya ki userid waala user exist karta hai ki nahi users table me.
    const userIndex = users.findIndex((user) => user.id === userid);
    // nahi karta hoga to index -1 aayega
    if (userIndex === -1) {
      return NextResponse.json({
        success: false,
        error: "User not found",
        status: 404,
      });
    }

    // if user mil gaya destructuring the data
    const { name, email, age } = await request.json();

    // check saare fields fill kare ki nahi
    if (!name || !email || !age) {
      return NextResponse.json({
        success: false,
        error: "Please provide all the required fields",
        status: 400,
      });
    }

    // update kiya user ke data ko userIndex se
    users[userIndex] = {
      id: userid,
      name: name,
      email: email,
      age: age,
    };

    return NextResponse.json({
      success: true,
      message: "User Updated successfully",
      status: 200,
      data: users,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: "Failed to update user",
      status: 500,
    });
  }
}
