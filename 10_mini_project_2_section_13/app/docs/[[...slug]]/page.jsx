import React from "react";

const page = async ({ params }) => {
  const { slug } = await params;
  return (
    <div>
      <h1> Docs page</h1>
      {slug?.join("/")}
    </div>
  );
};

export default page;
