
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/layout/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Services from './components/pages/Services'
import Works from './components/pages/Works'

function App() {

  const [dark, updateDark] = useState(null);
  const ModeDark = JSON.parse(localStorage.getItem("dark"));

  useEffect(() => {
    if (ModeDark) {
      updateDark(ModeDark);
    }
  }, [ModeDark]);

  return (
    <>
      <BrowserRouter>
        <Header dark={dark} updateDark={updateDark} />

        <Routes>
          <Route path='/' element={<Home  dark={dark} updateDark={updateDark}/>} />
          <Route path='/About' element={<About  dark={dark} updateDark={updateDark}/>} />
          <Route path='/Services' element={<Services  dark={dark} updateDark={updateDark}/>} />
          <Route path='/Works' element={<Works  dark={dark} updateDark={updateDark}/>} />    
        </Routes>
      </BrowserRouter>



    </>
  );
}

export default App;
