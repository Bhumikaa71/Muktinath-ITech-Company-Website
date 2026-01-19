import React from "react";
import Card from "../../components/my-comp/Card";
import Heading from "../../components/my-comp/Heading";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import BlogDetails from "./BlogDetails";

function Blog() {
  return (
    <div className="bg-sidebar-accent text-black p-6 md:p-4 lg:p-0">
      <div className="container max-w-7xl mx-auto flex flex-col justify-center items-center text-center py-6 space-y-16">
        
        {/* //heading section */}
        <div className="">
          <Heading
            header={"Our Blog"}
            headstyle={""}
            paragraph={
              "Our blog section offers insightful articles covering a variety of topics relevant to technology, business, and innovation. Stay informed and inspired as we share valuable insights, tips, and trends to help you navigate the ever-evolving landscape of technology and business."
            }
            pstyle={"max-w-4xl"}
          />
        </div>

        {/* // card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">

          {/* //web development card */}
          <BlogDetails
            title="Web & App Development"
            titlestyle="text-primarys font-bold"
            description="In today’s digital age, web and app development are essential to business success, requiring a strong grasp of both foundational and advanced concepts. Web development includes frontend development, which focuses on user interfaces and experiences using technologies like HTML, CSS, JavaScript, and frameworks such as React, Angular, and Vue.js; backend development, which handles server-side logic and databases using languages like Python, Java, Node.js, and PHP with frameworks such as Django, Spring Boot, and Express.js; full-stack development, which combines both frontend and backend skills; and responsive design, ensuring applications work seamlessly across devices. App development, on the other hand, includes native development for platforms like iOS and Android using platform-specific tools, cross-platform development with frameworks like React Native and Flutter for code reusability, hybrid development that blends web and native approaches, and Progressive Web Apps (PWAs) that deliver app-like experiences through browsers. As these fields evolve rapidly, continuous learning, adaptability, and experimentation are crucial for developers to build innovative, user-centric, and impactful digital solutions."
            desstyle="text-chart-2 font-bold py-2"
            content="Access Method: Users access web applications through a standard web browser (like Chrome, Firefox, or Safari) and an internet connection; no installation on the local device is required."
          >
            <Card
              img="assets/Developing.jpg"
              heading="Web & App Development"
              paragraph="We excel in app and web development, crafting seamless digital experiences that captivate users. Leveraging cutting-edge technologies, we create intuitive mobile apps and dynamic websites tailored to your needs."
              bgcolor="bg-primarys text-white"
            />
          </BlogDetails>

          {/* //second card  tech in agriculture*/}

          <BlogDetails
            title="Tech In Agriculture"
            titlestyle="text-primarys font-bold"
            description="In recent years, agriculture has been transformed by technology, improving efficiency, sustainability, and productivity through innovations such as precision farming, smart sensors, and data analytics. Precision agriculture uses GPS and GIS technologies to map fields, monitor crop health, and optimize planting, irrigation, and fertilization, while remote sensing through satellites and drones enables early detection of crop stress, pests, and soil issues. Variable Rate Technology (VRT) further enhances efficiency by adjusting inputs like seeds and fertilizers according to localized field conditions, reducing waste and environmental impact. Smart farming leverages IoT sensors to collect real-time data on soil moisture, temperature, and crop growth, enabling better risk management and resource optimization. Big data analytics and AI-driven machine learning models analyze large datasets to predict yields, detect diseases, optimize harvest schedules, and support informed decision-making. As global food demand rises and environmental challenges increase, adopting these technologies is essential for building resilient and sustainable agricultural systems, empowering farmers to overcome challenges and shape the future of food production."
            desstyle="text-chart-2 font-bold py-2"
            content="Precision Agriculture: Uses GPS, sensors, and drones to apply water, nutrients, and pesticides only where needed, reducing waste."
          >
            <Card
              img="assets/TechinAg.jpg"
              heading="Tech In Agriculture"
              paragraph="Technology revolutionizes agriculture, boosting productivity and sustainability. From precision tools to AI analytics, innovations empower data-driven decisions, optimizing farming for a promising future."
              bgcolor={"bg-primarys text-white"}
            />
          </BlogDetails>

          {/* //third card ai and iot*/}

          <BlogDetails
            title="AI and IOT Devices"
            titlestyle="text-primarys font-bold"
            description="In the rapidly evolving technological landscape, Artificial Intelligence (AI) and the Internet of Things (IoT) have emerged as powerful drivers of innovation, and their convergence is transforming industries and everyday life. AI enables systems to learn, reason, and make predictions, while IoT connects a vast network of sensor-equipped devices that continuously collect and exchange data. When combined, AI-powered IoT devices can analyze real-time data to generate deeper insights, enable predictive maintenance by anticipating equipment failures, and support autonomous decision-making in areas such as smart transportation, industrial automation, and healthcare. Although this convergence introduces challenges related to data privacy, security, interoperability, and ethics, it also creates immense opportunities for smarter cities, efficient operations, and enhanced user experiences. By responsibly harnessing the synergy between AI and IoT, businesses and consumers can unlock innovative solutions that improve efficiency, sustainability, and quality of life, shaping a more intelligent and interconnected future."
            desstyle="text-chart-2 font-bold py-2"
            content="Function: Gathers raw data from the physical world (e.g., temperature, location, movement, heart rate)."
          >
            <Card
              img="assets/Iot.jpg"
              heading="AI & IOT Devices"
              paragraph="AI and IoT revolutionize agriculture, optimizing productivity and resource use. Sensors collect data on soil and crops, analyzed by AI for informed decisions. This innovation fosters sustainability and resilience in farming."
              bgcolor={"bg-primarys text-white"}
            />
          </BlogDetails>
        </div>
      </div>
    </div>
  );
}

export default Blog;
