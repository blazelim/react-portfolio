import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers"

function Nav(props) {
    const {
        pages = [],
        currentPage,
        setPage
    } = props

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage)
    }, [currentPage])

    return (
        <header className="flex-row px-1 headerBar">
            <h2>
                <a href="/">
                    Blaze Bentley Co Lim
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    {pages.map((page) => (
                        <li className={`mx-1 key=${page}`}>
                            <span
                                onClick={() => {
                                    setPage(page)
                                }}
                            >
                                {capitalizeFirstLetter(page)}    
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
                



        </header>
    )
}


export default Nav;