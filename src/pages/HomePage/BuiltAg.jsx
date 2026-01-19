import React from "react";
import Video from "../../components/my-comp/Video";
import Heading from "../../components/my-comp/Heading";

function BuiltAg() {
  return (
    <div className="p-6 md:p-4 lg:p-6">
      <div className="flex flex-col justify-center items-center space-y-6">
        <h2 className="text-xl lg:text-3xl">What we have built?</h2>
        
        {/* //heading */}
        <Heading
          header={
            "Use of information technology in development of Agriculture sector."
          }
          headstyle={"text-center text-primarys max-w-3xl"}

          // paragraph
          paragraph={
            "Our portfolio section highlights our successful projects, demonstrating our expertise in delivering tailored IT solutions across diverse industries. Explore how we've helped businesses like yours achieve their goals through innovative technology."
          }
          pstyle={"text-center"}
        />       
      </div>

      {/* //video */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 py-20 text-center">
        <Video video="./assets/summary.mp4" name="Green House Automation" />

        <Video video="assets/green-house.mp4" name="Drone Sprayer" />
      </div>

    </div>
  );
}

export default BuiltAg;
