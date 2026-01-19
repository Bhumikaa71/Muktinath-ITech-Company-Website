import React from "react";
import Heading from "../../components/my-comp/Heading";

const profile = [
  {
    img: "assets/Gajendra shrestha.png",
    name: "Gajendra Man Shrestha",
    post: "Director",
    description:
      "Mr. Gajendra Man Shrestha is a key member of Muktinath iTech. He plays an active role in supporting the company's technological initiatives. His experience and dedication help drive innovation and smooth operations within the organization.",
  },
  {
    img: "assets/milan.png",
    name: "Milan Karmachairya",
    post: "Director",
    description:"Mr. Milan Karmacharya is the Founder and Managing Director of Highland Air & Ocean Logistics Pvt. Ltd. and a Director of Muktinath Itech. He has over 22 years of extensive experience in international freight forwarding, multimodal transport, and logistics management. Milan holds a Bachelor's degree in Business Administration and is a Registered Auditor certified by the Institute of Chartered Accountants of Nepal. Before establishing his own company, he worked for 11 years in administration, finance, and operations with leading multinational freight companies like DHL and FedEx. Known for his expertise in logistics and global trade, he is based in Kathmandu."
  },
  {
    img:"assets/Birendra.png",
    name:"Birendra Raj Bhatt",
    post:"Director",
    description:"Mr. Birendra Raj Bhatt is the Director of Muktinath Itech with over 19 years of professional experience. He currently leads the General Service Department at Muktinath Bikas Bank's Central Office in Kathmandu. Mr. Bhatt started his career as a Computer Supporter and Head of Accounting at Surya Construction Pvt. Ltd. He holds an MBA from Phoenix College of Management and a BBS from Prithvi Narayan Campus and is currently pursuing a BSc. IT degree from Infomax College, Pokhara. He is known for his strong management skills and expertise in IT and administration."

  }
];

function DirectorsProfile() {
  return (
    <div className="max-w-7xl mx-auto p-6 lg:p-0 space-y-4 lg:space-y-0">
      <Heading 
      header={"Board of Directors"} headstyle={"font-semibold text-center py-0 lg:py-10"}
      />

      <div className="">
        {profile.map((item, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 space-y-10">
                <div className="">
              <img
                src={item.img}
                className="shadow-md rounded-2xl h-113 w-113 object-cover"
                alt="images"
              /></div>

              <div className="flex flex-col space-y-2">
                <h2 className="text-2xl lg:text-4xl font-semibold text-primarys">
                  {item.name}
                </h2>
                <h3 className="text-lg font-semibold">{item.post}</h3>
                <p className="text-xs lg:text-lg">{item.description}</p>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default DirectorsProfile;
