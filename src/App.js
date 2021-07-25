import React, { useState } from 'react'
import Nav from "./components/Nav"
import Footer from './components/Footer'

function App() {
  const [pages] = useState([
    'about me',
    'projects',
    'contact',
    'resume'
  ])

  const [currentPage, setPage] = useState('about')

  return (
    <div>
      <Nav
        pages = {pages}
        currentPage = { currentPage }
        setPage = { setPage }
      ></Nav>

      <Footer />
    </div>
  );
}

export default App;
