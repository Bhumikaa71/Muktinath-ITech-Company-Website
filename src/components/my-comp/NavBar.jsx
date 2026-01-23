import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoReorderThreeOutline, IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { FaInstagram } from "react-icons/fa";
import { LiaFacebook } from "react-icons/lia";
import { CiLinkedin } from "react-icons/ci";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [careerOpen, setCareerOpen] = useState(false);
  const [mobileCareerOpen, setMobileCareerOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-300 shadow-md z-50">
      {/* //desktop navabar */}
      <div className="max-w-7xl mx-auto hidden lg:block">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <img
            src="assets/itech-logo.png"
            alt="itech-logo"
            className="h-14 w-auto"
          />

          {/* Nav Links */}
          <div className="flex space-x-12 text-base font-semibold text-gray-800">
            <Button asChild variant="ghost" className="hover:text-Five">
              <Link to="/">Home</Link>
            </Button>

            <Button asChild variant="ghost" className="hover:text-Five">
              <Link to="/about">About</Link>
            </Button>

            <Button asChild variant="ghost" className="hover:text-Five">
              <Link to="/services">Services</Link>
            </Button>

            {/* //dropdown  careear buttons */}

            <div className="relative">
              <Button
                variant="ghost"
                className="hover:text-Five flex items-center gap-1"
                onClick={() => setCareerOpen(!careerOpen)}
              >
                Career <IoIosArrowDown className="" />
              </Button>

              {careerOpen && (
                <div className="absolute top-full left-0 my-2 w-56 bg-white border rounded-md shadow-lg z-50">
                  <Link
                    to="/openings"
                    className="block px-4 py-2 hover:text-Five hover:bg-border"
                    onClick={() => setCareerOpen(false)}
                  >
                    Openings
                  </Link>

                  <Link
                    to="/working"
                    className="block px-4 py-2 hover:text-Five hover:bg-border"
                    onClick={() => setCareerOpen(false)}
                  >
                    Working at Muktinath
                  </Link>

                  <Link
                    to="/students"
                    className="block px-4 py-2 hover:text-Five hover:bg-border"
                    onClick={() => setCareerOpen(false)}
                  >
                    For Students
                  </Link>
                </div>
              )}
            </div>

            <Button asChild variant="ghost" className="hover:text-Five">
              <Link to="/portfolio">Portfolio</Link>
            </Button>

            <Button asChild variant="ghost" className="hover:text-Five">
              <Link to="/contactus">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* // MObile navbar*/}
      <div className="lg:hidden px-4 py-3">
        <div className="flex items-center justify-between">
          <img
            src="assets/itech-logo.png"
            alt="itech-logo"
            className="h-8 w-auto"
          />

          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <IoClose className="text-2xl" />
            ) : (
              <IoReorderThreeOutline className="text-2xl" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="bg-primarys text-white p-4 flex flex-col space-y-4 text-xs">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link to="/services" onClick={() => setIsOpen(false)}>
              Services
            </Link>

            {/* Mobile career Dropdown  */}
            <div>
              <button
                onClick={() => setMobileCareerOpen(!mobileCareerOpen)}
                className="flex items-center justify-between w-full"
              >
                Career <IoIosArrowDown />
              </button>

              {mobileCareerOpen && (
                <div className="ml-4 mt-2 flex flex-col space-y-2 text-xs">
                  <Link to="/openings" onClick={() => setIsOpen(false)}>
                    Openings
                  </Link>
                  <Link to="/working" onClick={() => setIsOpen(false)}>
                    Working at Muktinath
                  </Link>
                  <Link to="/students" onClick={() => setIsOpen(false)}>
                    For Students
                  </Link>
                </div>
              )}
            </div>

            <Link to="/portfolio" onClick={() => setIsOpen(false)}>
              Portfolio
            </Link>

            <Link to="/contactus" onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>

            {/* Social Icons */}
            <div className="flex text-xl space-x-3 py-4">
              <Link
                to="https://www.instagram.com/muktinathkrishicompany/"
                target="_blank"
              >
                <FaInstagram />
              </Link>
              <Link
                to="https://www.facebook.com/muktinathkrishiCo.Ltd/"
                target="_blank"
              >
                <LiaFacebook />
              </Link>
              <Link
                to="https://www.linkedin.com/company/muktinath-krishi-company-ltd"
                target="_blank"
              >
                <CiLinkedin />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
