import { useRef } from 'react'
import './parallax.scss'
import {motion,useScroll,useTransform} from 'framer-motion'
const Parallax = ({type}) => {
    const ref=useRef()
    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["start start",'end start']
    })

    const yText=useTransform(scrollYProgress,[0,1],['0%','500%'])
    const yBg=useTransform(scrollYProgress,[0,1],['0%','100%'])
  return (
    <div className='parallax' 
    ref={ref}
    style={{background:type=="services"?'linear-gradient(180deg,#EAD7D7,#412234)':'linear-gradient(180deg,#412234,#EAD7D7)'}}>
        <motion.h1 style={{y:yText}}>
            {type=='services'?'What I Do?':'What I Did?'}
        </motion.h1>
        <motion.div className="mountains"></motion.div>
        {/*to change the planet image: backgroundImage:`url(${type=='services'?'/src/assets/images/planets.webp':'/src/assets/images/sun.webp'})` */}
        <motion.div style={{y:yBg,}} className="planets"
        ></motion.div>
        <motion.div style={{x:yBg}} className="stars"></motion.div>
    </div>
  )
}

export default Parallax