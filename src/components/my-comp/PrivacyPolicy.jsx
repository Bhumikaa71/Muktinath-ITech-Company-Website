import Heading from "../../components/my-comp/Heading";
import React from "react";

function PrivacyPolicy() {
  return (
    <div>
      <div className="flex justify-center px-4 py-28">
        <div className="bg-white rounded-xl shadow-md w-fit space-y-6 px-6 py-8 text-sm lg:text-lg">
          <Heading
            header={"Privacy Policy"}
            subheading={"Effectiveness"}
            paragraph={
              "This Privacy Policy describes how Muktinath Itech Limited collects, uses, and protects your personal information when you use our applications, websites, and services."
            }
            substyle={"font-extrabold"}
          />

          <Heading
            subheading={"1. Introduction"}
            paragraph={
              "Muktinath Itech Limited (“we,” “our,” or “us”) is committed to protecting your privacy and ensuring the security of your personal information. By using our services, you consent to the practices described in this Privacy Policy."
            }
            substyle={"font-extrabold"}
          />

          <Heading
            subheading={"2. Information We Collect"}
            paragraph={
              "We may collect personal information such as your name, email address, phone number, and other details you voluntarily provide. We also collect usage data including device information, logs, and analytics to improve our services."
            }
            substyle={"font-extrabold"}
          />

          <Heading
            subheading={"3. Location Information"}
            paragraph={
              "With your permission, we may collect and process location information using technologies such as GPS, Wi-Fi, or network connectivity to enhance service functionality."
            }
            substyle={"font-extrabold"}
          />

          <Heading
            subheading={"4. How We Use Your Information"}
            paragraph={
              "Your information is used to provide, maintain, and improve our services, communicate important updates, analyze usage trends, and develop new features."
            }
            substyle={"font-extrabold"}
          />

          <Heading
            subheading={"5. Disclosure of Information"}
            paragraph={
              "We may share information with trusted third-party service providers for hosting, analytics, or support services, or when required by law or legal process."
            }
            substyle={"font-extrabold"}
          />

          <Heading
            subheading={"6. Your Choices"}
            paragraph={
              "You may opt out of promotional communications at any time and manage permissions such as location access through your device or browser settings."
            }
            substyle={"font-extrabold"}
          />

          <Heading
            subheading={"7. Data Security"}
            paragraph={
              "We implement reasonable security measures to protect your data; however, no method of transmission or storage is completely secure, and absolute security cannot be guaranteed."
            }
            substyle={"font-extrabold"}
          />

          <Heading
            subheading={"8. Changes to This Privacy Policy"}
            paragraph={
              "We may update this Privacy Policy from time to time. Continued use of our services after changes are posted constitutes acceptance of the updated policy."
            }
            substyle={"font-extrabold"}
          />
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
