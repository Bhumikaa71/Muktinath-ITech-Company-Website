import React from "react";
import Card from "../../components/my-comp/Card";
import Heading from "../../components/my-comp/Heading";

function Services() {
  return (
    <div className="">
   
      <div className="py-20 bg-gradient-primary p-4">
        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center mt-24 space-y-10">
          <Heading
            header={"Innovative IT Solutions for the Modern Enterprise"}
            headstyle={
              "text-white font-semibold text-center max-w-5xl"
            }
            paragraph={
              "Discover tailored IT solutions for streamlined operations and accelerated growth. From software development to cybersecurity, we empower businesses to thrive in the digital age. Elevate your success with us."
            }
            pstyle={"text-white text-center max-w-5xl"}
          />
        </div>
      </div>
      {/* //card */}
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 md:p-4 lg:p-2 my-8">
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
        <Card
          img="assets/Iot.jpg"
          heading="AI & IOT"
          paragraph="Conducting ongoing research in technical sectors like Artificial Intelligence (AI), Blockchain, and Internet of Things (IoT) ensures that agricultural development remains updated with the latest advancements."
        />

        <Card
          img="assets/Developing.jpg"
          heading="Developing User-Friendly Technology"
          paragraph="Create intuitive mobile applications or web-based platforms that provide actionable insights, guidance, and resources to empower farmers in decision-making and problem-solving."
        />

        <Card
          img="assets/softwareDevelopment.jpg"
          heading="Software Development"
          paragraph="Software development is the systematic process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components."
        />
      </div>      
    </div>
  );
}

export default Services;
