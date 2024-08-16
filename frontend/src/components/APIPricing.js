import React from "react";

const APIPricing = () => {
  return (
    <div
      id="pricing"
      className="border border-slate-700 rounded px-6 pb-6 pt-10  mt-6 w-full h-full dark:bg-slate-700"
    >
      <h1 className=" text-2xl font-bold text-blue-400">API Pricing</h1>
      <p className="text-black dark:text-white">
        Our API pricing is based on the model used and the number of tokens
        processed. Here's a breakdown of the costs:
      </p>
      <table className="mt-2 border w-full text-black dark:text-white border-slate-400 rounded sm:text-sm sm:px-1 md:text-base md:px-2">
        <tr className="uppercase bg-blue-500 text-white text-left">
          <th className="py-5 px-2">API</th>
          <th className="py-5 px-2">Model</th>
          <th className="py-5 px-2">Price per 1K tokens</th>
        </tr>
        <tr className="border-b border-slate-400">
          <td className="py-5 px-2">OpenAI</td>
          <td className="py-5 px-2">GPT-3.5</td>
          <td className="py-5 px-2">$0.002</td>
        </tr>
        <tr className="border-b border-slate-400">
          <td className="py-5 px-2">OpenAI</td>
          <td className="py-5 px-2">GPT-4</td>
          <td className="py-5 px-2">$0.03</td>
        </tr>
        <tr className="border-b border-slate-400">
          <td className="py-5 px-2">Together AI</td>
          <td className="py-5 px-2">Llama-2-70b</td>
          <td className="py-5 px-2">$0.0008</td>
        </tr>
        <tr className="border-b border-slate-400">
          <td className="py-5 px-2">Together AI</td>
          <td className="py-5 px-2">Llama-2-13b</td>
          <td className="py-5 px-2">$0.0006</td>
        </tr>
      </table>
      <h3 className="text-xl font-bold text-blue-400 mt-7">Token Estimation</h3>
      <p className="text-black dark:text-white">
        On average, 1 token is approximately 4 characters or 0.75 words. For
        precise pricing, we recommend using our token calculator tool.
      </p>
      <h3 className="text-xl font-bold text-blue-400 mt-7">Billing</h3>
      <p className="text-black dark:text-white">
        You will only be charged for the tokens used in generating the book. The
        API tracks token usage and bills accordingly. Detailed usage reports are
        available in your account dashboard.
      </p>
    </div>
  );
};

export default APIPricing;
