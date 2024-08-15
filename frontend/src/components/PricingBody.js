import React from "react";

// components
import Overview from "./Overview";
import Authentication from "./Authentication";

const PricingBody = () => {
  return (
    <div className="flex flex-col justify-center items-center px-10 md:px-64 py-10 bg-gray-900">
      <Overview />
      <Authentication />
    </div>
  );
};

export default PricingBody;
