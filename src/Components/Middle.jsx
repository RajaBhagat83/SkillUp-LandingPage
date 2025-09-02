import React from "react";
import DashBoard from "../assets/DashBoard.png";
import Button from "../portion/Button";
import Login from "../assets/Login.png";
import Connection from "../assets/Connection.png";
import Future from "../assets/Future.png";
import World from "../assets/World.png";
import { motion } from "framer-motion";

function Middle() {
  return (
    <div className="h-[3350px] w-full mb-8 bg-[#fbfafb]">
      <div className="flex justify-between mt-3 ">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "tween",
            duration: 0.5,
            ease: "easeIn",
          }}
          viewport={{ once: true, amount: 0.6 }}
          className="text-xl md:text-4xl font-inter m-12 md:m-32 italic "
        >
          <h1 className="text-yellow-500 mb-2">Want to Grow Faster ?</h1>
          <h1>Login and see</h1>
          <h1 className="ml-12 md:ml-44 mt-2"> the Difference</h1>
          <Button className="ml-12 mt-4 md:mt-0 md:ml-[410px]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "tween",
            duration: 0.5,
            ease: "easeIn",
          }}
          viewport={{ once: true, amount: 0.6 }}
          className=" mr-3 md:mr-24 mt-12 md:mt-24 "
        >
          <img src={Login} height={1200} width={500} className="shadow-xl" />
        </motion.div>
      </div>
      <div>
        <div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 50 }}
            transition={{
              type: "spring",
              damping: 10,
              stiffness: 21,
              duration: 0.5,
            }}
             viewport={{ once: true, amount: 0.6 }}
            className="font-inter text-xl md:text-5xl items-center mt-12  md:mt-0 md:ml-80 md:mb-24"
          >
            <h1>Multiply Your Output With the Power of Collaboration </h1>
          </motion.div>
        </div>
        <div className="text-2xl ml-5 italic font-inter">
          <div className="md:flex justify-between">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                ease: "easeIn",
              }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <ul className="list-disc ml-7 md:ml-44 marker:text-blue-600 w-[480px] md:w-[600px] text-lg md:text-3xl mt-5 md:mt-0">
                <li className="mb-4">
                  Enable users to discover opportunities, build networks, and
                  boost productivity directly on your website with a seamless
                  experience
                </li>
                <li className="mb-4">
                  Take control of your professional growth while keeping all
                  your data secure and in your hands.
                </li>
                <li className="mb-4">
                  Customize your workflows, track progress, and unlock insights
                  that help you grow smarter and faster.
                </li>
                <li className="mb-4">
                  Engage with the right people, exchange skills, and achieve
                  more together than ever before.
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                ease: "easeIn",
              }}
              viewport={{ once: true, amount: 0.6 }}
              className=" mr-16 md:mr-64 mt-16 md:mt-4 ml-16 md:ml-0"
            >
              <img
                src={DashBoard}
                height={1200}
                width={500}
                className="shadow-xl"
              />
            </motion.div>
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 50 }}
              transition={{
                type: "spring",
                damping: 10,
                stiffness: 21,
                duration: 0.5,
              }}
               viewport={{ once: true, amount: 0.6 }}
              className="font-inter text-xl md:text-5xl items-center ml-6 md:ml-[550px] mt-24"
            >
              <h1>The fastest Way to Grow your Connection </h1>
            </motion.div>
          </div>
          <div className="md:flex justify-between">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                ease: "easeIn",
              }}
               viewport={{ once: true, amount: 0.6 }}
              className=" ml-16 mr-16 mt-16 md:ml-64 md:mt-32"
            >
              <img
                src={Connection}
                style={{ height: "400px", width: "500px" }}
                className="shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                ease: "easeIn",
              }}
               viewport={{ once: true, amount: 0.6 }}
            >
              <ul className="list-disc md:mr-44 marker:text-blue-600 mt-24 md:mt-32  w-[480px] md:w-[600px] pl-7 md:pl-0 text-lg md:text-3xl">
                <li className="mb-4">
                  Find like-minded people, mentors, and peers in just a few
                  clicks.
                </li>
                <li className="mb-4">
                  Use intelligent filters to connect with the right people who
                  align with your goals.
                </li>
                <li className="mb-4">
                  Keep track of all your connections in one place while staying
                  in full control of your data.
                </li>
                <li className="mb-4">
                  Easily start conversations, share ideas, and build projects
                  together.
                </li>
                <li className="mb-4">
                  Leverage insights and tools designed to 2x your productivity
                  through meaningful relationships.
                </li>
              </ul>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 50 }}
            transition={{
              type: "spring",
              damping: 10,
              stiffness: 21,
              duration: 0.5,
            }}
             viewport={{ once: true, amount: 0.6 }}
            className="font-inter text-xl md:text-5xl md:ml-[300px] mt-24"
          >
            <h1>Seamlessly expand your reach with continuous updates</h1>
            <h1 className="ml-40 md:ml-[350px] mt-2 md:mt-6">that drive efficiency. </h1>
          </motion.div>
        </div>
        <div className="md:flex justify-between">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              ease: "easeIn",
            }}
             viewport={{ once: true, amount: 0.6 }}
            className="ml-20 mr-16 mt-16 md:ml-72 md:mt-24"
          >
            <img src={Future} height={1300} width={600} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              ease: "easeIn",
            }}
             viewport={{ once: true, amount: 0.6 }}
            className="text-lg md:text-2xl italic mt-16 md:mt-56 md:mr-44 ml-16 md:ml-0"
          >
            <h1 className="font-semibold mb-4 md:mb-7">
              Seamlessly expand your reach{" "}
            </h1>
            <h1>Unlock growth with continuous updates designed to</h1>
            <h1>maximize efficiency.</h1>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 50 }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 21,
            duration: 0.5,
          }}
           viewport={{ once: true, amount: 0.6 }}
          className="font-inter text-xl md:text-6xl ml-7 md:ml-[400px] mt-12 md:mt-24 font-bold "
        >
          <h1>Scale faster with dedicated support</h1>
        </motion.div>
        <div className="md:flex justify-between">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              ease: "easeIn",
            }}
             viewport={{ once: true, amount: 0.6 }}
            className="ml-24 md:ml-72 md:mt-24 mr-16 mt-12"
          >
            <img src={World} height={1000} width={450} className="shadow-xl" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              ease: "easeIn",
            }}
             viewport={{ once: true, amount: 0.6 }}
            className=" text-lg md:text-2xl italic  md:mr-44 "
          >
            <ul className="list-disc marker:text-blue-600  mt-12 md:mt-44 w-[480px] md:w-[600px] ml-12 md:ml-0">
              <li className="mb-4">
                Share feedback to shape updates that make your journey smoother.
              </li>
              <li className="mb-4">
                Invite others to share their insights and grow together as a
                community.
              </li>
              <li className="mb-4">
                Connect, share, and gain access to the best crowd to help you
                succeed.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Middle;
