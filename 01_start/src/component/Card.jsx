import React from "react";
import { Button } from "@/components/ui/button";

//! props ko pass kar rahe hai hum to have custom values in the component
// default values bhi pass ki hai hamne taaki agar kuch prop pass na kare hum to default value sjow ho screen par
const Card = ({
  title = "Sample",
  description = "Sample description",
  buttonText = "Buy Now",
  imagelink = "https://images.pexels.com/photos/1684880/pexels-photo-1684880.jpeg",
}) => {
  return (
    <div>
      <div className=" border border-b-cyan-700  rounded-md bg-white ">
        <img
          className="w-full h-48 object-cover rounded-md"
          src={imagelink}
          alt="sample"
        />

        <div className="p-4 ">
          <h2 className="text-gray-600">{title}</h2>
          <p className="text-gray-600 mt-2 text-sm">{description}</p>
        </div>
        <Button className="m-3 bg-gray-800 p-2.5 rounded-md hover:bg-emerald-500 text-sm">
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default Card;
