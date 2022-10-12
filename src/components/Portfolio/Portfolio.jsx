import s from './Portfolio.module.css';
import Menu from '../../images/header/menu.png';
import { Link } from 'react-router-dom';
import Home from '../../images/header/home.png';
import Mail from '../../images/header/mail.png';
import Tel from '../../images/header/phone.png';
import Telegram from '../../images/header/telegram.png';
import Resume from '../../cv/cv_roman merkulov.pdf';
import Download from '../../images/header/cv.png';
import Projects from '../../images/hero/portfolio.png';
import Mouse from '../../images/hero/mouse.png';
import WebLink from '../../images/portfolio/link.png';
import Git from '../../images/header/github-header.png';
import GitHub from '../../images/portfolio/github.png'
import Kapusta from '../../images/portfolio/kapusta.jpg'
import Filmoteka from '../../images/portfolio/filmoteka.jpg'
import Music from '../../images/portfolio/music-app.jpg'
import Hell from '../../images/portfolio/hell.jpg'
import Linkedin from '../../images/header/linkedin.png';
import { motion } from 'framer-motion';

const elemRight = {
  hidden: {
    x: 300,
    opacity: 0,

  },
  visible: custom => ({
    x: 40,
    opacity: 1,
    transition: { delay: custom * 0.2,duration:0.8, },
  }),
};

const elemLeft = {
  hidden: {
    x: -300,
    opacity: 0,

  },
  visible: custom => ({
    x: -40,
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



export const Portfolio = () => {
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
            <motion.div className={s.portfolioMain} initial='hidden'
                        whileInView='visible'
                        viewport={{ amount: 0.2,once: true }}
                        variants={elemOpacityShort}>
              <img className={s.portfolioImg} src={Projects} alt='portfolio' />
              <h1 className={s.heading1}>Let's see my projects</h1>
              <img className={s.iconMouse} src={Mouse} alt='icon' />
            </motion.div>
            <div className={s.portfolioWrapper}>

              <motion.div className={s.projectBox} initial='hidden'
                          whileInView='visible'
                          viewport={{ amount: 0.2,once: true }}
                          variants={elemLeft} current={1}>
                <h3 className={s.projTitle}>KAPUSTA</h3>
                <p>Team project</p>
                <a className={s.projectPoster} href='https://kapusta-project-app.netlify.app/main' target="_blank" rel="noreferrer">
                  <img src={Kapusta} alt='link' />
                </a>
                <ul className={s.linksList}>
                  <li><a href='https://kapusta-project-app.netlify.app/main' target="_blank"  rel="noopener noreferrer"><img src={WebLink} alt='link' /></a></li>
                  <li><a href='https://github.com/Mr-Nihility/kapusta-project' target="_blank"  rel="noopener noreferrer"><img src={GitHub} alt='link' /></a></li>
                </ul>
              </motion.div>

              <motion.div className={s.projectBox} initial='hidden'
                   whileInView='visible'
                   viewport={{ amount: 0.2,once: true }}
                   variants={elemRight} current={2}>
                <h3 className={s.projTitle}>MUSIC APP</h3>
                <p>Own project</p>
                <a className={s.projectPoster} href='https://spotify-clone-music-app.netlify.app/' target="_blank"  rel="noopener noreferrer">
                  <img src={Music} alt='link' />
                </a>
                <ul className={s.linksList}>
                  <li><a href='https://spotify-clone-music-app.netlify.app/' target="_blank"  rel="noopener noreferrer"><img src={WebLink} alt='link' /></a></li>
                  <li><a href='https://github.com/RoRomario360/my-music-app' target="_blank"  rel="noopener noreferrer"><img src={GitHub} alt='link' /></a></li>
                </ul>
              </motion.div>

              <motion.div className={s.projectBox} initial='hidden'
                          whileInView='visible'
                          viewport={{ amount: 0.2,once: true }}
                          variants={elemLeft} current={3}>
                <h3 className={s.projTitle}>FILMOTEKA</h3>
                <p>Team project</p>
                <a className={s.projectPoster} href='https://redokleeroy.github.io/let_JS_project/' target="_blank" rel="noreferrer">
                  <img src={Filmoteka} alt='link' />
                </a>
                <ul className={s.linksList}>
                  <li><a href='https://redokleeroy.github.io/let_JS_project/' target="_blank" rel="noreferrer"><img src={WebLink} alt='link' /></a></li>
                  <li><a href='https://github.com/RedokLeeroy/let_JS_project' target="_blank" rel="noreferrer"><img src={GitHub} alt='link' /></a></li>
                </ul>
              </motion.div>

              <motion.div className={s.projectBox} initial='hidden'
                          whileInView='visible'
                          viewport={{ amount: 0.2,once: true }}
                          variants={elemRight} current={4}>
                <h3 className={s.projTitle}>HELL ENGLISH</h3>
                <p>Team project</p>
                <a className={s.projectPoster} href='https://yehorboichenko.github.io/crazy-bears/' target="_blank" rel="noreferrer">
                  <img src={Hell} alt='link' />
                </a>
                <ul className={s.linksList}>
                  <li><a href='https://yehorboichenko.github.io/crazy-bears/' target="_blank" rel="noreferrer"><img src={WebLink} alt='link' /></a></li>
                  <li><a href='https://github.com/YehorBoichenko/crazy-bears' target="_blank" rel="noreferrer"><img src={GitHub} alt='link' /></a></li>
                </ul>
              </motion.div>
            </div>
            <Link to='/about' className={s.navContent}>ABOUT ME</Link>
          </div>
        </section>
      </main>
    </>
  );
};
