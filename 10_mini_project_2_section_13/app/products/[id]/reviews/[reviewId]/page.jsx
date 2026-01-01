import React from "react";

const ReviewId = async ({ params }) => {
  // access of both id and reviewId is there in these params
  const { reviewId, id } = await params;
  return (
    <div>
      ReviewId is : {reviewId} , id is : {id}
    </div>
  );
};

export default ReviewId;
