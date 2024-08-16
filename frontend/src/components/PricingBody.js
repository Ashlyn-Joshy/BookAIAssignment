import React from "react";

// components
import Overview from "./Overview";
import Authentication from "./Authentication";
import Endpoints from "./Endpoints";

const PricingBody = () => {
  return (
    <div className="flex flex-col justify-center items-center px-10 md:px-64 py-10 bg-gray-900">
      <Overview />
      <Authentication />
      <Endpoints />
    </div>
  );
};

export default PricingBody;
