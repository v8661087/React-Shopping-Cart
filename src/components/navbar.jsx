import React from "react";

const NavBar = ({totalCounters}) => {
    return ( <nav className="navbar navbar-light bg-light">
    <a className="navbar-brand" href="#1">
      Navbar <span className="badge badge-pill badge-secondary">{ totalCounters }</span>
    </a>
  </nav> );
}
 
export default NavBar;
