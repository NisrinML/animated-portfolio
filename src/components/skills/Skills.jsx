import { useRef } from 'react'
import './skills.scss'
import {motion} from 'framer-motion'
const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            staggerChildren: 0.5
        }
    }
}

const Skills = () => {
    const ref=useRef()
    const skillsList=['React.js','React Native','Redux Toolkit','Axios',
        'Yup','JavaScript / TypeScript','Bootstrap','HTML','CSS / SASS','Tailwind Css','NativeWind','Styled-Component','Asp.Net',
        'MSSQL','Figma','C / C++','Git (Github, Gitlab)','JIRA','Agile','GeoLocation & Maps'    ]
  return (
    <motion.div className='skills'variants={variants} ref={ref}
    initial="initial" whileInView="animate">
        <motion.div className="textContaiber" variants={variants}>
        <h1>Why Choose Me ?</h1>
        <h2>I'll give you all kind of Full-Stack & UI/UX services that you need</h2>
        </motion.div>
        <motion.div className="skillsContainer" variants={variants}>
            {skillsList.map((skill,index)=>{return(
                <div className="skill" key={index}>
                    {skill}
                </div>
            )})}
        </motion.div>
    </motion.div>
  )
}

export default Skills