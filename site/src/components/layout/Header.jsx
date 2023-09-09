import React from "react";
import { Link } from "gatsby";
import { HeaderStyle, HeaderNav } from "../../styles/_layout/_header.style";

const Header = () => {
  return (
    <HeaderStyle>
      <p className="content">sam</p>
      <HeaderNav className="content links">
        <li>
          <Link to="mailto:shung93uk@gmail.com">contact</Link>
        </li>
      </HeaderNav>
    </HeaderStyle>
  );
};

export default Header;
