import React from 'react';
// import github and repo icons for footer links using fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ghIcon = <FontAwesomeIcon icon={faGithub} />
const repoIcon = <FontAwesomeIcon icon={faLinkedin} />

// export Footer function
export default function Footer() {
    return (
        <footer className="footer">
            <a className="footer-link" href="https://github.com/blazelim">{ghIcon}</a>
            <a className="footer-link" href="https://www.linkedin.com/in/blaze-lim-814852187/">{repoIcon}</a>
        </footer>
    )
}