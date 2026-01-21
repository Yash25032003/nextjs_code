"use client";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

async function addUser(userData) {
  // function to create new user to the server
  const response = await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData), // converts the JS object into json
  });
  return response.json(); // returns the server response as json
  //! Returns a Promise → required by useMutation.
}

export function AddUserForm() {
  // stores the form input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // queryClient se hum cache control karte hain Jaise: refetch, invalidate, optimistic update
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      // User successfully add hone ke baad:
      // "users" wali cache invalidate hoti hai
      // Users list automatically refetch hoti hai
      queryClient.invalidateQueries({ queryKey: ["users"] }); // why invalidateQueries? Taaki newly added user list me dikh sake

      // Form clear ho jaata hai
      setName("");
      setEmail("");
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      // mutate means server ka data change karo
      // ye trigger karega mutation ko and will call the mutationFn: addUser({ name, email })
      // { name, email } directly addUser ko pass hota hai
      mutation.mutate({ name, email });
    }
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Add User (useMutation Example)</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Button type="submit" disabled={mutation.isPending}>
            {mutation.isPending ? "Adding..." : " Add User"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
