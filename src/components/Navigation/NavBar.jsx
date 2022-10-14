import { Link } from 'react-router-dom';
import Home from '../../images/nav/home.png';
import Reason from '../../images/nav/reason.png';
import Projects from '../../images/nav/projects.png';
import About from '../../images/nav/about.png';
import Experience from '../../images/nav/experience.png';
import Close from '../../images/nav/delete.png';

import s from './NavBar.module.css';

export const NavBar = () => {
  return (
    <>
      <div className={s.overlay}>
        <div className={s.navWrapper}>
          <button className={s.closeBtn}>
            <img src={Close} alt="" />
          </button>
          <div className={s.navItem}>
            <Link to="/">
              <img src={Home} alt="" />
            </Link>
          </div>
          <div className={s.navItem}>
            {' '}
            <Link to="/reason">
              <img src={Reason} alt="" />
            </Link>
          </div>
          <div className={s.navItem}>
            {' '}
            <Link to="/portfolio">
              <img src={Projects} alt="" />
            </Link>
          </div>
          <div className={s.navItem}>
            {' '}
            <Link to="/about">
              <img src={About} alt="" />
            </Link>
          </div>
          <div className={s.navItem}>
            {' '}
            <Link to="/experience">
              <img src={Experience} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
