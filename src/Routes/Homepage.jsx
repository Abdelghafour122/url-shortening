import React, { useState } from "react";
import logo from "../Images/logo.svg";
import close from "../Images/icon-close.svg";
import hamMenu from "../Images/icon-hamburger.svg";

import { statsArr } from "../stats";
import MobileMenu from "../Components/MobileMenu";

const Homepage = () => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <nav>
        <div className="container df ai-c jc-sb">
          <div className="left df ai-c jc-sb">
            <img src={logo} alt="Shortly-logo" />
            <ul className="desktop-links hide-in-mobile">
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
          <button className="hide-in-desktop">
            <img
              src={open ? close : hamMenu}
              alt="Open mobile links menu"
              onClick={() => {
                setOpen((open) => !open);
              }}
            />
          </button>
          {open && <MobileMenu />}
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Homepage;
