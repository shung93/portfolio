import React, {useRef} from 'react';
import Header from './header';
import Footer from './footer';
import { LayoutStyle } from '../../styles/_layout/_layout.style';

const Layout = (props) => {

    return (
        
        <LayoutStyle>
            <Header/>
            {props.children}
            <Footer/>
        </LayoutStyle>
        
    )
};

export default Layout;