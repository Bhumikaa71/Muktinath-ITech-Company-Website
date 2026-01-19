import React from "react";
import Heading from "../../components/my-comp/Heading";
import Card from "@/components/my-comp/Card";
import Button from "@/components/my-comp/Button";
import { Link } from "react-router-dom";

const OurServices = () => {
  return (
    <div className="bg-sidebar-accent text-black p-6 md:p-4 lg:p-0">
      <div className="container max-w-7xl mx-auto flex flex-col justify-center items-center text-center py-6 space-y-16">

        {/* //heading section */}
        <div className="">
          <Heading
            header={"Our Services"}
            headstyle={""}
            
            // paragraph section
            paragraph={
              "Our agriculture technology IT firm provides cutting-edge services for optimizing crop yields and resource management. From precision farming tech to data analytics tools, we empower farmers and agribusinesses to thrive sustainably."
            }
            pstyle={"max-w-4xl"}
          />
        </div>

        {/* //card section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          <Card
            img="assets/Research.jpg"
            heading="Consistent Research in Technical Sector"
            paragraph="Regular research allows for timely adoption of emerging technologies, maximizing efficiency in agricultural processes and operations."
          />

          <Card
            img="assets/AgricultureDeveloping.jpg"
            heading="Mainstream Technologies in Agricultural Development"
            paragraph="Implement AI algorithms for predictive analytics, crop monitoring, pest detection, and yield optimization, enhancing decision-making processes for farmers."
          />
          <Card
            img="assets/Fruits.jpg"
            heading="Facilitating Exchange of Information"
            paragraph="Facilitate networking events, workshops, and conferences where researchers, students, entrepreneurs, and professionals can exchange insights, experiences, and innovative ideas."
          />
        </div>

        {/* //Read more button section */}
        <div className="md:w-full">
          <Link to="/services">
            <Button
              buttonText={"Read More"}
              buttonStyle={
                "text-white bg-Five py-2 rounded-none lg:rounded-none text-xs lg:text-lg"
              }
            ></Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
