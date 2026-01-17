"use client";

import React from "react";
import { useRouter } from "next/navigation";

const ProductsPage = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };
  return (
    <div className="flex flex-row gap-7">
      ProductsPage
      <button onClick={handleGoBack}>Go back</button>
    </div>
  );
};

export default ProductsPage;
