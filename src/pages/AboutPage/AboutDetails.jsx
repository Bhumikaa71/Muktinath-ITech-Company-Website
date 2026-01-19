import React from "react";
import { GoCpu } from "react-icons/go";
import { GiFarmTractor } from "react-icons/gi";
import { RiWifiLine } from "react-icons/ri";
import { TbUsers } from "react-icons/tb";
import { CiCloud } from "react-icons/ci";
import { ImStatsBars } from "react-icons/im";
import { IoStatsChartOutline } from "react-icons/io5";
import { GrSettingsOption } from "react-icons/gr";

const Details = [
  {
    heading: "Information Technology Sector",
    icon: <GoCpu className="text-primarys" />,
    title: "Drive Innovation",
    description:
      "Design and develop mobile apps, websites, and digital platforms to meet modern technological demands and drive business growth.",
  },
  {
    heading: "Agricultural Sector",
    icon: <GiFarmTractor className="text-Six" />,
    title: "Smart Farming Solutions",
    description:
      "Implement technologies like AI, Blockchain, and IoT to enhance productivity, optimize resource use, and support precision farming.",
  },
  {
    icon: <RiWifiLine className="text-primarys" />,
    title: "Enable Connectivity",
    description:
      "Provide advanced data processing, secure networking, and wireless connectivity solutions to ensure seamless operations and informed decision-making.",
  },
  {
    icon: <TbUsers className="text-primarys" />,
    title: "Empower Farmers",
    description:
      "Develop accessible tools and platforms to help farmers reduce costs, improve sustainability, and enhance market access.",
  },
  {
    icon: <CiCloud className="text-Six" />,
    title: "Adopt Advanced Technologies",
    description:
      "Leverage Artificial Intelligence, Machine Learning, and Cloud Computing to create scalable and efficient IT systems.",
  },
  {
    icon: <ImStatsBars className="text-primarys" />,
    title: "Data-Driven Insights",
    description:
      "Utilize data analytics to monitor soil health, water usage, and crop performance, driving smarter decision-making.",
  },
  {
    icon: <IoStatsChartOutline className="text-Seven" />,
    title: "Transform Businesses",
    description:
      "Enable digital transformation by offering sustainable, user-friendly technologies that improve productivity and adaptability.",
  },
  {
    icon: <GrSettingsOption className="text-Seven" />,
    title: "Foster Collaboration",
    description:
      "Partner with agricultural institutions, researchers, and policymakers to promote agritech innovations and skill development.",
  },
];

function AboutDetails() {
  return (
    <div className="max-w-7xl mx-auto flex justify-between items-center p-6 lg:p-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {Details.map((item, index) => (
          <div key={index} className="py-6">
            <div className="flex flex-col space-y-4 lg:space-y-6">
              <div className="flex flex-col space-y-2 lg:space-y-4 justify-center items-center">
                <h2 className="text-lg lg:text-2xl font-semibold text-center">{item.heading}</h2>

                <div className="text-2xl lg:text-5xl text-center">{item.icon}</div>

                <h2 className="text-lg lg:text-2xl font-bold text-center">{item.title}</h2>
              </div>

              <p className="text-secondaryss text-center text-xs lg:text-lg">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutDetails;
