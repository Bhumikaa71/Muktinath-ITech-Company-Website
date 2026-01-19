import React from "react";
import Heading from "../../components/my-comp/Heading";
const profile = [
  {
    img: "assets/prayash.png",
    name: "Prayash Basnet",
    post: "Business Development Officer",
  },

  {
    img: "assets/Hari.png",
    name: "Er. Humanath Pokhrel",
    post: "Full Stack Developer",
  },

  {
    img: "assets/Nitesh.png",
    name: "Nitesh Mandal",
    post: "Flutter Developer",
  },

  {
    img: "assets/Gulshan.png",
    name: "Gulshan Kumar Mahaseth",
    post: "AI/ML Developer",
  },

  {
    img: "assets/Saroj.png",
    name: "Er. Saroj Chaudhary",
    post: "IoT & Firmware Engineer",
  },

  {
    img: "assets/Sahil.png",
    name: "Sahil Thapa",
    post: "IoT Developer",
  },

  {
    img: "assets/Abishek.png",
    name: "Abhishek Pandey",
    post: "Junior Developer",
  },

  {
    img: "assets/Bibek.png",
    name: "Bibek Timilsina",
    post: "Junior Developer",
  },
  {
    img: "/assets/Bhumika.jpeg",
    name: "Bhumika Bista",
    post: "Frontend Intern",
  },
  {
    img: "/assets/swostika.png",
    name: "Swostika Sapkota",
    post: "Frontend Intern",
  },
];

function TeamProfile() {
  return (
    <div className="bg-tertiary ">
      <div className="max-w-7xl mx-auto">
        <Heading
          header={"Muktinath iTech Team"}
          headstyle={"font-semibold text-center py-6 lg:py-10"}
        />
         {/* pushpa rai details section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 p-6 lg:p-0 space-y-4 lg:space-y-0">
          <img
            src="assets/pushpa.png"
            alt="pushpa raj joshi"
            className="h-113 w-113 object-cover rounded-2xl"
          ></img>
          <div className="flex flex-col">
            <Heading
              header={"Mr.Pushpa Raj Joshi"}
              headstyle={"font-semibold text-primarys"}
              subheading={"Head of IT"}
              substyle={"font-bold text-lg"}
              paragraph={
                "Mr. Pushpa Raj Joshi, a resident of Baneshwor, Kathmandu, currently serves as the IT Head at Muktinath Krishi Company Ltd. His academic journey led him to earn a Bachelor's degree in Electronics and Communication from Himalaya College of Engineering. Throughout his career, he has held diverse roles including Network Administrator, Broadcast Engineer, Senior IT Officer, and Deputy Chief Executive Officer in esteemed organizations. Mr. Joshi's professional trajectory is marked by continuous learning and skill enhancement. He has undergone several training programs to augment his expertise. His proficiency spans across various domains including Networking and Firewall Devices, Linux Operating System, Database management with MySql and SQL Server, Data Analysis, IoT-based Mobile and Web applications, Configuration of ISP-related equipment, RF Wireless Transmission, VMware, and High Availability (HA) modes. With a specialization in Electronics and Communication Engineering, Mr. Joshi brings a wealth of experience and knowledge to his current role, contributing significantly to the success and technological advancement of his organization."
              }
            />
          </div>
        </div>

        {/* //next  team profile details*/}
        <div className="py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 lg:p-0">
            {profile.map((item, index) => (
              <div key={index}>
                <div className="w-full flex justify-center text-center">
                  <img
                    src={item.img}
                    className="shadow-lg rounded-2xl h-78 w-88 object-cover"
                    alt="images"
                  />
                </div>

                <div className="p-4 text-center">
                  <h2 className="font-semibold text-primarys text-xs lg:text-lg">
                    {item.name}
                  </h2>
                  <h3 className="text-secondarys font-semibold text-xs lg:text-lg">{item.post}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamProfile;
