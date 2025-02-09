import { useRef } from 'react'
import Icon from '../../ui/Icon/Icon'
import './services.scss'
import { motion, useInView } from 'framer-motion'

const variants = {
  initial: {
    x: -500,
    opacity: 0,
    y: 100,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      staggerChildren: 0.1
    }
  }
}
const Services = () => {
  const servicesList = [{ id: 1, name: 'Web Developing', icon: '/src/assets/images/web.png', explain: 'Your vision, my code: I craft beautiful, responsive websites that make your business stand out online.' },
  { id: 2, name: 'Mobile Apps Developing', icon: '/src/assets/images/mobile.png', explain: 'I design and develop intuitive, high-performance mobile apps that deliver seamless user experiences and bring your ideas to life on iOS and Android platforms using React Native.' },
  { id: 3, name: 'Problem Solving', icon: '/src/assets/images/problem-solve.png', explain: 'Your challenges, my expertise: I develop intelligent, customized solutions that streamline the complicated and propel your success.' },
  { id: 4, name: 'UI/UX Designing', icon: '/src/assets/images/ui-ux.png', explain: 'I craft and refine prototype that enhance user experiences, ensuring your digital products resonate with users and elevate their engagement.' },
  { id: 5, name: 'Teach Programming', icon: '/src/assets/images/teach.png', explain: 'I provide expert programming instruction tailored to your needs, empowering you with the skills and knowledge to excel in various programming languages and technologies' }
  ]
  const ref = useRef()
  const isInView = useInView(ref, { margin: "-100px" })
  return (
    <motion.div className='services'
      variants={variants} initial="initial"
      //animate="animate"
      //whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>These are the services
          <br />
          I offer
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/src/assets/images/people.jpg" />
          <h1>Building&nbsp;
            <b>Robust</b> Solutions
          </h1>
        </div>
        <div className="title">
          <h1>Where&nbsp;
            <b>Logic</b> Meets&nbsp;
            <b>Creativity.</b>
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listConttainer" variants={variants}>
        {servicesList.map((service) => {
          return (
            <motion.div className="box" key={service.id}>
              <h2>{service.name}</h2>
              <b>{service.explain}</b>
              <div className="image" >
                <img src={service.icon} width='100%' height='100%' />
              </div>
            </motion.div>
          )
        })}

      </motion.div>
    </motion.div>
  )
}

export default Services