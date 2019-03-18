import React, { Component } from "react";
import { Link } from 'react-router-dom'

class NavBar extends Component {
  
  render() {
    return (
      <div>
    <nav className="navbar navbar-expand-lg">
  <a className="navbar-brand" href="https://themoviedb.org" target="_blank"><img src="movieDB.png" width="75" height="75"/></a>
    <ul className="navbar-nav mr-auto">
      {/* <li className="nav-item active">
        <a className="nav-link" to="#">InTheater <span className="sr-only">(current)</span></a>
      </li> */}
      <li className="nav-item">
        <Link className="nav-link" to="/Movies">Movies</Link>
      </li>
      {/* <li className="nav-item">
        <Link className="nav-link" to="#">ON TV</Link>
      </li> */}
      <li className="nav-item">
        <Link className="nav-link" to="/SearchMovie">Search Movies,</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/TV">TV SHOWS</Link>
      </li>
    </ul>
</nav>
    </div>
    );
  }
}
export default NavBar;
