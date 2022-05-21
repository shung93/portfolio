import {Link} from 'gatsby';
import React from 'react';
import { HeaderStyle, HeaderTitle, HeaderNav } from '../../styles/_layout/_header.style';

const Header = () => {
    return (
        <HeaderStyle>
            <HeaderTitle>sam h.</HeaderTitle>
            <HeaderNav>
                <li>
                    <Link>about</Link>
                </li>
                <li>
                    <Link>contact</Link>
                </li>
            </HeaderNav>
        </HeaderStyle>
    )
};

export default Header;