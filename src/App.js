import React, { useState } from "react";

import "./App.css";
import Content from "./components/Content";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Login from "./components/Login";

function App() {
	const [nav, setNav] = useState(false);
	const displayNav = () => {
		setNav(!nav);
	};
	const [scroll, setScroll] = useState(false);
	const [name, setName] = useState("");

	const scrollSet = (e) => {
		setScroll(e);
	};
	function scrollers(e) {
		setName(e);
		setScroll(true);
	}
	return (
		<div className="App">
			<div className="bigContainer">
				<Navbar displayNav={displayNav} nav={nav} scrollers={scrollers} />

				<Content
					nav={nav}
					scroll={scroll}
					scrollSet={scrollSet}
					name={name}
					scrollers={scrollers}
					displayNav={displayNav}
				/>

				<Footer />
			</div>
		</div>
	);
}

export default App;
