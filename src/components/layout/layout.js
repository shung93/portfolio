import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = (props) => {
    return (
        <div style={{ overflow: "hidden" }}>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
};

export default Layout;