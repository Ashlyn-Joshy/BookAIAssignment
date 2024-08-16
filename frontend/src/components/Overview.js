import React from "react";

const Overview = () => {
  return (
    <div
      id="overview"
      className="border border-slate-700 rounded px-6 pb-6 pt-10 w-full h-full dark:bg-slate-700"
    >
      <h1 className=" text-2xl font-bold text-blue-400">Overview</h1>
      <p className="text-black dark:text-white">
        The Book Generator API allows you to generate books on various topics
        using different language models. This documentation provides details on
        how to use the API, including authentication, available endpoints, and
        code examples.
      </p>
    </div>
  );
};

export default Overview;
