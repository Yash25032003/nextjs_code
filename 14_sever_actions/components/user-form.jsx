import React from "react";
import { createUser } from "@/actions";
//! seperate file server action

const UserForm = () => {
  return (
    <form action={createUser} className="flex flex-row gap-6 mt-6 ml-5">
      <input name="name" placeholder="Enter Name" />
      <button type="submit">Create</button>
    </form>
  );
};

export default UserForm;
