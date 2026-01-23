import React, { useState } from "react";
import Button from "../../components/my-comp/Button";
import Card from "../../components/my-comp/Card";
import Video from "../../components/my-comp/Video";

function PortfolioVideo() {
  const [isImage, setIsImage] = useState(true);
  const activeBtn = "bg-green-600 text-white";
  const inactiveBtn = "bg-secondary text-black";
  return (
    <div className="max-w-7xl mx-auto p-6 md:p-4 lg:p-2">
      
      {/* Buttons */}
      <div className="flex justify-center py-16 space-x-4">
        <Button
          buttonText="Images (2)"
          buttonStyle={`py-2  font-light text-sm lg:text-lg ${
            isImage ? activeBtn : inactiveBtn
          }`}
          onClick={() => setIsImage(true)}
        />

        <Button
          buttonText="Videos (2)"
          buttonStyle={`py-2  font-light text-sm lg:text-lg ${
            !isImage ? activeBtn : inactiveBtn
          }`}
          onClick={() => setIsImage(false)}
        />
      </div>

      {/* Image Section */}
      {isImage && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-center py-8">
          <Card
            img="assets/Research.jpg"
            heading="Green House Automation"
            paragraph="Our passion is figuring out how to navigate the always changing world of technology."
          />

          <Card
            img="assets/Iot.jpg"
            heading="Drone Sprayer"
            paragraph="Our passion is figuring out how to navigate the always changing world of technology."
          />
        </div>
      )}

      {/* Video Section */}
      {!isImage && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-20">
          <Video
            video="assets/green-house.mp4"
            title="AI in Agriculture"
            paragraph="Discover how artificial intelligence is revolutionizing modern farming techniques."
            titlestyle="font-bold text-center"
            paragraphstyle="text-max-w-2xl text-center"
          />

          <Video
            video="assets/summary.mp4"
            title="IoT for Smart Farming"
            paragraph="Learn about the Internet of Things applications in creating efficient agricultural systems."
            titlestyle="font-bold text-center"
            paragraphstyle="text-max-w-2xl text-center"
          />
        </div>
      )}
    </div>
  );
}

export default PortfolioVideo;
