import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hamburger from './components/Hamburger'

const Home = () => (<>Home</>);
const About = () => (<>About</>);
const Contact = () => (<>Contact</>);
const Departmants = () => (<>Departmants</>);

const App = () => {

  const options = {
    isTitle: true,
    isLogo: false,
    logoSettings: {
      logo: '',
      logoWidth: 50,
      logoHeight: 50
    },
    title: "Responsive Menu",
    navigationBackgroundColor: '',
    routerList: [
      { rName: "Home", rLink: "/home" },
      { rName: "About", rLink: "/about" },
      { rName: "Contact", rLink: "/contact" },
      { rName: "Departmants", rLink: "/departmants" },
    ]
  }

  return (
    <div className="App">            
      <BrowserRouter>
        <Hamburger options={options}  />
        <Routes>      
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/departmants" element={<Departmants />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
