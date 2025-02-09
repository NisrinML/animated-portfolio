import React from 'react'
import './navbar.scss'
import Icon from '../../ui/Icon/Icon'
import {motion} from 'framer-motion'
import Sidebar from '../sidebar/Sidebar'
const Navbar = () => {
  return (
    <div className='navbar'>
        {/* Sidebar  */}
        <Sidebar/>
        <div className="wrapper">
            <motion.span 
            initial={{opacity:0,scale:0.5}}
            animate={{opacity:1,scale:1}}
            transition={{duration:0.5}}
            >
                Nisreen Melhem
            </motion.span>
            <div className="social">  
                <motion.a href='#' className='icon' 
                 whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
                    <Icon name="LinkedIn" w="100%" h="100%"/>
                </motion.a>
                <motion.a href='#' className='icon'
                 whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
                <Icon name="Gitlab" w="100%" h="100%"/>
                </motion.a>
                <motion.a href='#' className='icon'
                 whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
                <Icon name="Github" w="100%" h="100%"/>
                </motion.a>
                <motion.a href='#' className='icon'
                 whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
                <Icon name="Facebook" w="100%" h="100%"/>
                </motion.a> 
                <motion.a href='#' className='icon'
                 whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
                <Icon name="Instagram" w="100%" h="100%"/>
                </motion.a>
              
            </div>
        </div>
    </div>
  )
}

export default Navbar