import React, { useState } from 'react'
import Nav from "./components/Nav"
import Footer from './components/Footer'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [pages] = useState([
    'about me',
    'projects',
    'contact',
    'resume'
  ])

  const [currentPage, setPage] = useState('about me')

  return (
    <div>
      <Nav
        pages = {pages}
        currentPage = { currentPage }
        setPage = { setPage }
      ></Nav>
      {
        {
          'about me': <About />,
          'projects': <Projects />,
          'contact': <Contact />,
          'resume': <Resume />
        }[currentPage]
      }
      <Footer />
    </div>
  );
}

export default App;
