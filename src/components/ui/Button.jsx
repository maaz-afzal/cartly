import React from "react";

const Button = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`px-5 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-200 ${
        isActive
          ? "bg-[#256EFF] text-white hover:bg-[#1a54cc] shadow-sm"
          : "bg-white text-gray-700 border border-gray-200 hover:border-[#256EFF] hover:text-[#256EFF] hover:bg-blue-50 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:border-[#256EFF] dark:hover:text-[#256EFF] dark:hover:bg-gray-600"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
