//! Q1. What is server action in nextjs?
// Server Action ek server-side function hota hai jo Next.js me aapko direct backend code likhne deta hai from a client component , bina alag API banaye.

// implementation hai in actions folder
//* Kaha Kaha use hota hia server actions ka
// 1. process formdata
// 2. database operations
// 3. cache updated

//! Q2. What is useFormState hook in react?
// useFormState ek hook hai jo Server Actions ke saath form ka state manage karta hai.
// syntax : const [state, formAction] = useFormState(serverAction, initialState);
// state: latest server response.
// formAction: function passed to <form action>.
// initialState: default state before submit.

//! Q3. What is Form component in nextjs?
// Next.js ka Form component, normal <form> ka enhanced version hai jo Server Actions ke saath smoothly kaam karta hai.

// example
//?import Form from "next/form";
//?import { createUser } from "./actions";

//? export default function Page33() {
//?   return (
//?     <Form action={createUser}>
//?       <input name="email" />
//?       <button type="submit">Submit</button>
//?    </Form>
//?  );
//? }

// Nextjs Form benefits:
// 1. Built in navigation on submit
// 2. automatic form submission
// 3. can process the form on server side

//! Q4. What is Image component in nextjs?
// The Image component in Next.js is an optimized replacement for the HTML <img> tag , It automatically improves performance, loading speed.
// It handles:
// Automatic image optimization
// Responsive images
// Lazy loading

//? example:

// import Image from "next/image";

// export default function Page() {
//   return (
//     <Image
//       src="/profile.png"
//       alt="Profile Image"
//       width={200}
//       height={200}
//     />
//   );
// }

//! Q5 What is link component in nextjs?
// The Link component in Next.js is used for client-side navigation between pages. It enables fast navigation without full page reloads.

//? example:
// import Link from "next/link";

// export default function Page() {
//   return (
//     <Link href="/dashboard">Go to Dashboard</Link>
//   );
// }

//! Q6. What is script component in nextjs?
// Script component se hum external JS scripts ko optimized tareeke se load kar sakte hain.

//? example:
// import Script from "next/script";

// export default function Page() {
//   return (
//     <>
//       <Script src="https://example.com/script.js" />
//     </>
//   );
// }
