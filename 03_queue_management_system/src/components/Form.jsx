import React, { useState } from "react";

const Form = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [service, setService] = useState("");

  // handling the form submission
  const handleSubmit = (e) => {
    // By default, HTML form submit hote hi page reload karta hai
    //React apps me hume ye behavior nahi chahiye
    e.preventDefault();

    // validations
    // agar name ya service empty raha to return kar jao
    if (!name.trim() || !service.trim()) {
      return;
    }

    // trim method se extra spaces string ki remove hoti hai
    onAdd({ name, service }); // name , service ko onAdd method ko pass kar diya

    // form submission ke baad default values dena hai fir se name ,  service ko
    setName("");
    setService("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="border border-transparent rounded-sm p-5 bg-stone-700">
        <h2 className="text-blue-600 font-bold text-left">Add to Queue</h2>
        <input
          className="mt-4 p-2 pr-20 border rounded-sm bg-gray-950 "
          type="text"
          placeholder="Customer Name"
          value={name}
          //! jab bhi form me value change hogi to setName ke through hum new input value ko set kar sakte hai name me
          onChange={(e) => {
            setName(e.target.value); //* e.target.value se form ke andar ki current value ko access kar sakte hai
          }}
        />
        <div>
          <select
            className="mt-4 min-w-full p-2 border rounded-sm bg-gray-950"
            name="Select Service"
            id=""
            value={service}
            onChange={(e) => {
              setService(e.target.value);
            }}
          >
            <option value="">Select Service</option>
            <option value="consultation">Consultation</option>
            <option value="payment">Payment</option>
            <option value="support">Support</option>
          </select>
        </div>
        <button className="mt-4 w-full bg-blue-700" type="submit">
          Add Customer
        </button>
      </div>
    </form>
  );
};

export default Form;
