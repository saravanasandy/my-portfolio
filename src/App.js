import React from 'react';
import NavBar from "./Components/NavBar/NavBar";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contacts from './Components/Contacts/Contacts';
import Certificate from './Components/Certificate/Certificate';


function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <About/>
      <Projects/>
      <Certificate/>
      <Contacts/>
   
    </>
  );
}

export default App;
