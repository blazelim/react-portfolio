import React, { useState } from 'react'
import Nav from "./components/Nav"
import Footer from './components/Footer'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import WhyCoding from './components/whycoding'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [pages] = useState([
    'about me',
    'projects',
    'why coding',
    'resume'
  ])

  const [currentPage, setPage] = useState('about me')

  return (
    <div className="page-container">
      <Nav
        pages = {pages}
        currentPage = { currentPage }
        setPage = { setPage }
      ></Nav>
      {
        {
          'about me': <About />,
          'projects': <Projects />,
          'why coding': <WhyCoding />,
          'resume': <Resume />
        }[currentPage]
      }
      <Footer />
    </div>
  );
}

export default App;
