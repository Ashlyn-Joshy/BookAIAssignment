import React, { useEffect, useState } from "react";

const ToggleSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    document.documentElement.classList.toggle("dark", savedMode);
  }, []);

  const handleToggle = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("darkMode", newMode);
  };
  return (
    <div className="text-center py-14">
      <button
        onClick={handleToggle}
        className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full shadow-md"
      >
        {darkMode ? (
          <span className="text-gray-900 dark:text-gray-100">🌙</span>
        ) : (
          <span className="text-gray-900 dark:text-gray-100">🌞</span>
        )}
      </button>
    </div>
  );
};

export default ToggleSwitch;
