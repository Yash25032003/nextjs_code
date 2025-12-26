import React, { useRef, forwardRef } from "react";

//! useRef = useRef ek React hook hai jo humein DOM element ya koi value ka reference deta hai, jo re-render ke bina update ho sakta hai. useRef ka use DOM access aur mutable values ko store karne ke liye hota hai bina component ko re-render kiye

//? forwardRef = Normally child component ref accept nahi karta. forwardRef ka use parent component se child component tak ref pass karne ke liye hota hai, jisse parent child ke DOM element ko directly control kar sake.

//Creating an input component that accepts a ref prop. forwardRef ka use parent se child component ko ref pass karne ke liye hota hai.
// ref ko props ke andar pass nahi karte usko as a seperate special element pass karte hai parameter ke andar hi
const CustomInput = forwardRef(({ label, placeholder, className }, ref) => {
  return (
    <div className="mb-4">
      <label>{label}</label>
      <input
        // ref={ref} → parent ka ref directly input DOM se attach . Ab parent component: focus kar sakta hai value read/write kar sakta hai

        className={`${className} w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
        ref={ref}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
});

CustomInput.displayName = "CustomInput";

const RefProps = () => {
  const inputRef = useRef(null);
  const secondInputRef = useRef(null);

  const FirstfocusInput = () => {
    inputRef.current?.focus();
  };

  const getFirstInputValue = () => {
    if (inputRef.current) {
      alert(`Input value of first input is  : ${inputRef.current.value}
      `);
    }
  };

  const getSecondInputValue = () => {
    if (secondInputRef.current) {
      alert(`Input value of second input is : ${secondInputRef.current.value}`);
    }
  };

  const clearFirstInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  const clearSecondInput = () => {
    if (secondInputRef.current) {
      secondInputRef.current.value = "";
      secondInputRef.current.focus();
    }
  };

  const secondInputFocus = () => {
    secondInputRef.current?.focus();
  };
  return (
    <section className="bg-white text-black p-4 rounded-2xl">
      <h2>Ref Props</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ad
        adipisci sed neque quis. Tempora, ratione suscipit?
      </p>

      <div>
        <div>
          <h3>Try it out</h3>
          <CustomInput
            ref={inputRef}
            label="First Input with ref"
            placeholder="Type Something"
            className={`flex mt-2 p-2`}
          />
          <CustomInput
            ref={secondInputRef}
            label="Second Input with ref"
            placeholder="Type Something else..."
          />
          <div className="flex flex-wrap gap-4 mt-3">
            <button
              onClick={FirstfocusInput}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              {" "}
              Focus First Input
            </button>
            <button
              onClick={secondInputFocus}
              className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
            >
              {" "}
              Focus Second Input
            </button>
            <button
              onClick={getFirstInputValue}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              {" "}
              Get First Input Value
            </button>
            <button
              onClick={getSecondInputValue}
              className="px-4 py-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition"
            >
              {" "}
              Get Second Input Value
            </button>
            <button
              onClick={clearFirstInput}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              {" "}
              Clear First Input
            </button>
            <button
              onClick={clearSecondInput}
              className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
            >
              {" "}
              Clear Second Input
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefProps;
