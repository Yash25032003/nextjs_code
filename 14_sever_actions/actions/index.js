"use server";
// creating a server action
export async function createUser(formData) {
  // input se jo name dalenge hum usko access kar rahe hai
  const name = formData.get("name");
  console.log("The name is ", name);
}
