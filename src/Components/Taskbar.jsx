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
    className=' w-full shadow-sm'>
      <div className='flex justify-between items-center h-28'>
        <div className='text-3xl text-white ml-12 font-serif'>
          <h1>Skill-Up Bridge</h1>
        </div>
        <div className='flex text-xl gap-12 text-[#bbc5b6] font-serif mr-56 cursor-pointer'>
          <h1>Products</h1>
          <h1>Pricing</h1>
          <h1>About</h1>
          <h1>Blog</h1>
        </div>
        <div className='pr-7 text-white text-xl '>
          <button className='border-2 border-white p-3 px-5 rounded-2xl mr-2 active:scale-95'>
            Sign Up
          </button>
           <button className='border-2 border-white p-3 px-5 rounded-2xl active:scale-95'>
            Sign In
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default Taskbar
