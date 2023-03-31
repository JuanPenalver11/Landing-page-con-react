import React from "react";

const Navbar = () => {
  return (
   
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid" id="navBar">
      <a className="navbar-brand" href="#" id="brand">LaLibreria</a>
      <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse bg-black" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link" aria-current="page" href="#" id="home">Home</a>
          <a className="nav-link" href="#"id="about">About</a>
          <a className="nav-link" href="#"id="services">Services</a>
          <a className="nav-link" id="contact">Contact</a>
        </div>
      </div>
    </div>
  </nav>
  
  );
};

export default Navbar;

