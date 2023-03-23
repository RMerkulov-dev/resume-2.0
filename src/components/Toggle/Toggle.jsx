import { useSelector, useDispatch } from 'react-redux';
import { set } from '../../redux/slice';
import { useEffect } from 'react';
import s from './Toggle.module.css';
import cn from 'classnames';

export const Toggle = ({ className }) => {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleChange = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    dispatch(set(next));
  };

  return (
    <div
      className={cn(className, theme === 'dark' ? s.dark : s.light)}
      onClick={handleChange}
    ></div>
  );
};
