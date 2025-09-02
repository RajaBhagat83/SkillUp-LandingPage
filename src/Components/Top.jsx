import React from "react";
import image from "../assets/BGimage.jpg";
import Taskbar from "./Taskbar";
import Video from "./Video";
import { motion } from "framer-motion";

const bgimage = {
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

function Top() {
  return (
    <main style={bgimage} className="rounded-t-xl mt-2 ml-2 mr-2">
      <Taskbar />
      <div className="w-full h-[550px]  ">
        <div className="flex justify-center items-center mt-[100px] ml-16">
          <motion.div
          initial={{opacity:0}}
            animate={{
              opacity:1,
              x: [0, 1100, 1100],
              y: [0, 0, 560],
            }}
            transition={{
              duration: 4,
              ease: "linear",
              delay:13
            }}
            className="flex flex-col items-center absolute top-24 left-28"
          >
          <div className="w-0 h-0 
                border-l-[10px] border-l-transparent 
                border-r-[10px] border-r-transparent 
                border-b-[14px] border-b-white -mb-1"></div>
            <div className="h-56 w-[2px] bg-white"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0, 0, 1] }}
            transition={{
              delay: 0.2,
              duration: 18,
              times: [0, 0.4, 0.8, 1],
              ease: "easeOut",
            }}
            className="text-4xl md:text-9xl sm:text-4xl text-white font-inter italic "
          >
            <h1 className="text-2xl text-[#85915d] pl-[340px]">
              Empowering Connections for Future Success
            </h1>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.1,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
            >
              <h1 className="pl-64 pt-12">Build future</h1>
              <h1>growth with Compatible</h1>
              <h1 className="pl-64"> individuals </h1>
            </motion.div>
            <div className="absolute top-[587px] right-[400px]">
              <motion.button
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.8,
                  type: "spring",
                  damping: 3,
                  stiffness: 100,
                }}
                className="border-2 border-white text-xl p-5 rounded-xl bg-green-800 flex active:scale-95 cursor-pointer"
              >
                <h1 className="w-1 h-1 borer-white border-4 mt-3 mr-2 rounded-full transform -rotate-12"></h1>{" "}
                Sign up.It's free
              </motion.button>
            </div>
          </motion.div>
        </div>
        <Video />
      </div>
    </main>
  );
}

export default Top;
