import { useRef ,useNavigate} from 'react'
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import Icon from '../../ui/Icon/Icon'
const Portfolio = () => {
    const projects=[
        {id:1,title:'eSchool',image:'eschool.png',company:'HNNDES',link:'',
          desc:'A training project that represents a game where you select the same card number until you select all card and it record your best round each time you play'},
        {id:2,title:'TourBook',image:'tourbook.png',company:'me',link:'',
          desc:'a website that offers a new way for make a specific tour, publish it, register on it and more. It serves three main parties: the organizer who make tours, the presenter who present offers, the client who register in tour'},
        {id:3,title:'Sorting of University Admission Eligibility',image:'automate.png',company:'me',link:'',
          desc:'a website to automate the registration process for University Admission'},
        {id:4,title:'Aora',image:'aora.png',company:'me',link:'',
          desc:'A training project to use the React Native'},  
        {id:5,title:'Car Services',image:'car-services.png',company:'DigitalGlobe',link:'',
          desc:'a responsive Car Service system dashboard'},
        {id:6,title:'Wakalat Archive',image:'wakalat-archive.png',company:'DigitalGlobe',link:'',
          desc:' application for Archiving Agency records'},
        {id:7,title:'Malakat',image:'job-position.png',company:'DigitalGlobe',link:'',
          desc:"application for Job Position and Employee's Modification management"}, 
        {id:8,title:'Teneze Game',image:'teneze-game.png',company:'me',link:'',
          desc:'A training project that represents a game where you select the same card number until you select all card and it record your best round each time you play'},
        {id:9,title:'Meme Creator',image:'meme-creator.png',company:'me',link:'',
          desc:'A training project to make responsive React application allow you to create meme with the description you want.'}]
  
    const ref=useRef()

    //track progressbar
    const {scrollYProgress}=useScroll({
      target:ref,
      offset:["end end","start start"]})

    //define animation for progressbar
    const scaleX=useSpring(scrollYProgress,{
      stiffness:100,
      damping:30
    })

    const Single = ({project})=>{
      const ref=useRef()
      const navigate=useNavigate()
      const imageSrc = `./src/assets/images/${project.image}`;
      //track text container
      const {scrollYProgress}=useScroll({
        target:ref,
      })

      //define animation for text
      const y= useTransform(scrollYProgress,[0,1],[-300,300]);

      const locked= project.company!='me'

      const handleProjectClick=(link)=>{
        navigate(link)
      }

      return(
        <section >
          <div className="container">
            <div className="wrapper">
              <div className="imageContainer" ref={ref}>
            <img src={imageSrc}/>
            </div>
            <motion.div className="textContainer" style={{y}}>
              <h2 >{project.title}</h2>
              <p>{project.desc}</p>
              <button disabled={locked} className={locked ? 'disabled' : ''} onClick={()=>handleProjectClick(project.link)}>
                {locked?<>
                <Icon name="Lock" w="100%" h="100%"/>
                Private for {project.company}
                </>
                :'Project URL'}
                </button>
            </motion.div>
            </div>
          </div>
        </section>
      )
    }

    return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{scaleX}} className="progressBar">

        </motion.div>
      </div>
{projects.map((project)=>
<Single project={project} key={project.id}/>
)}
    </div>
  )
}

export default Portfolio