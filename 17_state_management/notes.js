//! Q1. What is tanstack query?
// TanStack Query (formerly called React Query) is a data-fetching and server-state management library used to fetch, cache, synchronize, and update server data in frontend applications , It removes the need to manage loading, error, and caching logic manually.

// What tanstack query do?
// 1. handles data fetching
// 2. provides caching
// 3. manages loading , error , success states
// 4. supports optimistic updates

//* What is optimistic UI?
// Optimistic Updates means updating the UI immediately before the server confirms the request, assuming the request will succeed.If the server later fails, the UI is rolled back to the previous state.

// Optimistic UI ka matlab hai:
// 👉 Server ka response aane se pehle hi UI update kar dena
// 👉 User ko fast experience milta hai
// 👉 Agar API fail ho jaye → UI wapas old state me chali jaati hai

//! Q2. What is useQuery hook?
// useQuery ek hook hai jo server se data fetch karta hai aur usko cache + sync karta hai React app me.
// It automatically handles: data fetching , caching , loading state , error state , background refetching

// example:
// const { data, isLoading, error } = useQuery({
//     queryKey: ["users"],
//     queryFn: fetchUsers,
//   });

//* What is queryKey: queryKey ek unique key hoti hai jo batati hai kaunsa data fetch ho raha hai , cache kaha store hoga
// example : queryKey: ["users"] means fetch users , cache under "users

//? What is queryfn: queryFn is the function that actually fetches data , It must return a Promise , return the fetched data

//! example:
//  const fetchUsers = async () => {
//   const res = await fetch("/api/users");
//   return res.json();
// };

// queryFn: fetchUsers;

//? Query means : fetching data from server
//* Mutation means : put , patch , posting , deleting something

//! Q3. What is a useMutation hook?
// useMutation is a hook used to create, update, or delete data on the server (POST, PUT, PATCH, DELETE).

// syntax:
// const mutation = useMutation({
//   mutationFn: () => Promise,
// });

// Trigger it using:
// mutation.mutate(data);
//? Implementation of useMutation hook is in folder components and file add-user-form.js

//! Q4. What is caching in nextjs?
// Caching in Next.js means storing data or rendered output so that Next.js does not recompute or refetch it again and again. Jo data ya page ek baar ban chuka hai, usko save karke rakhna
// Har request par dubara fetch ya render na karna

// data jo static ho usse cache karna chahiye for fast user experience dynamic data ko cache karne se koi benefit nahi hai because data baar baar change ho raha hai.

//* How caching works:
// Request comes in
// 1.→ Check cache
// 2.→ If data exists (cache HIT) → return cached data
// 3.→ If not (cache MISS) → fetch / compute
// 4.→ Save result in cache
// 5.→ Return response

//! Q5. What is hydration in nextjs?
// Hydration ka matlab hai: Server se jo HTML aata hai wo static hota hai , Browser me React us HTML ko interactive bana deta hai

//* Request
// → Next.js renders HTML on server
// → HTML sent to browser
// → Page visible (fast)
// → React JS loads
// → Hydration happens
// → Page becomes interactive

//? In server components: HTML gets render
//? IN client components: HTML gets hydrated in browser to make interactive

// Hydration is needed because: to make the static HTML interactive in the broswer

//todo: Server-rendered HTML (Before Hydration):
// <button>Click Me</button>

// todo: After Hydration
//<button onClick={() => alert("Clicked!")}>Click Me</button>
