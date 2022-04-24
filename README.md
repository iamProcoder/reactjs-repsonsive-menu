# reactjs-responsive-menu

> react responsive menu component

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

## Install

```bash
npm install --save reactjs-responsive-menu
```

## Usage

```jsx
import React from 'react'

// import router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import responsive menu library
import {ResponsiveMenuComponent} from 'reactjs-responsive-menubar';

// pages
const Home = () => (<>Home</>);
const About = () => (<>About</>);
const Contact = () => (<>Contact</>);
const Departmants = () => (<>Departmants</>);

function App() {

  // You have to add it to the root directory (App.js) with the "options" keyword
  const options = {
    isTitle: true, // Title appears or not in Menu Bar
    isLogo: false, // Logo appears or not in Menu Bar. If you make it "isLogo:true", "Logo" will be visible instead of "title"
    logoSettings: {
      logo: logo, // import logo instance
      logoWidth: 50, // logo width
      logoHeight: 50 // logo height
    },
    title: "Responsive Menu 1234", // Menu title
    navigationBackgroundColor: '', // Menu Bar background color
    routerList: [ // You can define the router definition in this format as many times as you want.
      { rName: "Home", rLink: "/home" },
      { rName: "About", rLink: "/about" },
      { rName: "Contact", rLink: "/contact" },
      { rName: "Departmants", rLink: "/departmants" },
    ]
  }

  return (
    <div className="App">      
      <BrowserRouter>
        <ResponsiveMenuComponent options={options}  />
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

export default App;

```

## License

MIT © [Faruk Mintas](https://github.com/iamProcoder)
