import React from "react";

const Endpoints = () => {
  return (
    <div className="border border-slate-700 rounded px-6 pb-6 pt-10 bg-slate-600 mt-6 w-full h-full">
      <h1 className=" text-2xl font-bold text-blue-400">Endpoints</h1>
      <h3 className="text-xl font-bold text-blue-400 mt-7">Generate Book</h3>
      <p className="pt-2">
        <button className="bg-blue-300 p-1 font-bold rounded mr-2">Post</button>
        <button className="bg-blue-500 text-white p-4 rounded font-bold">
          /api/generate-book
        </button>
      </p>
      <h3 className="text-xl font-bold text-blue-400 mt-7">Request Body</h3>
      <table className="mt-2 border w-full text-white border-slate-400 rounded sm:text-sm sm:px-1 md:text-base md:px-2">
        <tr className="uppercase bg-blue-500 text-white text-left">
          <th className="py-5 px-2">Parameter</th>
          <th className="py-5 px-2">Type</th>
          <th className="py-5 px-2">Description</th>
        </tr>
        <tr className="border-b border-slate-400">
          <td className="text-blue-300 font-semibold py-5 px-2">api</td>
          <td className="py-5 px-2">string</td>
          <td className="py-5 px-2">
            The API provider to use. Options: "openai" or "together"
          </td>
        </tr>
        <tr className="border-b border-slate-400">
          <td className="text-blue-300 font-semibold py-5 px-2">model</td>
          <td className="py-5 px-2">string</td>
          <td className="py-5 px-2">
            The specific model to use (e.g., "gpt-3.5-turbo", "gpt-4",
            "llama-2-70b")
          </td>
        </tr>
        <tr className="border-b border-slate-400">
          <td className="text-blue-300 font-semibold py-5 px-2">topic</td>
          <td className="py-5 px-2">string</td>
          <td className="py-5 px-2">The main topic or theme of the book</td>
        </tr>
        <tr className="border-b border-slate-400">
          <td className="text-blue-300 font-semibold py-5 px-2">language</td>
          <td className="py-5 px-2">string</td>
          <td className="py-5 px-2">
            The language in which the book should be generated
          </td>
        </tr>
        <tr>
          <td className="text-blue-300 font-semibold py-5 px-2">word_count</td>
          <td className="py-5 px-2">string</td>
          <td className="py-5 px-2">
            The approximate number of words for the generated book
          </td>
        </tr>
      </table>
      <h3 className="text-xl font-bold text-blue-400 mt-7">Response</h3>
      <div className="border border-slate-400 rounded">
        <pre className="p-4 rounded text-white max-w-full overflow-x-auto md:max-w-lg lg:max-w-2xl">
          <code>
            {`{
    "message": "Book generation started",
    "status": "processing",
    "job_id": "unique-job-identifier"
}`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Endpoints;
