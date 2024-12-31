import React from "react";

const Button = ({ text, onClick, style }) => {
  return (
    <button
      onClick={onClick}
      style={style}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      {text}
    </button>
  );
};

export default Button;
