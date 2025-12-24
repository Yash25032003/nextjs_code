import "./App.css";
import Form from "./components/Form";
import Display from "./components/Display";
import { useState } from "react";

function App() {
  const [queue, setQueue] = useState([]);

  const addToQueue = (customer) => {
    // customer is expected to be an object

    // add data to queue
    setQueue([...queue, { ...customer, id: Date.now(), status: "waiting" }]);
    //! ...queue se hum jo bhi existing item ya data queue array ke andar hai usko copy kar rahe hai using spread operator

    //? ...customer se jo bhi data customer se aa raha hai usko as it is copy kar rahe hai and kuch extra fields dal rahe hai which are id , status
  };
  const updateStatus = (id, newStatus) => {
    // update status of customer in queue
    //! first iterate karo over all customer queue jisme find karo id ke match kar rahe hai ki nahi

    setQueue(
      queue.map((customer) =>
        customer.id === id ? { ...customer, status: newStatus } : customer
      )
    );

    //* agar id match kari to pehle copy kar lo customer data and status update kar do agar id match nahi kari to as it is copy kar lo
  };
  const removeFromQueue = (id) => {
    // remove customer from queue
    // filter se jo customer ki id match nahi karegi uska new array ban jayega aur queue me save ho jayega jisse automatically matched customer remove ho jayega
    setQueue(queue.filter((customer) => customer.id !== id));
  };
  return (
    <div>
      <h1 className="text-blue-600 font-bold text-3xl">
        Queue Management System
      </h1>
      <h2 className="mt-6 text-gray-400">Manage your customers efficiently</h2>
      <div className="flex ml-40 mt-10">
        <div className="mr-15">
          <Form onAdd={addToQueue} />
        </div>
        <div>
          <Display
            queue={queue}
            onUpdateStatus={updateStatus}
            onRemove={removeFromQueue}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
