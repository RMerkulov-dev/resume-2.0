import s from './About.module.css';
import Menu from '../../images/header/menu.png';
import { Link } from 'react-router-dom';
import Home from '../../images/header/home.png';
import Mail from '../../images/header/mail.png';
import Tel from '../../images/header/phone.png';
import Telegram from '../../images/header/telegram.png';
import Git from '../../images/header/github-header.png';
import Resume from '../../cv/cv_roman merkulov.pdf';
import Download from '../../images/header/cv.png';
import Card from '../../images/hero/about.png'
import Mouse from '../../images/hero/mouse.png';
import Education from '../../images/hero/education.png'
import Ship from '../../images/hero/ship.png'
import Photo from '../../images/hero/360-image.png'
import Goit from '../../images/hero/goit.png'
import Linkedin from '../../images/header/linkedin.png';
import { motion } from 'framer-motion';

const elemRight = {
  hidden: {
    x: 100,
    opacity: 0,

  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2,duration:0.8, },
  }),
};

const elemLeft = {
  hidden: {
    x: -100,
    opacity: 0,

  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2,duration:0.8 , },
  }),
};

const elemOpacityShort = {
  hidden: {
    opacity: 0,
  },
  visible: custom => ({

    opacity: 1,
    transition: { delay: custom * 0.4,duration:1 , },
  }),
};


export const About=()=>{

  return (
    <>
      <header className={s.header}>
        <div className={s.container}>
          <motion.div className={s.headerContainer} initial='hidden'
                      whileInView='visible'
                      viewport={{ amount: 0.2,once: true }}
                      variants={elemOpacityShort}>
            <nav className={s.navigation}>
              <button className={s.navBtn} type='button'><img className={s.iconHeader} src={Menu} alt='menu' /></button>
              <Link to='/' className={s.navlink}><img className={s.iconHeader} src={Home} alt='home' /></Link>
            </nav>
            <div className={s.contactWrapper}>
              <a href='mailto:fotoromario@gmail.com'><img src={Mail} alt='email' /></a>
              <a href='tel:+380674825841'><img src={Tel} alt='phone' /></a>
              <a href='https://telegram.me/romario360' target='_blank'  rel="noopener noreferrer"><img src={Telegram} alt='telegram' /></a>
              <a href='https://www.linkedin.com/in/roman-merkulov-857041241/' target="_blank"  rel="noopener noreferrer"><img src={Linkedin} alt='github' /></a>
              <a href='https://github.com/RoRomario360' target='_blank'  rel="noopener noreferrer"><img src={Git} alt='github' /></a>
              <a href={Resume} download><img src={Download} alt='download' /></a>
            </div>
          </motion.div>
        </div>
      </header>
      <main>
        <section>
        <div className={s.container}>
<motion.div className={s.aboutWrapper} initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.2,once: true }}
            variants={elemOpacityShort}>
  <img className={s.portfolioImg} src={Card} alt='portfolio' />
  <h1 className={s.heading1}>Let's look at my story</h1>
  <img className={s.iconMouse} src={Mouse} alt='icon' />
</motion.div>

          <motion.div className={s.aboutContent} initial='hidden'
                      whileInView='visible'
                      viewport={{ amount: 0.2,once: true }}
                      variants={elemLeft}>
            <img className={s.aboutImg} src={Education} alt='portfolio' />
            <p className={s.aboutText}>In 2003  began studying at Odessa Polytechnical University and graduated in 2008. Received a diploma from a specialist</p>
          </motion.div>

          <motion.div className={s.aboutContent} initial='hidden'
                      whileInView='visible'
                      viewport={{ amount: 0.2,once: true }}
                      variants={elemLeft}>
            <img className={s.aboutImg} src={Ship} alt='portfolio' />
            <p className={s.aboutText}>From 2013 to 2021, worked as a senior coordinator in maritime transport. Managed people, improved processes, and solved complex problems</p>
          </motion.div>

          <motion.div className={s.aboutContent} initial='hidden'
                      whileInView='visible'
                      viewport={{ amount: 0.2,once: true }}
                      variants={elemRight}>
            <img className={s.aboutImg} src={Photo} alt='portfolio' />
            <p className={s.aboutText}>From 2021 to 2013, worked as a freelance photographer and creator of 360 Virtual tours. Mastered and studied one of the most complex editing programs. I also took photos and edited videos. Taught people online.</p>
          </motion.div>

          <motion.div className={s.aboutContent} initial='hidden'
                      whileInView='visible'
                      viewport={{ amount: 0.2,once: true }}
                      variants={elemLeft}>
            <img className={s.aboutImg} src={Goit} alt='portfolio' />
            <p className={s.aboutText}>At 2022, finished Bootcamp online courses at Go It school </p>
          </motion.div>
          <Link to='/experience' className={s.navContent}>COMMERCIAL EXPERIENCE</Link>
          </div>

        </section>
      </main>
    </>
  )
}
