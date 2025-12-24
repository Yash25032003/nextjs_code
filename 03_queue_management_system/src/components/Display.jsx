import React from "react";

const Display = ({ queue, onUpdateStatus, onRemove }) => {
  const getStatusColors = (status) => {
    switch (status) {
      case "waiting":
        return "var(--warning)";
      case "serving":
        return "var(--success)";
      case "completed":
        return "var(--info)";
      default:
        return "var(--text)";
    }
  };
  return (
    <div className="border border-transparent rounded-sm p-5 bg-stone-700 min-w-110 min-h-59 text-left">
      <h2 className="font-bold text-xl">Current Queue</h2>

      {/* Conditional rendering means condition ke hisab se display par kya show ya render karna hai. */}
      {queue.length === 0 ? (
        <p className="text-center mt-6 text-sm text-stone-500">
          No Customer Data
        </p>
      ) : (
        <div>
          {queue.map((customer) => (
            //! providing key in the map function is important to avoid re-rendering of the component and provides great performance
            <div
              key={customer.id}
              className=" flex border border-transparent rounded-sm mt-3 p-2 bg-stone-900"
            >
              <div>
                <h3 className="font-bold">{customer.name}</h3>
                <p className="text-stone-400"> {customer.service}</p>
                <span
                  className="text-sm"
                  style={{ color: getStatusColors(customer.status) }}
                >
                  {customer.status}
                </span>
              </div>
              <div className="ml-34">
                {/* jab bhi status waiting true hoga tab serve button show hoga jo ki status ko update karega */}
                {customer.status === "waiting" && (
                  <button
                    className="bg-green-500"
                    onClick={() => onUpdateStatus(customer.id, "serving")}
                  >
                    Serve
                  </button>
                )}
                {/* jab bhi status serving show karega tab completed waala serve buttong show hoga jiska onUpdateStatus me status hoga completed. */}
                {customer.status === "serving" && (
                  <button
                    className="bg-blue-500"
                    onClick={() => onUpdateStatus(customer.id, "completed")}
                  >
                    Serving
                  </button>
                )}

                {/* remove button hamesha rahega */}
                <button
                  className="bg-red-500 ml-2"
                  onClick={() => onRemove(customer.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Display;
