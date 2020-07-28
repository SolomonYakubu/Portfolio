import React from "react";
import {
	faBars,
	faHome,
	faLightbulb,
	faListAlt,
	faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../App.css";
import { Button } from "react-scroll";
const Options = (props) => {
	console.log(props.nav);
	return (
		<div className={props.nav ? "optCon" : "optCon close"}>
			<Router>
				<div className="opt">
					<button
						value="profile"
						className="optLink"
						onClick={(e) => props.scrollers(e.target.value)}
					>
						<FontAwesomeIcon
							icon={faHome}
							style={{ float: "left" }}
							className="icon"
						/>
						&nbsp;HOME
					</button>

					<button
						className="optLink"
						value="mySkill"
						onClick={(e) => props.scrollers(e.target.value)}
					>
						<FontAwesomeIcon
							icon={faLightbulb}
							style={{ float: "left" }}
							className="icon"
						/>{" "}
						&nbsp;SKILLS
					</button>

					<button
						value="projects"
						onClick={(e) => props.scrollers(e.target.value)}
						className="optLink"
					>
						<FontAwesomeIcon
							icon={faListAlt}
							style={{ float: "left" }}
							className="icon"
						/>
						&nbsp;PROJECTS
					</button>

					<button
						value="contact"
						onClick={(e) => props.scrollers(e.target.value)}
						className="optLink"
					>
						<FontAwesomeIcon
							icon={faPhoneSquare}
							className="icon"
							style={{ float: "left" }}
						/>
						&nbsp;CONTACT
					</button>
				</div>
			</Router>
		</div>
	);
};

export default Options;
