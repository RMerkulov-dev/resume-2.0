import Menu from '../../images/header/menu.png';
import Home from '../../images/header/home.png';
import HeroImage from '../../images/hero/developer.png';
import Tel from '../../images/header/phone.png'
import Mail from '../../images/header/mail.png'
import Telegram from '../../images/header/telegram.png'
import Download from '../../images/header/cv.png'
import Git from '../../images/header/github-header.png'
import Resume from '../../cv/cv_roman merkulov.pdf'
import Linkedin from '../../images/header/linkedin.png'
import { Link } from 'react-router-dom';
import s from './MainPage.module.css';






export const MainPage = () => {

  return (
    <>
      <header className={s.header} >
        <div className={s.container}>
          <div className={s.headerContainer} >
            <nav className={s.navigation}>
              <button className={s.navBtn} type='button'><img className={s.iconHeader} src={Menu} alt='menu' /></button>
              <Link to='/' className={s.navlink}><img className={s.iconHeader} src={Home} alt='home' /></Link>
            </nav>
            <div className={s.contactWrapper}>
              <a href='mailto:fotoromario@gmail.com'><img src={Mail} alt='email' /></a>
              <a href='tel:+380674825841'><img src={Tel} alt='phone' /></a>
              <a href='https://telegram.me/romario360' target="_blank"  rel="noopener noreferrer"><img src={Telegram} alt='telegram' /></a>
              <a href='https://www.linkedin.com/in/roman-merkulov-857041241/' target="_blank"  rel="noopener noreferrer"><img src={Linkedin} alt='github' /></a>
              <a href='https://github.com/RoRomario360' target="_blank"  rel="noopener noreferrer"><img src={Git} alt='github' /></a>
              <a href={Resume} download><img src={Download} alt='download'/></a>
            </div>
          </div>
        </div>
      </header>
      <main className={s.mainPage}>
      <section >
        <div className={s.container}>
          <div className={s.heroContent}>
            <h1 className={s.heading1}>Hi there. I am Roman Merkulov</h1>
            <p>Front-end developer</p>
            <img src={HeroImage} alt='avatar' />
            <Link to='/reason' className={s.navContent}>LET'S GO</Link>
          </div>
        </div>
      </section>
      </main>
    </>
  );
};
