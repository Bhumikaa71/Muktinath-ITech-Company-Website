import React from "react";
import Heading from "../../components/my-comp/Heading";

function Terms() {
  return (
    <div>
      <div className="flex justify-center px-4 py-28">
        <div className="bg-white rounded-xl shadow-md w-fit space-y-6 px-6 py-8 text-sm lg:text-lg">
          <Heading
            header={"Terms of Service"}
            subheading={"1. Acceptance of Terms"}
            paragraph={
              "By accessing or using any products, services, or platforms provided by Muktinath Itech Limited, you agree to comply with and be bound by these Terms & Conditions."
            }
            substyle={"font-extrabold"}
          />

          <Heading
            subheading={"2. User Responsibilities"}
            paragraph={
              "Users must provide accurate, complete, and up-to-date information and are responsible for maintaining the confidentiality of their account credentials."
            }
            substyle={"font-extrabold"}
          />

          <Heading
            subheading={"3. Lawful Use"}
            paragraph={
              "All services provided by Muktinath Itech Limited must be used only for lawful purposes and in compliance with applicable laws and regulations."
            }
            substyle={"font-extrabold"}
          />

          <Heading
            subheading={"4. Intellectual Property Rights"}
            paragraph={
              "All content, software, trademarks, and technology are the intellectual property of Muktinath Itech Limited and may not be used without prior written permission."
            }
            substyle={"font-extrabold"}
          />

          <Heading
            subheading={"5. Data Privacy"}
            paragraph={
              "Any data collected through the use of our services is handled in accordance with our Privacy Policy."
            }
            substyle={"font-extrabold"}
          />

          <Heading
            subheading={"6. Service Availability"}
            paragraph={
              "Services are provided on an “as is” and “as available” basis without warranties of any kind."
            }
            substyle={"font-extrabold"}
          />

          <Heading
            subheading={"7. Limitation of Liability"}
            paragraph={
              "Muktinath Itech Limited shall not be liable for any indirect, incidental, or consequential damages arising from the use of its services."
            }
            substyle={"font-extrabold"}
          />

          <Heading
            subheading={"8. Changes to Terms"}
            paragraph={
              "Muktinath Itech Limited reserves the right to modify these Terms & Conditions at any time, and continued use constitutes acceptance of the updated terms."
            }
            substyle={"font-extrabold"}
          />
        </div>
      </div>
    </div>
  );
}

export default Terms;
