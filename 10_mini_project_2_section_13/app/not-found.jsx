"use client";
import Link from "next/link";

// custom not found 404 page in next js
export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-md">
        {/* Subtle illustration */}
        {/* <div className="mb-12">
          <img
            src="https://www.shutterstock.com/image-illustration/minimalist-404-page-error-web-260nw-1772188067.jpg"
            alt="Minimalist 404 illustration"
            className="w-full max-w-sm mx-auto opacity-90"
          />
        </div> */}

        {/* 404 heading */}
        <h1 className="text-8xl font-light text-gray-800 mb-4">404</h1>

        {/* Message */}
        <h2 className="text-3xl font-medium text-gray-700 mb-4">
          Page not found
        </h2>
        <p className="text-lg text-gray-500 mb-10">
          Sorry, we couldn't find the page you're looking for.
        </p>

        {/* Back home button */}
        <Link
          href="/"
          className="inline-block px-8 py-3 text-base font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-900 transition-colors duration-200"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
