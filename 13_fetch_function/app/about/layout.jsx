import Navigation from "@/components/navigation";
import React from "react";

const Aboutlayout = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};

export default Aboutlayout;
