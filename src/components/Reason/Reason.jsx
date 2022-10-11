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


export const Reason = () => {
  return (
    <>
      <header className={s.header}>
        <div className={s.container}>
          <div className={s.headerContainer}>
            <nav className={s.navigation}>
              <button className={s.navBtn} type='button'><img className={s.iconHeader} src={Menu} alt='menu' /></button>
              <Link to='/' className={s.navlink}><img className={s.iconHeader} src={Home} alt='home' /></Link>
            </nav>
            <div className={s.contactWrapper}>
              <a href='mailto:fotoromario@gmail.com'><img src={Mail} alt='email' /></a>
              <a href='tel:+380674825841'><img src={Tel} alt='phone' /></a>
              <a href='https://telegram.me/romario360'><img src={Telegram} alt='telegram' /></a>
              <a href={Resume} download><img src={Download} alt='download' /></a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className={s.container}>
            <div className={s.reasonMain}>
              <img className={s.iconQuestion} src={Question} alt='question' />
              <h2 className={s.heading1}>Why me</h2>
              <img className={s.iconMouse} src={Mouse} alt='icon' />
            </div>
            <div className={s.reasonStat}>
              <div className={s.motivated}>More motivated than 96.6%</div>
              <div className={s.motivated}>More responsible than 94.4%</div>
              <div className={s.motivated}>Love front-end more than 99.4%</div>
              <div className={s.motivated}>Has a graphic background</div>
              <div className={s.hardSkillsWrap}>
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
                <Link to='/reason' className={s.navContent}>PORTFOLIO</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
