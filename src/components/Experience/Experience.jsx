import s from './Experience.module.css';
import Menu from '../../images/header/menu.png';
import { Link } from 'react-router-dom';
import Home from '../../images/header/home.png';
import Mail from '../../images/header/mail.png';
import Tel from '../../images/header/phone.png';
import Telegram from '../../images/header/telegram.png';
import Git from '../../images/header/github-header.png';
import Resume from '../../cv/cv_roman merkulov.pdf';
import Download from '../../images/header/cv.png';
import Expert from '../../images/hero/experience.png'
import Mouse from '../../images/hero/mouse.png';
import Altertech from '../../images/hero/altertech.png'
import Linkedin from '../../images/header/linkedin.png';
import { motion } from 'framer-motion';






const elemOpacityShort = {
  hidden: {
    opacity: 0,
  },
  visible: custom => ({

    opacity: 1,
    transition: { delay: custom * 0.4,duration:1 , },
  }),
};

const elemOpacityLong = {
  hidden: {
    opacity: 0,
  },
  visible: custom => ({

    opacity: 1,
    transition: { delay: custom * 0.4,duration:2 , },
  }),
};

export const Experience=()=>{
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
            <motion.div className={s.experienceWrap} initial='hidden'
                        whileInView='visible'
                        viewport={{ amount: 0.2,once: true }}
                        variants={elemOpacityShort}>
              <img className={s.experienceImg} src={Expert} alt='portfolio' />
              <h1 className={s.heading1}>My commercial experience</h1>
              <img className={s.iconMouse} src={Mouse} alt='icon' />
            </motion.div>
            <motion.div className={s.experienceBox} initial='hidden'
                        whileInView='visible'
                        viewport={{ amount: 0.2,once: true }}
                        variants={elemOpacityLong}>
              <img className={s.aboutImg} src={Altertech} alt='portfolio' />
              <p className={s.aboutText}>From 07.08.2022 <br/>
                Trainee in Altertech</p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}
