"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

const SearchPage = () => {
  const searchParams = useSearchParams();

  const query = searchParams.get("q");
  const category = searchParams.get("category");
  const page = searchParams.get("page");
  return (
    <div>
      <h1>Search result for : {query}</h1>
      <p>Category : {category}</p>
      <p>page : {page}</p>
    </div>
  );
};

export default SearchPage;
