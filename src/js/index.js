//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/Navbar.css";
import "../styles/Jumbo.css";
import "../styles/Card.css";
import "../styles/Footpage.css";
//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
