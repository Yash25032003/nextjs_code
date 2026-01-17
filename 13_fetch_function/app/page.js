import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const page = async () => {
  const response = await fetch("http://localhost:3000/api/timer");
  const data = await response.json();

  const isLoggedIn = true;

  if (!isLoggedIn) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col gap-4">
      <h1>Next.js response (default)</h1>
      <p>Time: {data.readable}</p>
      <p>Request ID: {data.requestId}</p>
      <Link href="/product">Go to products</Link>
    </div>
  );
};

export default page;
