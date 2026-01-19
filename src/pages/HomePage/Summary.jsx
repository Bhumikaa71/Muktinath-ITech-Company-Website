import React from "react";
import { Link } from "react-router-dom";
import Heading from "../../components/my-comp/Heading";
import Button from "@/components/my-comp/Button";

const Summary = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 py-20 px-6 lg:px-6 xl:px-0">
        <div className="w-full h-125">

          {/* //video section */}
          <div className="rounded-tr-[150px] w-full h-full overflow-hidden">
            <video
              loop
              autoPlay
              muted
              playsInline
              className="object-cover w-full h-full"
            >
              <source src="./assets/summary.mp4" type="video/mp4"></source>
            </video>
          </div>
        </div>

        <div className="flex flex-col space-y-4 lg:space-y-12">
          {/* //heading section */}
          <Heading
            header={
              "Empowering Agricultural Growth Through Tailored IT Solutions."
            }
            headstyle={"text-black"}
          />
          <div className="grid grid-row-1 space-y-4 lg:space-y-0 md:grid-row-2 lg:grid-cols-3">
            <div className="flex flex-col justify-center items-center">
              <span className="text-primarys font-bold text-xl lg:text-4xl">
                12+
              </span>
              <p>Project Completed</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <span className="text-primarys font-bold text-xl lg:text-4xl">
                10+
              </span>
              <p>Satisfied Customer</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <span className="text-primarys font-bold text-xl lg:text-4xl">
                07+
              </span>
              <p>Partners</p>
            </div>
          </div>
          {/* //paragraph */}
          <p>
            Our passion is figuring out how to navigate the always changing
            world of technology and create solutions that go above and beyond.
          </p>
          
           {/* //button section */}
           <div className="md:w-full text-center">
          <Link to="/portfolio">
            <Button
              buttonText={"Learn More"}
              buttonStyle={
                "text-white bg-Five py-2 rounded-none lg:rounded-none text-xs lg:text-lg"
              }
            ></Button>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
