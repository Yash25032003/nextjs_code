"use client";

import { useParams } from "next/navigation";
import React from "react";

const ProductsIdSlugPage = () => {
  //! Whenever we want to use any hook we have to make the component a client component
  const params = useParams();
  return (
    <div>
      <h1>Product id : {params.id}</h1>
      <h2>Slug is : {params.slug}</h2>
    </div>
  );
};

export default ProductsIdSlugPage;
