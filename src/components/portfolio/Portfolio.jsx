import React, { useRef } from 'react';
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import Icon from '../../ui/Icon/Icon'
const Portfolio = () => {
  const projects = [
    {
      id: 1, title: 'eSchool', image: 'eschool.png', company: 'HNNDES', link: '',
      desc: 'A responsive dashboard for managing all activities in an educational institution. Designed using React.js, Redux, Styled-Component, Css/Sass, Yup and JavaScript.'
    },
    {
      id: 2, title: 'TourBook', image: 'tourbook.png', company: 'me', link: 'https://github.com/NisrinML/tour-book.git',
      desc: 'A website that offers a new way for make a specific tour, publish it, register on it and more. Designed using React.js, React-leaflet, Redux-Toolkit, Tailwind-Css, Yup, Axios and JavaScript.'
    },
    {
      id: 3, title: 'University Admission', image: 'automate.png', company: 'me', link: 'https://github.com/NisrinML/university-admission.git',
      desc: 'A website to automate the registration process for University Admission. Designed using React.js, Redux-Toolkit, Css, Axios and JavaScript.'
    },
    {
      id: 6, title: 'Car Dashboard', image: 'car-dashboard.png', company: 'me', link: 'https://github.com/NisrinML/car-showroom-dashboard.git',
      desc: 'A dashboard for managing a car showroom activities. Designed using React.js and Css.'
    },
    {
      id: 4, title: 'Teneze Game', image: 'teneze-game.png', company: 'me', link: 'https://github.com/NisrinML/tenzies-game.git',
      desc: 'A game where you select the same card number until you select all card and it record your best round each time you play. Designed using React.js and Css.'
    },
    {
      id: 5, title: 'Meme Creator', image: 'meme-creator.png', company: 'me', link: 'https://github.com/NisrinML/meme-creator.git',
      desc: 'A responsive React application allow you to create meme with the description you want. Designed using React.js and Css.'
    },
    {
      id: 7, title: 'Aora', image: 'aora.png', company: 'me', link: 'https://github.com/NisrinML/aora.git',
      desc: 'A mobile application for sharing and watching videos. Designed using React-Native and Appwrite.'
    },
    {
      id: 8, title: 'Car Services', image: 'car-services.png', company: 'DigitalGlobe', link: '',
      desc: 'A responsive Car Service system dashboard. Designed using Asp.net, MVC, jQuery, JavaScript, Bootstarp, HTML and Css.'
    },
    {
      id: 9, title: 'Wakalat Archive', image: 'wakalat-archive.png', company: 'DigitalGlobe', link: '',
      desc: 'A dashboard for archiving agency records. Designed using Asp.net, MVC, jQuery, JavaScript, Bootstarp, HTML and Css.'
    },
    {
      id: 10, title: 'Malakat', image: 'job-position.png', company: 'DigitalGlobe', link: '',
      desc: "a dashboard for Job Position and Employee's Modification management. Designed using Asp.net, MVC, jQuery, JavaScript, Bootstarp, HTML and Css."
    },
  ]

  const ref = useRef()

  //track progressbar
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  })

  //define animation for progressbar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  })

  const Single = ({ project }) => {
    const ref = useRef()
    const imageSrc = `./src/assets/images/${project.image}`;
    //track text container
    const { scrollYProgress } = useScroll({
      target: ref,
    })

    //define animation for text
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    const locked = project.company != 'me'

    const handleProjectClick = (link) => {
      window.open(link, '_blank');
    }

    return (
      <section >
        <div className="container">
          <div className="wrapper">
            <div className="imageContainer" ref={ref}>
              <img src={imageSrc} />
            </div>
            <motion.div className="textContainer" style={{ y }}>
              <h2 >{project.title}</h2>
              <p>{project.desc}</p>
              <button disabled={locked} className={locked ? 'disabled' : ''} onClick={() => handleProjectClick(project.link)}>
                {locked ? <>
                  <Icon name="Lock" w="100%" h="100%" />
                  Private for {project.company}
                </>
                  : 'Project URL'}
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <div className="portfolio" ref={ref}>
      {/* <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{scaleX}} className="progressBar">

        </motion.div>
      </div> */}
      {projects.map((project) =>
        <Single project={project} key={project.id} />
      )}
    </div>
  )
}

export default Portfolio