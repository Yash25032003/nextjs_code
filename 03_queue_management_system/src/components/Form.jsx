import React from "react";

const Form = ({ onAdd }) => {
  return (
    <div className="border rounded-sm p-5 bg-gray-500 bg-transparent">
      <h2 className="text-blue-600 font-bold text-left">Add to Queue</h2>
      <input
        className="mt-4 p-2 pr-20 border rounded-sm "
        type="text"
        placeholder="Customer Name"
      />
      <div>
        <select
          className="mt-4 min-w-full p-2 border rounded-sm"
          name="Select Service"
          id=""
        >
          <option value="Accounting">Accounts</option>
        </select>
      </div>
      <button className="mt-4 w-full bg-blue-700">Add Customer </button>
    </div>
  );
};

export default Form;
