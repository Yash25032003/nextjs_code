import "./App.css";
import Form from "./components/Form";
import Display from "./components/Display";
import { useState } from "react";

function App() {
  const [queue, setQueue] = useState([]);

  const addToQueue = (customer) => {
    // add data to queue
  };
  const updateStatus = (id, newStatus) => {
    // update status of customer in queue
  };
  const removeFromQueue = (id) => {
    // remove customer from queue
  };
  return (
    <div>
      <h1 className="text-blue-600 font-bold text-3xl">
        Queue Management System
      </h1>
      <h2 className="mt-6 text-gray-400">Manage your customers efficiently</h2>
      <div className="flex ml-40 mt-10">
        <div className="mr-50">
          <Form onAdd={addToQueue} />
        </div>
        <div className="">
          <Display />
        </div>
      </div>
    </div>
  );
}

export default App;
