import './about.scss'
import Me from '../../assets/images/me.jpg'
import Icon from '../../ui/Icon/Icon'
import { motion } from 'framer-motion'
import { useRef } from 'react'
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
            staggerChildren: 0.1
        }
    }
}

const About = () => {
    const ref = useRef()
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/files/Nisreen Melhem CV.pdf';
        link.download = 'NisreenMelhemCV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <motion.div className='about' variants={variants} ref={ref}
            initial="initial" whileInView="animate">
            <motion.div className="imageContainer" variants={variants} >
                <img src={Me} />
            </motion.div>
            <motion.div className="textContainer" variants={variants} >
                <h1>Nisreen Melhem</h1>
                <h2>Full-Stack Developer & UI/UX Designer</h2>
                <p>Software Engineer with 2+ years of experience as a front-end developer, working with React.js, CSS/Sass, Styled Components, Tailwind, JavaScript/TypeScript, JSON, Bootstrap, Redux Toolkit, React Native, and Axios.
                     For back-end development, I have experience with ASP.NET, MVC, and JavaScript.<br/>
                    Interested in building responsive web applications and problem-solving.<br/>
                    Familiar with both independent and collaborative projects.<br/> Participated as a contestant for one year in the Syrian Collegiate Programming Contest (SCPC).
                </p>
                <button onClick={handleDownload}>
                    Look at my CV    <Icon name="Download" w="100%" h="100%" />
                </button>
            </motion.div>
        </motion.div>
    )
}

export default About