import React, { useState } from 'react'
import Nav from "./components/Nav"

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
    </div>
  );
}

export default App;
