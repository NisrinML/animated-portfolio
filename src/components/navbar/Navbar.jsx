import React from 'react'
import './navbar.scss'
import Icon from '../../ui/Icon/Icon'
import {motion} from 'framer-motion'
import Sidebar from '../sidebar/Sidebar'
const Navbar = () => {
  return (
    <div className='navbar'>
        <Sidebar/>
        <div className="wrapper">
            {/* <motion.span 
            initial={{opacity:0,scale:0.5}}
            animate={{opacity:1,scale:1}}
            transition={{duration:0.5}}
            className='name'
            >
                Nisreen Melhem
            </motion.span> */}
            <div className="social">  
                <motion.a href='https://www.linkedin.com/in/nisreen-melhem-a565522b7' className='icon' 
                 whileHover={{scale:1.1}} whileTap={{scale:0.95}}
                 target="_blank" rel="noopener noreferrer">
                    <Icon name="LinkedIn" w="100%" h="100%"/>
                </motion.a>
                <motion.a href='https://gitlab.com/Nsns9' className='icon'
                 whileHover={{scale:1.1}} whileTap={{scale:0.95}}
                 target="_blank" rel="noopener noreferrer">
                <Icon name="Gitlab" w="100%" h="100%"/>
                </motion.a>
                <motion.a href='https://github.com/NisrinML' className='icon'
                 whileHover={{scale:1.1}} whileTap={{scale:0.95}}
                 target="_blank" rel="noopener noreferrer">
                <Icon name="Github" w="100%" h="100%"/>
                </motion.a>
                <motion.a href='https://www.facebook.com/share/18KyrpQ9oG/' className='icon'
                 whileHover={{scale:1.1}} whileTap={{scale:0.95}}
                 target="_blank" rel="noopener noreferrer"
                 >
                <Icon name="Facebook" w="100%" h="100%"/>
                </motion.a> 
                <motion.a href='https://www.instagram.com/nisrin.melhem?igsh=cGkzaGp2bTUzNjBy' className='icon'
                 whileHover={{scale:1.1}} whileTap={{scale:0.95}}
                 target="_blank" rel="noopener noreferrer"
                 >
                <Icon name="Instagram" w="100%" h="100%"/>
                </motion.a>
              
            </div>
        </div>
    </div>
  )
}

export default Navbar