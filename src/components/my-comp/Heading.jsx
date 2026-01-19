import React from "react";

function Heading({header,subheading, paragraph, textstyle,headstyle,pstyle,substyle}) {
  return (
    <div>
      <div className={`flex flex-col space-y-2 lg:space-y-4 ${textstyle}`}>
        <h1 className={`font-bold text-2xl lg:text-5xl ${headstyle}`}>{header}</h1>
        <h2 className={`${substyle}`}>{subheading}</h2>
        <p className={`max-w-2xl text-xs lg:text-lg ${pstyle}`}>{paragraph}</p>
      </div>
    </div>
  );
}

export default Heading;
