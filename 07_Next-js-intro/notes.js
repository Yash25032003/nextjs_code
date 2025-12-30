// ! What is Next.js and why frameworks are recommended ?
// ANS=> Next.js is a production ready framework built by vercel that provides additional structure.

//! Problems in react js ?
// ANS=> 1. Manually handle karna padta hia routing by using react router dom(No built in routing)
// 2. NO SEO optimization
// 3. No SSR (Server Side Rendering)
// 4. No built in performance optimization

//! What is router in next js ?
// ANS=> A router is what which manages how the user moves or navigates between different pages in your application. Router in Next.js ka kaam hota hai pages ke beech navigation handle karna aur URL ke base par kaunsa page render hoga ye decide karna.

//! Types of router in next js ?
// ANS=> Two types of routers are
// 1. Pages Router
// 2. App Router

//! What is pages router ?
// ANS=> Pages Router Next.js ka old routing system hai jisme routing pages/ folder ke through hoti hai.
// Rule ye hota hai ki pages folder ke andar jo file hoti hai, wahi URL route ban jata hai.

//! What is app router ?
// ANS=> App Router Next.js ka modern routing system hai jo app/ folder use karta hai aur React Server Components par based hota hai. Rule ye hota hai ki app folder me har route ke liye page.js hoti hai.

//* | Feature            | Pages Router         | App Router             |
// | ------------------ | -------------------- | ---------------------- |
//? | Folder             | `pages/`             | `app/`                 |
//? | Status             | Old / Legacy         | New / Recommended      |
//? | Routing Style      | File-based           | File-based (enhanced)  |
//? | Data Fetching      | `getServerSideProps` | Server Components      |
//? | Layouts            | Manual               | Built-in (`layout.js`) |
//? | Loading UI         | Manual               | `loading.js`           |
//? | Error Handling     | Manual               | `error.js`             |
//? | Performance        | Good                 | 🚀 Better              |
//? | SEO                | Good                 | 🚀 Better              |
//? | JS sent to browser | More                 | Less                   |

//! Use Pages Router ONLY if:
// You are working on an old / existing project and which is having next js version less than 12.

//! When to Use App Router? (IMPORTANT)
//  Starting a new Next.js project
//  Better SEO & performance chahiye
//  Server-side rendering zyada use karna hai

//! What is React js ?
// ANS=> React js is a javascript/ UI library for building user interfaces. It helps us in building components and managing the state of the application.

//! What is Next js ?
// ANS=> Next js is a framework built on top of React js which gives us additional structure and features to build our application.

//! difference between react js and next js ?

// | Feature          | React JS              | Next.js                     |
// | ---------------- | --------------------- | --------------------------- |
// | Type             | Library               | Framework                   |
// | Built by         | Meta                  | Vercel                      |
// | Rendering        | Client-side (CSR)     | CSR + SSR + SSG             |
// | Routing          | Manual (React Router) | Built-in file-based routing |
// | SEO              | ❌ Poor by default     | ✅ Excellent                 |
// | Performance      | Good                  | 🚀 Better                   |
// | Backend Support  | ❌ No                  | ✅ API Routes                |
// | Configuration    | More setup            | Minimal setup               |
// | Production Ready | Needs tools           | Ready out-of-the-box        |

//! What is top level folders in next js ?
// ANS=> In Next.js, top-level folders wo main folders hote hain jo project ke root (base) me hote hain aur jinka special meaning hota hai.
//? 1. app: This folder is where all the pages of your application are stored. like (page.tsx, layout.tsx , etc)
//* , File-based routing app folder ke andar hoti hai kaha folder ka name jo route hamen chahiye vo likhte hai and page.tsx file banate hai us folder me

// 2. public folder : This folder is where all the static assets of your application are stored. like (images, css, js, etc)

//! Layout.tsx file ?
// ANS=> Layout.tsx is a file jaha hum shared layout or components  ko insert karte hai jo common ho multiple pages me. And we also wrap our whole application in it by wrapping {children in it}

//! Special or Reserved file name in next js ?
// ANS=> 1. page.tsx: This is the main file of the page. It is where we write the code for the page.
// 2. layout.tsx: This is the main file jaha pura code wrap hota hai
// 3. loading.tsx: This is the file where we write the code for the loading screen jab tak data load ho raha hai UI par.
// 4. error.tsx: This is the file where we write the code for the error screen jab tak error ho raha hai UI par.
// 5. not-found.tsx: This is the file where we write the code for the 404 page.
// 6. route.ts: This is the file where we write the code for the route file.
