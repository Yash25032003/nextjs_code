import React from "react";

//! nested dynamic routing kar rahe hai hum jaha folder products ke andar hai dynamic route [id] and is [id] ke andar hamne banaya hao folder reviews and inside the reviews there is another dynamic route [reviewId].
//* kabhi bhi dynamic route ke name same nahi honge.

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
