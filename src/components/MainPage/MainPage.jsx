import HeroImage from '../../images/hero/developer.png';
import { Link } from 'react-router-dom';
import s from './MainPage.module.css';
import { motion } from 'framer-motion';
import { SiOpenai } from 'react-icons/si';
import { useCallback, useEffect, useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import ComputerCanvas from '../ComputerCanvas/ComputerCanvas';

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
  const [showChat, setShowChat] = useState(false);

  const handleClick = () => {
    setShowChat(!showChat);
  };

  const handleClose = useCallback(
    e => {
      if (e.code === 'Escape') {
        setShowChat(false);
        document.removeEventListener('keydown', handleClose);
      }
      setShowChat(false);
    },
    [setShowChat]
  );
  useEffect(() => {
    document.addEventListener('keydown', handleClose);
  }, [handleClose]);

  return (
    <>
      {showChat && (
        <div className={s.backdrop} onClick={handleClose}>
          <RiCloseCircleLine
            type="button"
            className={s.btnClose}
            onClick={() => setShowChat(false)}
          />
          <iframe
            title="chat window"
            className={s.chatWindow}
            src="https://my-chat-five.vercel.app/"
            style={{}}
          />
        </div>
      )}
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
              <div className={s.heroComputer}>
                <ComputerCanvas />
              </div>

              {/*<img src={HeroImage} alt="avatar" />*/}
              <Link to="/reason" className={s.navContent}>
                LET'S GO
              </Link>
            </motion.div>
            <div className={s.chatWrapper}>
              <button className={s.chatBtn} onClick={handleClick}>
                Chat
                <SiOpenai
                  style={{ width: '30px', height: '30px' }}
                  className={s.chatIcon}
                />
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
