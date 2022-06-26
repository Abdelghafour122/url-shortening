import React, { useState } from "react";
import logo from "../../Images/logo.svg";
import close from "../../Images/icon-close.svg";
import hamMenu from "../../Images/icon-hamburger.svg";

import MobileMenu from "../../Components/MobileMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const setNoScroll = () => {
    document.body.classList.toggle("no-scroll");
  };
  return (
    <nav>
      <div className="container df ai-c jc-sb">
        <div className="left df ai-c jc-sb">
          <img src={logo} alt="Shortly-logo" />
          <ul className="desktop-links hide-in-mobile df ai-c jc-c">
            <li>
              <button className="empty">Features</button>
            </li>
            <li>
              <button className="empty">Pricing</button>
            </li>
            <li>
              <button className="empty">Resources</button>
            </li>
          </ul>
        </div>
        <div className="right hide-in-mobile">
          <button className="empty">Login</button>
          <button className="rounded">Sign Up</button>
        </div>
        <button
          className="ham-menu hide-in-desktop df ai-c jc-c"
          onClick={() => {
            setOpen(!open);
            setNoScroll();
          }}
        >
          <img src={open ? close : hamMenu} alt="Open mobile links menu" />
        </button>
        {open && <MobileMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
