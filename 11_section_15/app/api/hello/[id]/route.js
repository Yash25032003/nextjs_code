import { NextResponse } from "next/server";
import { users } from "../route";

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const userid = parseInt(id);

    if (userid > users.length) {
      return NextResponse.json({
        success: false,
        error: "User Not Found",
      });
    }
    const currentuser = users.find((user) => user.id === userid);
    return NextResponse.json({
      success: true,
      data: currentuser,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: "failed to get the user",
    });
  }
}
