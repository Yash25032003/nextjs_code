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
