"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/product");
  };
  const handleGoBack = () => {
    router.back();
  };
  return (
    <div>
      <div className="flex flex-col">
        <button onClick={handleClick}>Go to products</button>
        <button onClick={handleGoBack}>Go back</button>
      </div>
    </div>
  );
};

export default Login;
