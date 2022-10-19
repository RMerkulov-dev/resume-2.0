import s from './Reason.module.css';
import { Link } from 'react-router-dom';
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
import { motion } from 'framer-motion';


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

  return (
    <>
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
