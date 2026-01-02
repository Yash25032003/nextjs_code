import React from "react";
import Link from "next/link";

const Section = () => {
  return (
    <div>
      <h1> Section Page</h1>
      <div className="grid grid-rows-2 gap-3">
        <Link href={`/setting`}> Go to Setting</Link>
        <Link href={`/admin`}> Redirect to admin</Link>
      </div>
    </div>
  );
};

export default Section;
