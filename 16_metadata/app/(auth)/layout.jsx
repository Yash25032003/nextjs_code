import React from "react";

export const metadata = {
  title: {
    default: "Auth Page | Project3", // default me same rahega metadata agar change naho kiya to kisi route me metadata
    template: "%s | Project3", // agar change karenge to %s ki jagah vo change metadata aa jayega jese example ke liye hamne signup route me kiya .
    absolute: "", // absolute me pura metadat change ho jayega by using absolute keyword inside metadata.
  },
  description: "This is the auth page layout",
};

const AuthLayout = ({ children }) => {
  return <div>{children}</div>;
};

export default AuthLayout;
