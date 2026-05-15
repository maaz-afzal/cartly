import React from "react";

const Button = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`px-5 py-2 rounded-full text-sm font-medium cursor-pointer ${isActive ? "bg-[#256EFF] text-white hover:opacity-90 shadow-sm transition" : "bg-white border border-gray-200 text-gray-700 hover:border-[#256EFF] hover:text-[#256EFF] hover:bg-blue-50 transition"}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
