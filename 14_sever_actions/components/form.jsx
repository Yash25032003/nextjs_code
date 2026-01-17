"use client";
import React from "react";
import { useFormState } from "react-dom";

const Form = () => {
  const [state, formAction] = useFormState(createUser, {});
  return (
    <form action={formAction}>
      <input name="email" placeholder="Enter email" />
      <button type="submit">Submit</button>
      {state.error && <p> {state.error}</p>}
    </form>
  );
};

export default Form;
