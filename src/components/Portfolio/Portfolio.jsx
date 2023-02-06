import s from './Portfolio.module.css';
import { Link } from 'react-router-dom';
import Projects from '../../images/hero/portfolio.png';
import { FiGithub } from 'react-icons/fi';
import { BiLinkAlt } from 'react-icons/bi';
import Kapusta from '../../images/portfolio/kapusta.jpg';
import Filmoteka from '../../images/portfolio/filmoteka.jpg';
import Music from '../../images/portfolio/music-app.jpg';
import Hell from '../../images/portfolio/hell.jpg';
import Fitness from '../../images/portfolio/your_fitness.png';
import { motion } from 'framer-motion';
import { BsMouse } from 'react-icons/bs';

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

export const Portfolio = () => {
  return (
    <>
      <main>
        <section>
          <div className={s.container}>
            <motion.div
              className={s.portfolioMain}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              variants={elemOpacity}
            >
              <img className={s.portfolioImg} src={Projects} alt="portfolio" />
              <h1 className={s.heading1}>Let's see my projects</h1>
              <BsMouse className={s.iconMouse} />
            </motion.div>
            <div className={s.portfolioWrapper}>
              <motion.div
                className={s.projectBox}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: true }}
                variants={elemY}
              >
                <h3 className={s.projTitle}>KAPUSTA</h3>
                <p className={s.projSubtitle}>Team project</p>
                <a
                  className={s.projectPoster}
                  href="https://kapusta-project-app.netlify.app/main"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Kapusta} alt="link" />
                </a>
                <ul className={s.linksList}>
                  <li>
                    <a
                      href="https://kapusta-project-app.netlify.app/main"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BiLinkAlt className={s.listIcon} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Mr-Nihility/kapusta-project"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub className={s.listIcon} />
                    </a>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                className={s.projectBox}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: true }}
                variants={elemY}
              >
                <h3 className={s.projTitle}>YOUR FITNESS</h3>
                <p className={s.projSubtitle}>Own project</p>
                <a
                  className={s.projectPoster}
                  href="https://your-fitness.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Fitness} alt="link" />
                </a>
                <ul className={s.linksList}>
                  <li>
                    <a
                      href="https://your-fitness.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BiLinkAlt className={s.listIcon} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/RoRomario360/your_fitness-ts"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub className={s.listIcon} />
                    </a>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className={s.projectBox}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: true }}
                variants={elemY}
              >
                <h3 className={s.projTitle}>MUSIC APP</h3>
                <p className={s.projSubtitle}>Own project</p>
                <a
                  className={s.projectPoster}
                  href="https://spotify-clone-music-app.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Music} alt="link" />
                </a>
                <ul className={s.linksList}>
                  <li>
                    <a
                      href="https://spotify-clone-music-app.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BiLinkAlt className={s.listIcon} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/RoRomario360/my-music-app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub className={s.listIcon} />
                    </a>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className={s.projectBox}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: true }}
                variants={elemY}
              >
                <h3 className={s.projTitle}>FILMOTEKA</h3>
                <p className={s.projSubtitle}>Team project</p>
                <a
                  className={s.projectPoster}
                  href="https://redokleeroy.github.io/let_JS_project/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Filmoteka} alt="link" />
                </a>
                <ul className={s.linksList}>
                  <li>
                    <a
                      href="https://redokleeroy.github.io/let_JS_project/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BiLinkAlt className={s.listIcon} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/RedokLeeroy/let_JS_project"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiGithub className={s.listIcon} />
                    </a>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className={s.projectBox}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: true }}
                variants={elemY}
              >
                <h3 className={s.projTitle}>HELL ENGLISH</h3>
                <p className={s.projSubtitle}>Team project</p>
                <a
                  className={s.projectPoster}
                  href="https://yehorboichenko.github.io/crazy-bears/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Hell} alt="link" />
                </a>
                <ul className={s.linksList}>
                  <li>
                    <a
                      href="https://yehorboichenko.github.io/crazy-bears/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BiLinkAlt className={s.listIcon} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/YehorBoichenko/crazy-bears"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiGithub className={s.listIcon} />
                    </a>
                  </li>
                </ul>
              </motion.div>
            </div>
            <Link to="/about" className={s.navContent}>
              ABOUT ME
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};
