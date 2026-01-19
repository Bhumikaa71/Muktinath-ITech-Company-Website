import React from "react";
import { FaInstagram } from "react-icons/fa";
import { LiaFacebook } from "react-icons/lia";
import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";
import CustomerDialog from "./CustomerDialog";

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-6 text-xs sm:text-sm lg:text-lg">
        {/* //Logo image*/}
        <div className="mb-6">
          <img
            src="assets/itech-logo.png"
            alt="Muktinath Itech Logo"
            className="h-10 lg:h-14 w-auto"
          />
        </div>

        <div className="grid grid-cols-1 gap-6  lg:grid-cols-3">
          {/* //Contact Section */}
          <div className="space-y-1 text-xs lg:text-lg">
            <h2 className="font-bold mb-2">Contact Us</h2>
            <p>Basundhara, Kathmandu</p>
            <p>+977-01-4950097</p>
            <p>info@muktinathitech.com.np</p>
          </div>

          {/* //Quick Links section */}
          <div className="space-y-1 text-xs lg:text-lg">
            <h2 className="font-bold mb-2">Quick Links</h2>
            <Link to="/" className="block hover:text-Five">
              Home
            </Link>
            <Link to="/about" className="block hover:text-Five">
              About
            </Link>
            <Link to="/services" className="block hover:text-Five">
              Services
            </Link>
            <Link to="/portfolio" className="block hover:text-Five">
              Portfolio
            </Link>
          </div>

          {/* //Support & Legal */}
          <div className="space-y-1 text-xs lg:text-lg">
            <h2 className="font-bold mb-2">Support & Legal</h2>

            {/* //Customer dialog box*/}
            <CustomerDialog>
              <p className="hover:cursor-pointer hover:text-Five">
                Customer Support
              </p>
            </CustomerDialog>

            {/* Terms and services box */}
            <Link to="/terms">
              <p className="hover:cursor-pointer hover:text-Five">
                Terms of Service
              </p>
            </Link>

            {/* //Privacy Policy  box */}
            <Link to="/privacypolicy">
              <p className="hover:cursor-pointer hover:text-Five">
                Privacy Policy
              </p>
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700 my-6"></div>

        {/*// Bottom Footer */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-y-4">
          <p className="">
            ©2026 Muktinath Itech Limited. All rights reserved.
          </p>

          {/*// Social Icons */}
          <div className="flex space-x-5 text-2xl">
            <a
              href="https://www.instagram.com/muktinathkrishicompany/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="hover:text-primarys transition" />
            </a>

            <a
              href="https://www.facebook.com/muktinathkrishiCo.Ltd/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <LiaFacebook className="hover:text-primarys transition" />
            </a>

            <a
              href="https://www.linkedin.com/company/muktinath-krishi-company-ltd"
              target="_blank"
              aria-label="LinkedIn"
            >
              <CiLinkedin className="hover:text-blue-400 transition" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
