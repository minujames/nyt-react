import React from "react";
import { Link } from "react-router-dom";

const Header = () => 
<div className="container">
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <Link className="nav navbar-brand" to="#">NYT-React</Link>
      
      <ul className="nav navbar-nav navbar-right">
        <li className={window.location.pathname === "/search" ? "active" : ""}>
          <Link to="/search">Search</Link>
        </li>
        <li className={window.location.pathname === "/saved" ? "active" : ""}>
          <Link to="/saved">Saved Articles</Link>
        </li>
      </ul>
    </div>
  </nav>

  <div>
    <div className="jumbotron ">
      <h2>New York Times Articles Scrubber (ReactJS)</h2> 
      <p>Search for and save articles</p> 
    </div>
  </div>

</div>;

export default Header;