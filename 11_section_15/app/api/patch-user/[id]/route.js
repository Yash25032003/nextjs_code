import { NextResponse } from "next/server";
import { users } from "../../hello/route";

export async function PATCH(request, { params }) {
  try {
    const { id } = await params;
    const userid = parseInt(id);

    const userIndex = users.findIndex((user) => user.id === userid);

    if (userIndex === -1) {
      return NextResponse.json({
        success: false,
        error: "User not found",
        status: 404,
      });
    }

    // destructure isliye nahi kiya because pata nahi kya update karna hai ya to sirf name ya email ya age ya pura we dont know
    const body = await request.json();
    users[userIndex] = {
      // spread kar diya previous data
      ...users[userIndex],
      // jo update karna hai usko bhi spread kar diya
      ...body,
      id: userid,
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
      error: "failed to patch the user",
      status: 500,
    });
  }
}
