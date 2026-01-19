import React from "react";
import AboutDetails from "./AboutDetails";
import DirectorsProfile from "./DirectorsProfile";
import TeamProfile from "./TeamProfile";
import Heading from "../../components/my-comp/Heading";

function About() {
  return (
    <div>
      <div className="py-20 bg-gradient-primary p-4">
        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center mt-24 space-y-10">
          {/* //header and paragraph*/}
          <Heading
            header={"About Muktinath iTech"}
            headstyle={"text-white font-semibold text-center"}
            paragraph={
              "Discover tailored IT solutions for streamlined operations and accelerated growth. From software development to cybersecurity, we empower businesses to thrive in the digital age. Elevate your success with us."
            }
            pstyle={"text-white text-center max-w-4xl"}
          />
        </div>
      </div>

      {/* //our aim section */}
      <div className="bg-tertiary flex flex-col justify-center items-center py-20 space-y-6">
        <Heading
          header={"Our Aim"}
          headstyle={"text-center font-semibold"}
          paragraph={
            "Developing Innovation, Accelerating Change: Connecting Sustainability and Technology for a Smarter, More Connected World."
          }
          pstyle={"text-center"}
        /> 
        {/* //others pages link */}
        <AboutDetails />
      </div>
      <DirectorsProfile />
      <TeamProfile />
      </div>
  );
}

export default About;
