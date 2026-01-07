//! Q1. What is GET endpoint in next js ?
// GET endpoint ek API route hota hai jo server se data fetch karne ke liye use hota hai.Client request bhejta hai , Server sirf data return karta hai , Koi data create / update nahi hota
// Here api folder ke andar hai home usme GET request ka code likha hai.

//* Jab bhi server ya backend ka code likho to file ka name route.js hona chahiye type js , ts ho sakta hai.

//! Q2. What is POST endpoint in next js ?
// POST endpoint ek API route hota hai jo client se data receive karta hai aur server par naya data create ya process karta hai.
//Client data bhejta hai (request body me) , Server us data ko save / process karta hai , Response return karta hai

//? POST ka example hai in folder create-user me .

//! Q3. What is PUT endpoint in next js ?
// PUT endpoint ka use hota hai poora resource update karne ke liye , Client complete data bhejta hai , Server existing data ko poora replace kar deta hai

//! Q4. What is PATCH endpoint in next js ?
// PATCH endpoint ka use hota hai partial update ke liye , Sirf wahi fields bhejte ho jo change karni ho , Baaki data same rehta hai

//* Difference between PUT and PATCH endpoint in next js?

// | Feature      | PUT              | PATCH               |
// | ------------ | ---------------- | ------------------- |
// | Update type  | Full update      | Partial update      |
// | Data sent    | Complete object  | Only changed fields |
// | Risk         | Data overwrite   | Safer               |
// | Payload size | Large            | Small               |
// | Use case     | Replace resource | Modify resource     |

//? How to handle dynamic route ka example hai hello folder me hai.

// example of PUT is in folder put-user and example of PATCH is in folder patch-user

//! Q5. What is Query parameters in nextjs?
// Query parameters URL ka wo part hote hain jo ? ke baad aata hai aur optional data pass karne ke kaam aata hai.
// example : /products?page=2&sort=price , where page=2 , sort = price

//? Queyr paramteres kab use hote hai?
// Pagination (page=2)
// Search (q=iphone)
// Filters (category=mobile)
// Sorting (sort=price)
// Optional data pass karna

//* Query parameters ko access karne ka tarika hai in folder hello

//! Q6.What are headers in next js?
// Headers HTTP request aur response ke sath bheji jaane wali extra information hoti hai , Client aur server ke beech metadata pass hota hai.

//? Headers Kyun Use Karte Hain? : Authentication (token pass karna) , Content type batana

//* Request Headers: It carries information about the incoming request and tells the server about the client , what to accept , auth information , etc.

//* Response Headers: Ye headers server → client response ke sath jaate hain aur client ko batate hain
// response ka type , caching rules  , security rules

//! Q7. What is Cookies in next js?
// Cookies chhoti-chhoti data values hoti hain jo browser me store hoti hain aur har request ke sath server ko automatically bheji jati hain.
// It is mostly used for Authentication , user preference etc

// kese cookies ko access karte hai and send karte hai from api postman uske examples hai in folder cookies inside api folder.
