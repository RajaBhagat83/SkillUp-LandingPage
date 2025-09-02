import React from 'react'
import { motion } from "framer-motion";

function Taskbar() {
  return (
    <motion.div 
    initial={{opacity:0,y:-200}}
    animate={{opacity:1,y:0}}
    transition={{
      delay:0.5,
      type:"spring",
      damping:8,
      stiffness:100
    }}
    className='w-full shadow-sm'>
      <div className='flex justify-start md:justify-between items-center h-28'>
        <div className=' text-lg md:text-3xl text-white p-5 md:ml-12 font-serif'>
          <h1>Skill-Up Bridge</h1>
        </div>
        <div className='flex text-sm md:text-xl  gap-4 md:gap-12 text-[#bbc5b6] font-serif mr-6 md:mr-56 cursor-pointer'>
          <h1>Products</h1>
          <h1>Pricing</h1>
          <h1>About</h1>
          <h1>Blog</h1>
        </div>
        <div className='pr-2 md:pr-7 text-white text-sm md:text-sm  flex md:block gap-4'>
          <button className='border-2 border-white md:p-3 px-5 md:px-5 rounded-2xl  md:mr-2 active:scale-95'>
            Sign Up
          </button>
           <button className='border-2 border-white md:p-3 px-5 md:px-5 rounded-2xl  md:mr-2 active:scale-95'>
            Sign In
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default Taskbar
