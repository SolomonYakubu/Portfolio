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

const Options = (props) => {
	return (
		<div className={props.nav ? "optCon" : "optCon close"}>
			<Router>
				<div className="opt">
					<button
						value="profile"
						className="optLink"
						onClick={(e) => props.scrollers(e.target.value)}
						style={{
							borderBottomStyle:
								props.aboutShow || props.homeShow ? "solid" : null,
							borderWidth: "3px",
							borderColor: "#1464f4",
						}}
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
						style={{
							borderBottomStyle: props.skillShow ? "solid" : null,
							borderWidth: "3px",
							borderColor: "#1464f4",
						}}
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
						style={{
							borderBottomStyle: props.contactShow ? "solid" : null,
							borderWidth: "3px",
							borderColor: "#1464f4",
						}}
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
