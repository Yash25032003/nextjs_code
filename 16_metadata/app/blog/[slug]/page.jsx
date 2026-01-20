import React from "react";

//* Dynamic metadata example
export async function generateMetadata({ params }) {
  const { slug } = await params;
  return {
    title: `Blog ${slug}`,
    description: "Blog page is here",
  };
}
const Blog = async ({ params }) => {
  const { slug } = await params;
  return <div>Blog {slug}</div>;
};

export default Blog;
