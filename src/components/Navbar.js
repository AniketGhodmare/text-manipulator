// rfc - react funct based components
import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="/">Features</a> */}
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="/">About</a> */}
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="/">Contact</a> */}
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-success mx-2" type="submit">Search</button>
            <button className="btn btn-success mx-2" type="submit">Dark Mode</button>
          </form> */}
          <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label text-light" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = { title: PropTypes.string.isRequired };
Navbar.defaultProps = {
  title: 'enter title here'
};