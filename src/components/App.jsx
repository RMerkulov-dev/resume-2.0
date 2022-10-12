import { MainPage } from './MainPage/MainPage';
import { Reason } from './Reason/Reason';
import { Routes, Route } from 'react-router-dom';
import { Portfolio } from './Portfolio/Portfolio';
import { About } from './About/About';
import ScrollToTop from './ScrollToTop/ScrollToTop';

export const App = () => {
  return (
<>

    <ScrollToTop>
  <Routes>
    <Route path="/" element={<MainPage/>} />
    <Route path="/reason" element={<Reason/>} />
    <Route path="/portfolio" element={<Portfolio/>} />
    <Route path="/about" element={<About/>} />
  </Routes>
    </ScrollToTop>

</>
  )

};
