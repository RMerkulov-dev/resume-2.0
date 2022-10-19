import s from './About.module.css';
import { Link } from 'react-router-dom';
import Card from '../../images/hero/about.png';
import Mouse from '../../images/hero/mouse.png';
import Education from '../../images/hero/education.png';
import Ship from '../../images/hero/ship.png';
import Photo from '../../images/hero/360-image.png';
import Goit from '../../images/hero/goit.png';
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

export const About = () => {


  return (
    <>


      <main>
        <section>
          <div className={s.container}>
            <motion.div className={s.aboutWrapper} initial='hidden'
                        whileInView='visible'
                        viewport={{ amount: 0.2,once: true }}
                        variants={elemOpacity}>
              <img className={s.portfolioImg} src={Card} alt='portfolio' />
              <h1 className={s.heading1}>Let's look at my story</h1>
              <img className={s.iconMouse} src={Mouse} alt='icon' />
            </motion.div>

            <motion.div className={s.aboutContent} initial='hidden'
                        whileInView='visible'
                        viewport={{ amount: 0.2,once: true }}
                        variants={elemY}>
              <img className={s.aboutImg} src={Education} alt='portfolio' />
              <p className={s.aboutText}>In 2003 began studying at Odessa Polytechnical University and graduated in
                2008. Received a diploma from a specialist</p>
            </motion.div>

            <motion.div className={s.aboutContent} initial='hidden'
                        whileInView='visible'
                        viewport={{ amount: 0.2,once: true }}
                        variants={elemY}>
              <img className={s.aboutImg} src={Ship} alt='portfolio' />
              <p className={s.aboutText}>From 2013 to 2021, worked as a senior coordinator in maritime transport.
                Managed people, improved processes, and solved complex problems</p>
            </motion.div>

            <motion.div className={s.aboutContent} initial='hidden'
                        whileInView='visible'
                        viewport={{ amount: 0.2,once: true }}
                        variants={elemY}>
              <img className={s.aboutImg} src={Photo} alt='portfolio' />
              <p className={s.aboutText}>From 2021 to 2022, worked as a freelance photographer and creator of 360
                Virtual tours. Mastered and studied one of the most complex editing programs. I also took photos and
                edited videos. Taught people online.</p>
            </motion.div>

            <motion.div className={s.aboutContent} initial='hidden'
                        whileInView='visible'
                        viewport={{ amount: 0.2,once: true }}
                        variants={elemY}>
              <img className={s.aboutImg} src={Goit} alt='portfolio' />
              <p className={s.aboutText}>At 2022, finished Bootcamp online courses at Go It school </p>
            </motion.div>
            <Link to='/experience' className={s.navContent}>COMMERCIAL EXPERIENCE</Link>
          </div>

        </section>
      </main>
    </>
  );
};
