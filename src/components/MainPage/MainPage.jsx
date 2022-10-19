import HeroImage from '../../images/hero/developer.png';
import { Link } from 'react-router-dom';
import s from './MainPage.module.css';
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

export const MainPage = () => {


  return (
    <>


      <main className={s.mainPage}>
        <section>
          <div className={s.container}>
            <motion.div
              className={s.heroContent}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              variants={elemOpacity}
            >
              <h1 className={s.heading1}>Hi there. I am Roman Merkulov</h1>
              <p style={{ fontWeight: 600 }}>Front-end developer</p>
              <p>JavaScript / React</p>
              <img src={HeroImage} alt="avatar" />
              <Link to="/reason" className={s.navContent}>
                LET'S GO
              </Link>

            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};
