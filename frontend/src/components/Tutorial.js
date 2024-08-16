import React from "react";

const Tutorial = () => {
  return (
    <div
      id="tutorial"
      className="border border-slate-700 rounded px-6 pb-6 pt-10  mt-6 w-full h-full dark:bg-slate-700"
    >
      <h1 className=" text-2xl font-bold text-blue-400">Tutorial</h1>
      <h3 className="text-xl font-bold text-blue-400 mt-7">
        Step 1: Obtain an API Key
      </h3>
      <p className="text-black dark:text-white">
        Generate an API key using the button in the Authentication section
        above.
      </p>
      <h3 className="text-xl font-bold text-blue-400 mt-7">
        Step 2: Make a Request
      </h3>
      <p className="text-black dark:text-white">
        Use your preferred programming language or tool to make a POST request
        to the /api/generate-book endpoint. Include your API key in the header
        and the required parameters in the request body.
      </p>
      <h3 className="text-xl font-bold text-blue-400 mt-7">
        Step 3: Handle the Response
      </h3>
      <p className="text-black dark:text-white">
        The API will return a response with a job ID. You can use this ID to
        check the status of your book generation job.
      </p>
      <h3 className="text-xl font-bold text-blue-400 mt-7">
        Step 4: Retrieve the Generated Book
      </h3>
      <p className="text-black dark:text-white">
        Once the job is complete, you can retrieve the generated book using the
        job ID (endpoint to be implemented).
      </p>
    </div>
  );
};

export default Tutorial;
