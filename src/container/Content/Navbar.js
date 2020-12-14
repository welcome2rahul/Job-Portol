import React from 'react'


export default function Navbar({label}) {
  const logoutHandler=()=>{
  localStorage.clear();
    window.location.reload()
  }
    return (
        <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top">
        <div className="container-fluid">
          <div className="navbar-wrapper">
            <p className="navbar-brand">{label}</p>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon icon-bar"></span>
            <span className="navbar-toggler-icon icon-bar"></span>
            <span className="navbar-toggler-icon icon-bar"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end">
            
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link" id="navbarDropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="material-icons ">person</i>
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownProfile">
                  <div className="dropdown-divider"></div>
                  <button className="dropdown-item ml-4" onClick={()=>logoutHandler()}>Log out</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
