import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { LayoutStyle } from "../../styles/_layout/_layout.style";

const Layout = (props) => {
  return (
    <LayoutStyle>
      <Header />
      {props.children}
      <Footer />
    </LayoutStyle>
  );
};

export default Layout;
