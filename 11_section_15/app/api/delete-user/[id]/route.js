export async function DELETE(request, { params }) {
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
    const deletedUser = users[userIndex];
    users.slice(userIndex, 1);

    return NextResponse.json({
      success: true,
      message: "User Deleted successfully",
      status: 200,
      data: deletedUser,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: "failed to delete the user",
      status: 500,
    });
  }
}
