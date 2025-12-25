//? Ye code dikhata hai ki React me props aur dynamic Tailwind CSS classes ka use karke ek reusable Button component kaise banaya jata hai. Isme parent component useState ka use karke state manage karta hai aur event handlers child components ko pass karta hai, jo React ke unidirectional data flow concept ko follow karta hai.

import React from "react";
import { useState } from "react";

//Reusable button component
//! props ko destruct kar liya parameters me function ke so iss process ko kehte hai destructuring
function Button({ text, color, size, onClick, disabled }) {
  return (
    <button
      // applying dynamically styling in tailwind css
      className={`
      px-6 py-2 rounded-lg font-medium transition-all duration-300
    //*   size and color based styling ki hai hamne below 
      ${size === "small" ? "text-sm px-2 py-1" : ""}
      ${size === "large" ? "text-lg px-8 py-3" : ""}
      ${color === "primary" ? "bg-blue-500 hover:bg-blue-600 text-white" : ""}
      ${color === "secondary" ? "bg-gray-500 hover:bg-gray-600 text-white" : ""}
      ${color === "danger" ? "bg-red-500 hover:bg-red-600 text-white" : ""}
      ${color === "success" ? "bg-green-500 hover:bg-green-600 text-white" : ""}
      ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

const BasicProps = () => {
  const [clickCount, setClickCount] = useState(0);
  return (
    <section className="p-8 bg-white rounded-xl shadow-2xl text-black">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">Basic Props</h2>
      <p className="text-sm text-stone-800">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum facilis
        illo ips
      </p>
      <div className="space-y-3">
        <h3 className="mt-3 text-lg font-semibold">Different Colors: </h3>
        <div className="flex flex-wrap gap-4">
          {/* Use kar rahe hai above Button component ko jisse hamne create kiya hai with variations in color  , size , disabled ability */}
          <Button
            text="Primary Color"
            color="primary"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Secondary Color"
            color="secondary"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Danger Color"
            color="danger"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Success Color"
            color="success"
            onClick={() => setClickCount(clickCount + 1)}
          />
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="mt-3 text-lg font-semibold ">Different Sizes:</h3>
        <div className="flex flex-wrap gap-4 ">
          <Button
            text="small"
            color="primary"
            size="small"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="large"
            color="secondary"
            size="large"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Disabled Button"
            color="success"
            disabled={true}
            onClick={() => setClickCount(clickCount + 1)}
          />
        </div>
      </div>
      <div className="mt-3 border rounded-sm p-2 border-transparent bg-blue-100">
        <h3 className="font-gray-800 ">Click count: {clickCount}</h3>
      </div>
    </section>
  );
};

export default BasicProps;
