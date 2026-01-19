import React from "react";

function Card({ img, heading, paragraph, bgcolor, ...props }) {
  return (
    <div
      {...props}
      className={`w-full p-4 rounded-2xl shadow-md cursor-pointer flex flex-col space-y-8 hover:-translate-y-4 duration-300 ${bgcolor}`}
    >
      <div>
        <img src={img} className="rounded-xl" alt={heading} />
      </div>

      <div className="flex flex-col space-y-6">
        <h2 className="font-bold text-md lg:text-xl">{heading}</h2>
        <p className="text-xs lg:text-lg">{paragraph}</p>
      </div>
    </div>
  );
}

export default Card;

