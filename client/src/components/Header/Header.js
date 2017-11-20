import React from "react";

const Header = () => 
<div className="container">
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <a href="/" className="navbar-brand">NYT-React</a>
        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item">
            <a className="nav-link" href="/api/search">Search</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/api/saved">Saved Articles</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div>
    <div className="jumbotron">
    <h1>NYT-React</h1> 
    <p>New York Times Articles</p> 
    </div>
  </div>

</div>;

export default Header;