import {Link} from 'gatsby';
import React from 'react';
import { HeaderStyle, HeaderNav } from '../../styles/_layout/_header.style';

const Header = () => {
    
    return (
        <HeaderStyle>
            <p className='content'>
                sam h.
            </p>
            <HeaderNav
                className='content'
            >
                <li>
                    <Link 
                        to="mailto:shung93uk@gmail.com" 
                        style={{textDecoration: 'none'}}
                    >
                        contact
                    </Link>
                </li>
            </HeaderNav>
        </HeaderStyle>
    )
};

export default Header;