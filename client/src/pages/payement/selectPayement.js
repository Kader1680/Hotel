import React, { useState } from "react";

function SelectPayment() {
  const [paymentMethod, setPaymentMethod] = useState("dahabia");

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Select Payment Method</h2>
      
  
      <div className="flex justify-center mb-4">
        <button
          className={`px-4 py-2 rounded-l-md ${paymentMethod === "dahabia" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setPaymentMethod("dahabia")}
        >
          Cart Dahabia
        </button>
        <button
          className={`px-4 py-2 rounded-r-md ${paymentMethod === "versement" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setPaymentMethod("versement")}
        >
          Check Versement
        </button>
      </div>

      
      {paymentMethod === "dahabia" ? (
        <div>
          <label className="block text-sm font-medium mb-1">Cart Number</label>
          <input
            type="text"
            placeholder="Enter your card Dahabia number"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:bg-gray-100"
          />
          <label className="block text-sm font-medium mb-1">Cart Number</label>
          <input
            type="text"
            placeholder="Enter Key (Password)"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:bg-gray-100"
          />
        </div>
      ) : (
        <div>
          <label className="block text-sm font-medium mb-1">Upload Check Image</label>
          <input
            type="file"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            accept="image/*"
          />
        </div>
      )}


        <button
          className={`px-4 py-2  mt-3 rounded-md bg-green-500 text-white`}
        
        >
          Pay Now
        </button>
    </div>
  );
}

export default SelectPayment;