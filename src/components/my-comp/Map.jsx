import React from "react";
import Button from "./Button";

function Map() {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 py-10 space-x-2 space-y-6 lg:space-y-0 px-4">

          {/* //send message box */}
            <div className="border  px-6 flex flex-col gap-6 py-4 shadow-lg rounded-2xl h-150 bg-sidebar-accent">
              <h2 className="font-medium text-2xl lg:text-3xl">Send Message</h2>
              <div className="flex flex-col space-y-6">

                {/* //username section */}
                <input
                  type="text"
                  placeholder="Username"
                  className="border p-4 shadow-md hover:border-primarys hover:shadow-md hover:shadow-primarys transition-all duration-300 bg-white"
                ></input>

                  {/* //email section */}
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border p-4 shadow-md hover:border-primarys hover:shadow-md hover:shadow-primarys transition-all duration-300 bg-white"
                ></input>
              </div>

              {/* //textarea section */}
              <textarea
                placeholder="Your Message"
                className="p-4 w-full border shadow-md hover:border-primarys hover:shadow-md hover:shadow-primarys transition-all duration-300 bg-white"
              ></textarea>

              {/* //paragraph section */}
              <p className="text-gray-400 text-sm lg:text-lg">
                We value your thoughts and would love to hear your feedback
                throught email.
              </p>

              {/* //policy section */}
              <div className="flex space-x-2 text-gray-400 text-sm lg:text-lg">
                <input type="checkbox" className="bg-white"></input>
                <span>I agree with the policy</span>
              </div>

              {/* //button section */}
              <div className="flex justify-center items-center md:justify-end md:w-full">
                <Button
                  buttonText={"Send Message"}
                  buttonStyle={
                    "text-white bg-green-600 py-2 text-xs lg:text-lg"
                  }
                />
              </div>
            </div>

          {/* //map section */}
          <div className="flex justify-center items-center col-span-2">
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.3448459109577!2d85.32223371099242!3d27.73750772406113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb194f10250f3d%3A0x53ec15dc96d7fe12!2sMuktinath%20Krishi%20Company!5e0!3m2!1sen!2snp!4v1767337604012!5m2!1sen!2snp"
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
