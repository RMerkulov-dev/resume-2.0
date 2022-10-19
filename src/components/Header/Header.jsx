import s from './Header.module.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Resume from '../../cv/cv_roman merkulov.pdf';
import { useState } from 'react';
import { NavBar } from '../Navigation/NavBar';
import {GrMailOption} from 'react-icons/gr'
import {BsTelephone} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {FiGithub} from 'react-icons/fi'
import {GrDocumentDownload} from 'react-icons/gr'
import {RiHome2Line} from 'react-icons/ri'
import {BsThreeDotsVertical} from 'react-icons/bs'

export const Header=()=>{
  const [open, SetOpen] = useState(false);
  const elemOpacity = {
    hidden: {
      opacity: 0,
    },
    visible: custom => ({
      opacity: 1,
      transition: { delay: custom * 0.4, duration: 0.8 },
    }),
  };

  return(
    <>
    {open && <NavBar  SetOpen={SetOpen} />}
    <header className={s.header}>
      <div className={s.container}>
        <motion.div
          className={s.headerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          variants={elemOpacity}
        >
          <nav className={s.navigation}>
            <button
              className={s.navBtn}
              type="button"
              onClick={() => SetOpen(true)}
            >
              <BsThreeDotsVertical className={s.iconHeader}/>
              {/*<img className={s.iconHeader} src={Menu} alt="menu" />*/}
            </button>
            <Link to="/" className={s.navlink}>
              {/*<img className={s.iconHeader} src={Home} alt="home" />*/}
              <RiHome2Line className={s.iconHeader}/>
            </Link>
          </nav>
          <div className={s.contactWrapper}>
            <a href="mailto:fotoromario@gmail.com">
              {/*<img src={Mail} alt="mail" />*/}
              <GrMailOption className={s.iconHeader}/>
            </a>
            <a href="tel:+380674825841">
              <BsTelephone className={s.iconHeader}/>
              {/*<img src={Tel} alt="phone" />*/}
            </a>
            <a
              href="https://telegram.me/romario360"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/*<img src={Telegram} alt="telegram" />*/}
        <FaTelegramPlane className={s.iconHeader}/>
            </a>
            <a
              href="https://www.linkedin.com/in/roman-merkulov-857041241/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/*<img src={Linkedin} alt="github" />*/}
              <AiOutlineLinkedin className={s.iconHeader}/>
            </a>
            <a
              href="https://github.com/RoRomario360"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/*<img src={Git} alt="github" />*/}
              <FiGithub className={s.iconHeader}/>
            </a>
            <a className={s.download}  href={Resume} download>
              {/*<img src={Download} alt="download" />*/}
              <GrDocumentDownload className={s.iconHeader}/>
            </a>
          </div>
        </motion.div>
      </div>
    </header>
    </>
  )
}
