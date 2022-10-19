import s from './Experience.module.css';
import Expert from '../../images/hero/experience.png';
import Altertech from '../../images/hero/altertech.png';
import { motion } from 'framer-motion';
import { BsMouse } from 'react-icons/bs';



const elemOpacity = {
  hidden: {
    opacity: 0,
  },
  visible: custom => ({
    opacity: 1,
    transition: { delay: custom * 0.4,duration:0.8, },
  }),
};


export const Experience = () => {

  return (
    <>
      <main>
        <section>
          <div className={s.container}>
            <motion.div className={s.experienceWrap} initial='hidden'
                        whileInView='visible'
                        viewport={{ amount: 0.2,once: true }}
                        variants={elemOpacity}>
              <img className={s.experienceImg} src={Expert} alt='portfolio' />
              <h1 className={s.heading1}>My commercial experience</h1>
              <BsMouse className={s.iconMouse} />
            </motion.div>
            <div className={s.experienceBox}>
              <img className={s.aboutImg} src={Altertech} alt='portfolio' />
              <p className={s.aboutText}>From 07.08.2022 <br />
                Trainee in Altertech</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
