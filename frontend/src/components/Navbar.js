import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-gray-700 text-white">
      <ul className="flex flex-col md:flex-row justify-center md:justify-evenly items-center uppercase text-center w-full py-5 font-semibold shadow-md">
        <li className="hover:text-blue-500">
          <a href="#overview">Overview</a>
        </li>
        <li className="hover:text-blue-500">
          <a href="#authentication">Authentication</a>
        </li>
        <li className="hover:text-blue-500">
          <a href="#endpoints">Endpoints</a>
        </li>
        <li className="hover:text-blue-500">
          <a href="#tutorial">Tutorial</a>
        </li>
        <li className="hover:text-blue-500">
          <a href="#code-examples">Code Examples</a>
        </li>
        <li className="hover:text-blue-500">
          <a href="#pricing">Pricing</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
