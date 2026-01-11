"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/product");
  };
  return (
    <div>
      <button onClick={handleClick()}>Go to products</button>
    </div>
  );
};

export default Login;
