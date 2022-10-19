import { MainPage } from './MainPage/MainPage';
import { Reason } from './Reason/Reason';
import { Routes, Route } from 'react-router-dom';
import { Portfolio } from './Portfolio/Portfolio';
import { About } from './About/About';
import { Experience } from './Experience/Experience';
import { Header } from './Header/Header';



export const App = () => {
  return (
<>
<Header/>
  <Routes>
    <Route path="/" element={<MainPage/>} />
    <Route path="/reason" element={<Reason/>} />
    <Route path="/portfolio" element={<Portfolio/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/experience" element={<Experience/>} />
  </Routes>

</>
  )
};
