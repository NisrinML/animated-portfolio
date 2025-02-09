import React, { useState } from 'react'
import './sidebar.scss'
import Links from './links/Links'
import ToggleButton from './toggleButton/ToggleButton'
import { delay, motion } from 'framer-motion'
    const variants = {
        open:{
            clipPath:"circle(1200px at 60px 60px)",
            transition:{
                type:"spring",
                stifness:20,
                damping: 40,
            }
        },
        closed:{
            clipPath:"circle(30px at 60px 60px)",
            transition:{
                delay:0.2,
                type:"spring",
                stifness:40,
                damping: 20,
            }
        }
    }
    
const Sidebar = () => {
    const [open,setOpen] =useState(false)

  return (
    <motion.div className='sidebar'
    animate={open?"open":"closed"} >
        <motion.div className="bg"
        variants={variants}>
           <Links/>
        </motion.div>
        <ToggleButton setOpen={setOpen} />
    </motion.div>
  )
}

export default Sidebar