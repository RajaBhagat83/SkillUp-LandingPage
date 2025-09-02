import React from "react";
import Footer from "../portion/Footer.jsx";
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Bottom() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        type: "tween",
        duration: 0.5,
        ease: "easeIn",
      }}
       viewport={{ once: true, amount: 0.6 }}
      className="h-[550px] w-full bg-[#7b6b6b]"
    >
      <div className="text-white text-xl flex">
        <Footer
          heading="About us"
          h1={"Our story"}
          h2="Jobs"
          h3="Find events"
          h4="Partner with us"
        />
        <Footer
          heading="Host events"
          h1={"Attractions"}
          h2="Create events"
          h3="Pricing"
          h4="Features"
        />
        <Footer
          heading="Get help"
          h1={"Help center(FAQs)"}
          h2="Contact us"
          h3="Where are my tickets?"
          h4="Contact the event organizer"
        />
      </div>
      <div>
        <h1 className="w-[1300px] h-[1px] bg-white ml-44 "></h1>
      </div>
      <div className="">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity:1, y: 0 }}
          transition={{
            type: "tween",
            delay: 0.7,
            duration: 0.5,
            ease: "easeIn",
          }}
           viewport={{ once: true, amount: 0.6 }}
          className="ml-80 mt-7 flex "
        >
          <h1 className="text-white">
            Terms and conditions | Terms of Use | Privacy Policy | Do Not Sell
            Or Share My Personal Information | Cookie Policy | © Universe 2025
          </h1>
          <div className=" flex  gap-5 ml-12">
            <FaTwitter size={20} />
            <FaFacebookF size={20} />
            <FaInstagram size={20} />
            <FaGoogle size={20} />
            <FaLinkedin size={20} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Bottom;
