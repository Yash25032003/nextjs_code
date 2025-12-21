import "./App.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  // count = count + 1; DO NOT DO THIS. It shows a warning "warning: This assignment will throw because "count" is a constant"

  // function to increment the count by 1.
  //() brakets ke andar parameters likhte hai
  const incrementer = () => {
    setCount(count + 1);

    // what if we use multiple setCount
    // here the value will increase by 3 through callbacks

    // setCount((prev) => prev + 1);
    // setCount((prev) => prev + 1);
    // setCount((prev) => prev + 1);
  };

  // function to decrement the count by 1.
  const decrementer = () => {
    setCount(Math.max(count - 1, 0)); // to avoid negative values
  };

  // useState to manage input form
  const [inp, setInp] = useState(0);

  const handleButton = () => {
    setCount(Number(inp));
    setInp(0);
  };

  return (
    <>
      <h1> Counter App</h1>
      <div className="m-4"> Count is {count}</div>

      <div>
        {/* Is tarike se hum function ke parameters ko bhi access kar sakte hai so IT IS THE PREFEREED WAY */}

        <button onClick={() => incrementer()}>Increase</button>

        {/* <button onClick={incrementer()}>Increase</button>
        we can not pass the function like this way
        */}

        {/* Hum below tarike se pass kar sakte hai function ko par fir below method me hum function ke paramters ko access nahi kar payenge  */}
        <button onClick={decrementer}>Decrease</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      <div>
        <input
          className="m-6 p-2 border rounded-2xl"
          value={inp}
          onChange={(e) => {
            setInp(Number(e.target.value));
          }}
          type="text"
          placeholder="Enter a number"
        />
        <button
          onClick={() => {
            handleButton();
          }}
        >
          Set to {inp}
        </button>
      </div>
    </>
  );
}
