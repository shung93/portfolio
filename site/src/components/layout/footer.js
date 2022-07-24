import {Link} from 'gatsby';
import React from 'react';
import { FooterStyle } from '../../styles/_layout/_footer.style';

const Footer = () => {
    return (
        <div>
            <FooterStyle
                  className="dark-mode"
            >
                <div
                    className="links"
                >
                    <Link
                        to="https://www.linkedin.com/in/samhung/"
                    >
                        linkedin
                    </Link>
                    <Link
                        to="https://github.com/shung93"
                    >
                        github
                    </Link>
                </div>
                <p>© 2022</p>
            </FooterStyle>
        </div>
    )
};

export default Footer;