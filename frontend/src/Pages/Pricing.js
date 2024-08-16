import React from "react";

//components
import ToggleSwitch from "../components/ToggleSwitch";
import Navbar from "../components/Navbar";
import Overview from "../components/Overview";
import Authentication from "../components/Authentication";
import Endpoints from "../components/Endpoints";
import Tutorial from "../components/Tutorial";
import CodeExamples from "../components/CodeExamples";
import APIPricing from "../components/APIPricing";

const Pricing = () => {
  return (
    <div>
      <div className="flex flex-row justify-around  bg-blue-500">
        <h1 className="text-4xl font-bold text-white text-center py-14">
          Book Generator API
        </h1>
        <ToggleSwitch />
      </div>
      <Navbar />
      <div className="flex flex-col justify-center items-center px-10 md:px-64 py-10 bg-white dark:bg-gray-900">
        <Overview />
        <Authentication />
        <Endpoints />
        <Tutorial />
        <CodeExamples />
        <APIPricing />
      </div>
    </div>
  );
};

export default Pricing;
