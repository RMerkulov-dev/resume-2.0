import s from './Reason.module.css';
import { Link } from 'react-router-dom';
import Question from '../../images/hero/question.png';
import { BsMouse } from 'react-icons/bs';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { DiCss3Full } from 'react-icons/di';
import { DiSass } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
import { SiMaterialui } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { BsFillBootstrapFill } from 'react-icons/bs';
import { SiTypescript } from 'react-icons/si';
import { GrGraphQl } from 'react-icons/gr';
import { SiTailwindcss } from 'react-icons/si';

import { motion } from 'framer-motion';

const elemOpacity = {
  hidden: {
    opacity: 0,
  },
  visible: custom => ({
    opacity: 1,
    transition: { delay: custom * 0.4, duration: 0.8 },
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
    transition: { delay: custom * 0.2, duration: 0.8 },
  }),
};
const elemOpacityLong = {
  hidden: {
    opacity: 0,
  },
  visible: custom => ({
    opacity: 1,
    transition: { delay: custom * 0.4, duration: 2 },
  }),
};

export const Reason = () => {
  return (
    <>
      <main>
        <section>
          <div className={s.container}>
            <motion.div
              className={s.reasonMain}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              variants={elemOpacity}
            >
              <img className={s.iconQuestion} src={Question} alt="question" />
              <h1 className={s.heading1}>Why me</h1>
              <BsMouse className={s.iconMouse} />
            </motion.div>
            <div className={s.reasonStat}>
              <motion.div
                className={s.motivated}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: true }}
                variants={elemY}
              >
                More motivated than 96.6%
              </motion.div>
              <motion.div
                className={s.motivated}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: true }}
                variants={elemY}
              >
                More responsible than 94.4%
              </motion.div>
              <motion.div
                className={s.motivated}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: true }}
                variants={elemY}
              >
                Love front-end more than 99.4%
              </motion.div>
              <motion.div
                className={s.motivated}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: true }}
                variants={elemY}
              >
                Had a graphic background
              </motion.div>
              <motion.div
                className={s.hardSkillsWrap}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: true }}
                variants={elemOpacityLong}
              >
                <h2 className={s.heading1}>My hard skills</h2>
                <div className={s.skillsBox}>
                  <div className={s.skillWrapper}>
                    <AiOutlineHtml5 className={s.html} />
                    <p className={s.skillName}>HTML</p>
                  </div>
                  <div className={s.skillWrapper}>
                    <DiCss3Full className={s.css} />
                    <p className={s.skillName}>CSS</p>
                  </div>
                  <div className={s.skillWrapper}>
                    <DiSass className={s.sass} />
                    <p className={s.skillName}>SASS</p>
                  </div>
                  <div className={s.skillWrapper}>
                    <IoLogoJavascript className={s.js} />
                    <p className={s.skillName}>JS</p>
                  </div>
                  <div className={s.skillWrapper}>
                    <SiTypescript className={s.tailw} />
                    <p className={s.skillName}>TS</p>
                  </div>
                  <div className={s.skillWrapper}>
                    <FaReact className={s.react} />
                    <p className={s.skillName}>REACT</p>
                  </div>
                  <div className={s.skillWrapper}>
                    <SiRedux className={s.redux} />
                    <p className={s.skillName}>REDUX</p>
                  </div>
                  <div className={s.skillWrapper}>
                    <FaNodeJs className={s.node} />
                    <p className={s.skillName}>NODE JS</p>
                  </div>
                  <div className={s.skillWrapper}>
                    <GrGraphQl className={s.graph} />
                    <p className={s.skillName}>GRAPHQL</p>
                  </div>
                  <div className={s.skillWrapper}>
                    <SiMaterialui className={s.material} />
                    <p className={s.skillName}>MA UI</p>
                  </div>

                  <div className={s.skillWrapper}>
                    <BsFillBootstrapFill className={s.bts} />
                    <p className={s.skillName}>BTS</p>
                  </div>
                  <div className={s.skillWrapper}>
                    <SiTailwindcss className={s.wind} />
                    <p className={s.skillName}>TAILWIND</p>
                  </div>
                </div>
                <Link to="/portfolio" className={s.navContent}>
                  PORTFOLIO
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
