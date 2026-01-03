//! Q1.What is params in next js
// params Next.js ka ek object hota hai jo URL ke dynamic parts ko store karta hai, jo hum folder-based routing se banate hain.

//! Q2 params kyun use hota hai?
// URL se ID / values read karne ke liye , Dynamic pages banane ke liye , API ya database se specific data fetch karne ke liye

//! Q3 What is catch all segment in next js
// Catch-All Segment Next.js ka ek special dynamic route hota hai jo URL ke multiple path parts ko ek sath capture karta hai aur unhe array ke form me params me store karta hai.
// Isko banane ke liye ... use hota hai.

//* How to write catch all segment in
// [...slug] ese folder ka name rakhne se catch all segment ban jata hai folder.

// jese ki app/docs/[...slug]/page.js likha hua hai folder structure
// URL hai /docs/react/hooks/useeffect matlab docs ke baad react , hooks , useeffect slug ke andar aa rahe hai

//? Params object hoga
// { slug: ["react", "hooks", "useeffect"] }

//! Q4 What is optional catch all segment in next js
// Optional Catch-All Segment Next.js ka ek dynamic route hota hai jo:
// 1. URL me 0, 1 ya multiple segments handle kar sakta hai
// 2. Data ko array ke form me deta hai.
// 3. Agar koi segment na ho to undefined hota hai

//? NOTE that hum catch all segment and optional catch all segment dono ko saath me simultaniously use nahi kar sakte

//! Q5 What is route groups in next js?
// Route Group Next.js ka ek special folder hota hai jo parentheses () me hota hai, aur URL me dikhai nahi deta. iss project me hamne (auth) ko parentheses ke andar rakha hai taaki auth URL me na sikhe.

//* Benifits of route groups are:
// 1. Organizing thr routes into sections like (auth) , (dashboard) , (admin) etc.
// 2. sharing layouts across multiple routes without adding the URL. by creating a layout.jsx for the children of that route group.

//! Q6 what is private components in next js?
// Private Components Next.js me wo components hote hain jo URL se access nahi hote aur sirf internal use ke liye hote hain. Inke folder ya file ka naam underscore _ se start hota hai.

// Private components ka purpose hai Internal logic/UI create karna taaki vo URL me show na ho.

// Here in these project hamne _components folder create kiya hai which is private component , na vo url me show hoga.

//! Q7 What is intercepting route in next js?
// Intercepting Routing Next.js ka ek feature hai jisme hum ek route ko doosre route ke UI ke andar open kar sakte hain, usually modal ke form me, bina page change kiye.

//* Kyun use karte hain?
// Preview dikhane ke liye
// Background page same rakhne ke liye
// URL ko shareable rakhne ke liye

//! Q8 Levels of intercepting route in next js
//* Mandatory ye hai koi sa bhi level ka intercepting route banaye page.jsx name se hi file banegi.

//? 1. Same level :Denoted by (.) ,  Route ko current folder ke SAME LEVEL se intercept karna.
// is project me hamne dashboard ke andar reports route banaya tha usme hamne same level intercepting route bhi banaya hai (.)reports folder banake ushi level me .

//* How to denote/make same level intercepting route: (.)routeName ese denote/make hota hai by writing the folder name like these

//? 2. One-level up intercepting route : Denoted by (..) , Ek folder upar jaake route ko intercept karna
// is project me app ke andar profile folder route hai uska hamne one level up intercepting route banaya hai dashboard ke andar profile route banake uske level me (..)profile folder banaya hai  ,

//? 3. two level intercepting route : Denoted by (..)(..) , two folder upar jaake route ko intercept karna
// example (..)(..)login , here we have done inside the section folder jaha setting ko access karna hai so two level intercepting route banana ke baad (..)(..)setting folder banake 2 level ko access kar paye.

//? 4. Root level intercepting route : Denoted by (...) , Root folder upar jaake route ko intercept karna
// example (...)admin , here we executed it by making a admin route in root and inside the section route we have to access the admin route so we created a root level intercepting route. of (...)admin inside the section folder taaki root level intercepting routing kar sake.

//! Q9. What is parallel routes in next js?
// Parallel Routes Next.js ka ek feature hai jisme hum ek hi page par multiple routes ko side-by-side render kar sakte hain, aur har route independently load aur update hota hai.
//? To show multiple section together in one page, we need to use parallel routes. taaki hum har section ki khud ki navigation , state , error handling/boundaries ko handle kar paye.

//* Jab bhi parralel routes karna hai to file ka name @ se start karo example jo yaha use kiya hamne is project me is @feed , @stats , @tab1 , @tab2 inside the DashboardMain file
// layout.jsx of DashboardMian ke andar in place of children in parallel routes ko wrap karo.

//! Q10 Why to use parallel routes?
// Parallel Routes ka use ek hi layout ke andar multiple routes ko ek sath render karne ke liye hota hai, jahan har section independently load aur update ho sakta hai. agar ek bhi section me error aaya to vo remaining sections ko affect nahi karega.

// Each parallel route Fetches its own data , Handles its own loading/error state , Re-renders independently , if one section is slow , Others still render , Page doesn’t feel blocked

//! Q11. What is unmatched routes in next js?
// Jab user aisi URL pe jata hai jo routing structure me exist nahi karti, use unmatched route kehte hain, aur Next.js usse 404 ya not-found.jsx se handle karta hai.

// Next.js automatically 404 page dikhata hai
// Agar tumne custom page banaya hai to wahi show hota hai.

//! Q12. What is Default Page Convention in Next js?
// Default page wo page hota hai jo Next.js tab render karta hai jab koi parallel route / slot active nahi hota.Ye concept Parallel Routes ke sath use hota hai.
// for example is project me hamne @tab1 parallel route banaya hai ,ek default.jsx file banai hai taaki jab bhi @tab1 fail hoga to default.jsx render hoga page par

//! Q13. What is server components in Next js?
//Server Component wo React component hota hai jo browser me nahi, balki server par render hota hai.
// balki server par render hota hai, Sirf final HTML client ko milta hai.
// By default har component Server Component hota hai.

// jab bhi console karenge hum server component me to terminal me show hoga vo console.

//? Server Components Kya Kya Kar Sakte Hain?
// Database queries , API calls , environment variables
// data fetching happens securly on server

//! Q14. What is Client components in Next js?
// Client Component wo React component hota hai jo browser (client) par render aur execute hota hai.JavaScript browser ko bheji jaati hai , State, events aur effects ka use hota hai
// Client Component banane ke liye file ke top pe likhna padta hai: "use client"

// jab bhi hum useState, useEffect , Forms , Click/submit events use karte hai component ko client component banana padta hai.
// Whenever we need interactivity hame cilent component banana padta hai.

// jab bhi console karenge hum client component me to browser ke inspect me show hoga
