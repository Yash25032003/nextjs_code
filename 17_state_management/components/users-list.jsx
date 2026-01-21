"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

async function fetchUsers() {
  // fetching users from the api endpoint we created
  const response = await fetch("/api/users");
  // convert the response into json and return it
  return response.json();

  //! It returns a Promise, which is required by useQuery.
}
const UsersList = () => {
  const {
    data: users,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["users"], // Uniquely identifies this query , Used for caching & refetching
    queryFn: fetchUsers,
  });

  if (isLoading) {
    return <div className="p-4"> Loading users...</div>;
  }
  if (isError) {
    return <div> Error : {error.message}</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Users List (useQuery example)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-x-2">
          {users?.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between p-2 border rounded-sm"
            >
              <div>
                <div className="font-medium">{user.name}</div>
                <div className="text-sm text-muted-foreground">
                  {" "}
                  {user.email}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UsersList;
