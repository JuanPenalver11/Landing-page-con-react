import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbo";
import Card from "./Card";
import Footer from "./Footpage";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<><Navbar/>
		<Jumbotron/>
		<Card/>
		<Footer/>
		</>	
	);
};

export default Home;
