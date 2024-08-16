import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Authentication = () => {
  const [apiKey, setApiKey] = useState("");
  const [message, setMessage] = useState("");
  const generateKey = () => {
    const newKey = uuidv4();
    setApiKey(newKey);
    setMessage(`Your API Key:  ${newKey}`);
  };
  return (
    <div
      id="authentication"
      className="border border-slate-700 rounded px-6 pb-6 pt-10 bg-slate-600 mt-6 w-full h-full"
    >
      <h1 className=" text-2xl font-bold text-blue-400">Authentication</h1>
      <p className="text-white">
        To use the API, you need to include your API key in the header of each
        request:
      </p>
      <div className="border border-slate-400 rounded">
        <div className="m-3">
          <span className="p-2 border border-slate-400 rounded text-white">
            X-API-Key: YOUR_API_KEY
          </span>
        </div>
      </div>
      <p className="text-white">
        To generate an API key, use the button below:
      </p>
      <button
        className="text-white rounded bg-blue-500 p-3 my-2 hover:bg-blue-900 hover:translate-y-1 transform transition-transform duration-300"
        onClick={generateKey}
      >
        Generate API Key
      </button>
      <p className="border border-slate-400 rounded p-2">
        <span className="text-white">{message}</span>
      </p>
    </div>
  );
};

export default Authentication;
