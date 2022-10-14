import s from './Reason.module.css';
import Menu from '../../images/header/menu.png';
import { Link } from 'react-router-dom';
import Home from '../../images/header/home.png';
import Mail from '../../images/header/mail.png';
import Tel from '../../images/header/phone.png';
import Telegram from '../../images/header/telegram.png';
import Resume from '../../cv/cv_roman merkulov.pdf';
import Download from '../../images/header/cv.png';
import Question from '../../images/hero/question.png';
import Mouse from '../../images/hero/mouse.png';
import Html from '../../images/skills/html.png';
import Css from '../../images/skills/css.png';
import Sass from '../../images/skills/sass.png';
import Js from '../../images/skills/js.png';
import ReactJs from '../../images/skills/react.png';
import Redux from '../../images/skills/redux.png';
import Bts from '../../images/skills/bts.png';
import Axios from '../../images/skills/axios.png';
import Material from '../../images/skills/material.png';
import Tailwind from '../../images/skills/tailwind.png';
import Git from '../../images/header/github-header.png';
import Linkedin from '../../images/header/linkedin.png';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { NavBar } from '../Navigation/NavBar';

const elemOpacity = {
  hidden: {
    opacity: 0,
  },
  visible: custom => ({
    opacity: 1,
    transition: { delay: custom * 0.4,duration:0.8, },
  }),
};
const elemY = {
  hidden: {
    y: 100,
    opacity: 0,

  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2,duration:0.8, },
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

export const Reason = () => {
  const [open, SetOpen] = useState(false);
  return (
    <>
      {open && <NavBar  SetOpen={SetOpen} />}
      <header className={s.header}>
        <div className={s.container}>
          <motion.div className={s.headerContainer} initial='hidden'
                      whileInView='visible'
                      viewport={{ amount: 0.2,once: true }}
                      variants={elemOpacity}>
            <nav className={s.navigation}>
              <button className={s.navBtn} type='button' onClick={()=>SetOpen(true)}><img className={s.iconHeader} src={Menu} alt='menu' /></button>
              <Link to='/' className={s.navlink}><img className={s.iconHeader} src={Home} alt='home' /></Link>
            </nav>
            <div className={s.contactWrapper}>
              <a href='mailto:fotoromario@gmail.com'><img src={Mail} alt='email' /></a>
              <a href='tel:+380674825841'><img src={Tel} alt='phone' /></a>
              <a href='https://telegram.me/romario360' target='_blank' rel='noopener noreferrer'><img src={Telegram}
                                                                                                      alt='telegram' /></a>
              <a href='https://www.linkedin.com/in/roman-merkulov-857041241/' target='_blank' rel='noopener noreferrer'><img
                src={Linkedin} alt='github' /></a>
              <a href='https://github.com/RoRomario360' target='_blank' rel='noopener noreferrer'><img src={Git}
                                                                                                       alt='github' /></a>
              <a href={Resume} download><img src={Download} alt='download' /></a>
            </div>
          </motion.div>
        </div>
      </header>
      <main>
        <section>
          <div className={s.container}>
            <motion.div className={s.reasonMain} initial='hidden'
                        whileInView='visible'
                        viewport={{ amount: 0.2,once: true }}
                        variants={elemOpacity}>
              <img className={s.iconQuestion} src={Question} alt='question' />
              <h1 className={s.heading1}>Why me</h1>
              <img className={s.iconMouse} src={Mouse} alt='icon' />
            </motion.div>
            <div className={s.reasonStat}>
              <motion.div className={s.motivated} initial='hidden'
                          whileInView='visible'
                          viewport={{ amount: 0.2,once: true }}
                          variants={elemY}>More motivated than 96.6%</motion.div>
              <motion.div className={s.motivated} initial='hidden'
                          whileInView='visible'
                          viewport={{ amount: 0.2,once: true }}
                          variants={elemY}>More responsible than 94.4%</motion.div>
              <motion.div className={s.motivated} initial='hidden'
                          whileInView='visible'
                          viewport={{ amount: 0.2,once: true }}
                          variants={elemY}>Love front-end more than 99.4%</motion.div>
              <motion.div className={s.motivated} initial='hidden'
                          whileInView='visible'
                          viewport={{ amount: 0.2,once: true }}
                          variants={elemY} >Had a graphic background
              </motion.div>
              <motion.div className={s.hardSkillsWrap} initial='hidden'
                          whileInView='visible'
                          viewport={{ amount: 0.2,once: true }}
                          variants={elemOpacityLong}>
                <h2 className={s.heading1}>My hard skills</h2>
                <div className={s.skillsBox}>
                  <img className={s.skillImg} src={Html} alt='logo' />
                  <img className={s.skillImg} src={Css} alt='logo' />
                  <img className={s.skillImg} src={Sass} alt='logo' />
                  <img className={s.skillImg} src={Js} alt='logo' />
                  <img className={s.skillImg} src={ReactJs} alt='logo' />
                  <img className={s.skillImg} src={Redux} alt='logo' />
                  <img className={s.skillImg} src={Axios} alt='logo' />
                  <img className={s.skillImg} src={Material} alt='logo' />
                  <img className={s.skillImg} src={Tailwind} alt='logo' />
                  <img className={s.skillImg} src={Bts} alt='logo' />
                </div>
                <Link to='/portfolio' className={s.navContent}>PORTFOLIO</Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
