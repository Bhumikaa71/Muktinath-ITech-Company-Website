import React from "react";
import Heading from "../../components/my-comp/Heading";
import PortfolioVideo from "./PortfolioVideo";

function Portfolio() {
  return (
    <div>
      
      <div className="py-20 bg-gradient-primary p-4">
        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center mt-24 space-y-10">
          {/* heading and paragraph */}
          <Heading
            header={"Spotlight on Success: Dive into Our Portfolio"}
            headstyle={
              "text-white font-semibold text-center max-w-5xl"
            }
            paragraph={
              "Dive into our portfolio to witness our expertise in action. From web development to digital marketing, our projects showcase our commitment to delivering tailored solutions for success. Explore now and see how we can help your business thrive."
            }
            pstyle={"text-white text-center max-w-5xl"}
          />
        </div>
      </div>
      {/* //next link */}
      <PortfolioVideo />
    </div>
  );
}

export default Portfolio;
