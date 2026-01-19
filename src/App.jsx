import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

//pages
import Home from "./pages/HomePage/Home";
import About from "./pages/AboutPage/About";
import Services from "./pages/ServicePage/Services";
import Portfolio from "./pages/PortfolioPage/Portfolio";
import Blogs from "./pages/BlogPage/Blogs";
import OutletLayout from "./components/my-comp/layouts/OutletLayout";
import { Contact } from "lucide-react";
import Openings from "./pages/CareerPage/Openings";
import ContactUs from "./pages/ContactUsPage/ContactUs";
import Working from "./pages/CareerPage/Working";
import Students from "./pages/CareerPage/Students";
import ScrollToTop from "./components/my-comp/ScrollToTop";
import PrivacyPolicy from "./components/my-comp/PrivacyPolicy";
import Terms from "./components/my-comp/Terms";


function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* //pages with nav and footer */}
          <Route path="/" element={<Home />} />
          <Route element={<OutletLayout />}>
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          </Route>
          {/* only nav bar */}
          <Route path="/openings" element={<Openings />} />
          <Route path="/working" element={<Working />} />
          <Route path="/students" element={<Students />} />
          <Route path="/contacts" element={<Contact />} />  
        </Routes>
      </Router>
    </>
  );
}

export default App;
