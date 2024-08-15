import React from "react";

//component
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
      <h1 className="text-4xl bg-blue-500 font-bold text-white text-center py-14">
        Book Generator API
      </h1>
      <Navbar />
    </div>
  );
};

export default Header;
