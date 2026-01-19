import NavBar from "../../components/my-comp/NavBar";
import BuiltAg from "./BuiltAg";
import Blog from "./BlogCard";
import OurServices from "./OurService";
import Summary from "./Summary";
import Map from "../../components/my-comp/Map";
import Footer from "../../components/my-comp/Footer";
import Button from "../../components/my-comp/Button";
import Video from "../../components/my-comp/Video";
import Heading from "../../components/my-comp/Heading";
import BannerPartnership from "./BannerPartnership";

function Home() {
  return (
    <div>
      <NavBar />
      <div className="h-full bg-gradient-primary px-6 py-24 lg:py-32 mt-12">
        <div className="flex flex-col my-auto h-full justify-center items-center">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-col lg:flex-row justify-between items-center">
            <div className="">
              <Heading
                header={
                  "Internet & Intranet, Information, Innovation and Intelligence."
                }
                paragraph={
                  "Join us as we venture into the world of technological wonder. We are architects of digital inventiveness, not just creators. Our passion is figuring out how to navigate the always changing world of technology and create solutions that go above and beyond."
                }
                textstyle={"text-white"}
                headstyle={"max-w-2xl"}
              />

              {/* //button section */}
                <Button
                  buttonText={"Get Started"}
                  buttonStyle={"lg:w-2/5 text-white text-lg my-8"}
                />
            </div>

            <div className="md:w-2/3 lg:w-2/5 my-4 w-full">
              <Video video="./assets/hero-video.mp4" />
            </div>
          </div>
        </div>
      </div>

      {/* Drone Video */}
      <Summary />
      {/* //our services */}
      <OurServices />
      <BuiltAg />
      <Blog />
      <BannerPartnership />
      <Map />
      <Footer />
    </div>
  );
}

export default Home;
