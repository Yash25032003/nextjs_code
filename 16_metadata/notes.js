//! Q1 What is metadata?
// Next.js me Metadata ka use SEO aur browser info set karne ke liye hota hai, jaise: Page ka title , Description , Social media preview
//* example
//? Below static metadata hai
// export const metadata = {
//   title: "Home Page",
//   description: "This is the home page",
// };

//? Things to keep in mind
// 1. Cannot mix static and dynamic metadata in same route
// 2. Metadata works only in server components only

//! Q2. What is title metadata?
// Title metadata wo text hota hai jo: Browser tab me dikhta hai , Google search result me aata hai
// example:

// export const metadata = {
//   title: "Login | MyApp",
// };

//! Q3. What is default , template and absolute in metadata?
//* 1. default:
// default wo title hota hai jo tab use hota hai jab kisi page ne apna title define nahi kiya ho.

// example:
// export const metadata = {
//     title: {
//       default: "MyApp",
//     },
//   };

//* 2. template:
// template defines how page titles are formatted, usually by appending the app name.
//example:

// export const metadata = {
//     title: {
//       default: "MyApp",
//       template: "%s | MyApp",
//     },
//   };

//* 3. absolute:
// absolute ek full custom title set karta hai aur template apply nahi hota.

//! Q4. What is static open graph image?
// Static Open Graph Image ek fixed image hoti hai jo tab dikhai deti hai jab aap apni website ka link social media pe share karte ho. ye image Build time pe generate hoti hai ,Har user ke liye same hoti hai

// example:
// export const metadata = {
//   openGraph: {
//     image: "https://nextjs.org/og-image.png",
//   },
// };

//! Q5. What is dynamic open graph image?
// Dynamic Open Graph Images wo images hoti hain jo har page ke data ke according dynamically generate hoti hain. Dynamic Open Graph (OG) images are generated at request time based on data like params, database content, or user info.

// example:

// import { ImageResponse } from "next/og";

// export const size = {
//   width: 1200,
//   height: 630,
// };

// export const contentType = "image/png";

// export default async function OGImage({ params }) {
//   return new ImageResponse(
//     (
//       <div
//         style={{
//           fontSize: 64,
//           background: "#0f172a",
//           color: "white",
//           width: "100%",
//           height: "100%",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         {params.slug}
//       </div>
//     ),
//     size
//   );
// }
