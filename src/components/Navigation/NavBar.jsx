import { Link } from 'react-router-dom';
import Home from '../../images/nav/home.png';
import Reason from '../../images/nav/reason.png';
import Projects from '../../images/nav/projects.png';
import About from '../../images/nav/about.png';
import Experience from '../../images/nav/experience.png';
import Close from '../../images/nav/delete.png';
import { useCallback, useEffect } from 'react';
import s from './NavBar.module.css';

export const NavBar = ({ SetOpen }) => {
  const handleClose = useCallback(
    e => {
      if (e.code === 'Escape') {
        SetOpen(false);
        document.removeEventListener('keydown', handleClose);
      }
      SetOpen(false);
    },
    [SetOpen]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleClose);
  }, [handleClose]);

  return (
    <>
      <div className={s.overlay} onClick={handleClose}>
        <div className={s.navWrapper}>
          <button className={s.closeBtn} onClick={() => SetOpen(false)}>
            <img src={Close} alt="" />
          </button>
          <div className={s.navItem}>
            <Link to="/" onClick={() => SetOpen(false)}>
              <img src={Home} alt="" />
            </Link>
          </div>
          <div className={s.navItem}>
            {' '}
            <Link to="/reason" onClick={() => SetOpen(false)}>
              <img src={Reason} alt="" />
            </Link>
          </div>
          <div className={s.navItem}>
            {' '}
            <Link to="/portfolio" onClick={() => SetOpen(false)}>
              <img src={Projects} alt="" />
            </Link>
          </div>
          <div className={s.navItem}>
            {' '}
            <Link to="/about" onClick={() => SetOpen(false)}>
              <img src={About} alt="" />
            </Link>
          </div>
          <div className={s.navItem}>
            {' '}
            <Link to="/experience" onClick={() => SetOpen(false)}>
              <img src={Experience} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
