import React from "react";
import Map from "../../components/my-comp/Map";
import Heading from "../../components/my-comp/Heading";

function ContactUs() {
  return (
    <div className="max-w-7xl mx-auto mt-24">
      <Heading
        header={"For More Information Visit Us"}
        headstyle={"text-center font-semibold text-Five"}
      ></Heading>
      <div>
        <Map />
      </div>
    </div>
  );
}

export default ContactUs;
