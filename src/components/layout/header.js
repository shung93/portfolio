import {Link} from 'gatsby';
import React from 'react';
import { HeaderStyle, HeaderTitle, HeaderNav } from '../../styles/_layout/_header.style';
import { colors } from '../../styles/_base/_settingColors.style';

const Header = (ref) => {
    return (
        <HeaderStyle>
            <HeaderTitle>sam h.</HeaderTitle>
            <HeaderNav>
                <li>
                    <Link 
                        to="/contact" 
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