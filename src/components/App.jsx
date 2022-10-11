import { MainPage } from './MainPage/MainPage';
import { Reason } from './Reason/Reason';
import { Routes,Route } from 'react-router-dom';


export const App = () => {
  return (
<>
  <Routes>
    <Route path="/" element={<MainPage/>} />
    <Route path="/reason" element={<Reason/>} />


  </Routes>

</>
  )

};
