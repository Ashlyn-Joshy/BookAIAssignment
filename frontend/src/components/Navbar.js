import React from "react";

const Navbar = () => {
  return (
    <div>
      <ul className="flex flex-col md:flex-row justify-center md:justify-evenly items-center uppercase text-center w-full py-5 bg-gray-700 text-white font-semibold shadow-md">
        <li>Overview</li>
        <li>Authentication</li>
        <li>Endpoints</li>
        <li>Tutorial</li>
        <li>Code Examples</li>
        <li>Pricing</li>
      </ul>
    </div>
  );
};

export default Navbar;
