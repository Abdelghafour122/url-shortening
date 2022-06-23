import React from "react";

const MobileMenu = () => {
  return (
    <div className="mobile-menu">
      <div className="top">
        <button className="empty">Features</button>
        <button className="empty">Pricing</button>
        <button className="empty">Resources</button>
      </div>
      <hr />
      <div className="bottom">
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default MobileMenu;
