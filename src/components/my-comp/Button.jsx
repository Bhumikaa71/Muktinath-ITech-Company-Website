import React from "react";
function Button({ buttonText,buttonStyle,onClick }) {
  return (
    <button
      className={`border border-white p-6 rounded-full hover:bg-white hover:text-green-500 hover:cursor-pointer ${buttonStyle}`}
      onClick={onClick}>
      {buttonText}
    </button>
  );
}

export default Button;
