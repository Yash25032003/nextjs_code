import React from "react";

// Next.js 16 me params ko async await se access karna padta hai
const ProductId = async ({ params }) => {
  // access of id is there in these params
  const { id, reviewId } = await params;
  return <div>ProductId is : {id}</div>;
};

export default ProductId;
