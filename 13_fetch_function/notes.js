//! Q1. what is auto no cache , no store , force cache in next js
// Next.js me jab aap fetch() use karte ho, tab Next.js decide karta hai ki data cache kare ya nahi kare

//* Iske 3 main modes hote hain:
// 1. auto no cache (default)
// 2. no store
// 3. force cache

//? What is auto no cache: Next.js khud decide karta hai cache karna hai ya nahi , Agar data dynamic lagta hai, Next.js cache nahi karega , Agar data static lagta hai, Next.js cache kar lega
//* example : const res = await fetch("https://api.example.com/data"); by default auto no cache hai

// What is no store: Kabhi bhi cache mat karo , Har request par fresh API call
//* example : const res = await fetch("https://api.example.com/data", { cache: "no-store" });

// What is force cache: Zabardasti cache karo , Ek baar data fetch , Phir same data reuse
//* example : const res = await fetch("https://api.example.com/data", { cache: "force-cache" });

//! Q2. What is Revalidate in next js?
// revalidate batata hai ki cached data kitne time ke baad dobara fresh fetch hoga.
//* example:
// const res = await fetch("https://api.example.com/posts", {
//    next: { revalidate: 60 }, //? Is data ko 60 seconds tak cache rakho,60 sec ke baad next request pe fresh data lao.”
//   });

//! Q3. What is revalidate on demand in next js?
// Normal revalidate: 60 me kya hota hai? , “60 seconds ke baad data automatically refresh ho jayega”
// But kabhi-kabhi aap chahte ho: “Jab data change ho, usi moment page update ho jaye”
// Yahi On-Demand Revalidation hai

//* example:
// fetch("https://api.example.com/posts", {
//   next: { tags: ["posts"] }, //? jab bhi posts me changes aayenge to data update ho jayega screen par bhalai revalidate laga ho bahut time ka.
// });

//! Q4. What is useParams hook in nextjs?
// useParams hook ka use dynamic route ke URL parameters ko access karne ke liye hota hai.
// example:
// const params = useParams();
//   return <h1>Blog ID: {params.id}</h1>;

//? component must be client component to use any next js hook
// Nested dynamic routes can be accessed or stored in object in useParams

//! Q5. What is usePathname hook in nextjs?
//? usePathname hook current URL ka pathname return karta hai (without query params).
// only works in client component.
// usefull for active navigation state
// useful in conditional rendering
//? always start with / in pathname

// IMplementation in about folder

//* what is query params?
// Query Params URL ke end me aane wale key–value pairs hote hain jo extra information bhejte hain.
// example: /products?category=mobile&page=2
//*  ? → Query params start hote hain
// category=mobile → ek query param , & → multiple params ko separate karta hai , page=2 → dusra query param

//! Q6. What is useSearchParams hook in nextjs?
// useSearchParams hook URL ke query parameters ko read karne ke liye use hota hai.
//? Query parameters are explained in above Q5.
// example: /products?category=mobile&page=2

// Implementation in search folder

// useSearchParams helps in :
// 1. Dynamic Filtering: Query params ke through data ko filter karna.
// 2. Deep Linking: Exact state ka URL banana jise directly open kiya ja sake
// 3. Pagination : Data ko pages me divide karna using query params
