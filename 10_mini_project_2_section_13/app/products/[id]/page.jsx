import React from "react";

const ProductId = async ({ params }) => {
  // access of id is there in these params
  const { id, reviewId } = await params;
  return <div>ProductId is : {id}</div>;
};

export default ProductId;
