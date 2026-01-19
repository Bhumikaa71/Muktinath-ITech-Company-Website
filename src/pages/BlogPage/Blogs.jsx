import React from "react";
import Card from "../../components/my-comp/Card";
import Heading from "../../components/my-comp/Heading";

function Blogs() {
  return (
    <div>
     

      <div className="py-20 bg-gradient-primary p-6">
        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center mt-24 space-y-10">
          <Heading
            header={"Cultivating Knowledge: Browse Our Blog Articles"}
            headstyle={
              "text-white font-semibold  text-center max-w-5xl"
            }
            paragraph={
              "Welcome to our blog—a hub of insights and inspiration. Dive in for expert tips, industry trends, and actionable advice. Explore now and level up your knowledge!"
            }
            pstyle={"text-white text-center max-w-5xl"}
          />

          <div className="w-full">
            <img
              src="/assets/8.jpg"
              alt="Blog"
              className="h-100 w-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-16 ">
        <Card
          img="assets/1.jpg"
          heading="Web & App Development"
          paragraph="We excel in app and web development, crafting seamless digital experiences that captivate users. Leveraging cutting-edge technologies, we create intuitive mobile apps and dynamic websites tailored to your needs."
        />

        <Card
          img="assets/4.jpg"
          heading="Tech In Agriculture"
          paragraph="Technology revolutionizes agriculture, boosting productivity and sustainability. From precision tools to AI analytics, innovations empower data-driven decisions, optimizing farming for a promising future."
        />

        <Card
          img="assets/5.jpg"
          heading="AI & IOT Devices"
          paragraph="AI and IoT revolutionize agriculture, optimizing productivity and resource use. Sensors collect data on soil and crops, analyzed by AI for informed decisions. This innovation fosters sustainability and resilience in farming."
        />
      </div>
     
      
    </div>
  );
}

export default Blogs;
