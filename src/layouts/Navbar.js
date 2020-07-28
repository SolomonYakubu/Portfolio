import React from "react";
import {
	faBars,
	faTimes,
	faHome,
	faLightbulb,
	faListAlt,
	faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../App.css";

function Navbar(props) {
	return (
		<div className="header">
			<div
				style={{
					alignSelf: "center",
					alignContent: "flex-start",
					position: "absolute",
					left: "15px",
					zIndex: "4",
					width: "100px",
					borderStyle: "groove",
					borderColor: "#0080ff",
					borderWidth: "2px",
					height: "20px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					// borderTopLeftRadius: "25px",
					// borderBottomRightRadius: "25px",
					padding: "5px",
					borderRadius: "5px",
				}}
			>
				<p
					style={{
						fontFamily: "'Righteous',cursive",
						fontSize: "18px",
						color: "#0080ff",
						fontWeight: "bold",
						fontStyle: "italic",
					}}
				>
					KingSolo
				</p>
			</div>

			<Router>
				<span className="linkDiv">
					<button
						className="link"
						value="profile"
						onClick={(e) => props.scrollers(e.target.value)}
					>
						<FontAwesomeIcon icon={faHome} className="icon" />
						&nbsp; HOME
					</button>
					<button
						className="link"
						value="mySkill"
						onClick={(e) => props.scrollers(e.target.value)}
					>
						<FontAwesomeIcon icon={faLightbulb} className="icon" />
						&nbsp; SKILLS
					</button>
					<button
						className="link"
						value="projects"
						onClick={(e) => props.scrollers(e.target.value)}
					>
						<FontAwesomeIcon icon={faListAlt} className="icon" />
						&nbsp;PROJECTS
					</button>
					<button
						className="link"
						value="contact"
						onClick={(e) => props.scrollers(e.target.value)}
					>
						<FontAwesomeIcon icon={faPhoneSquare} className="icon" />
						&nbsp;CONTACT
					</button>
					<button
						className="btnOpt"
						style={{
							position: "absolute",
							right: "20px",
							alignSelf: "center",
							backgroundColor: "#fff",
							borderColor: "#a6f1a6",
							borderStyle: "solid",
							outline: "none",
							zIndex: "2",

							borderRadius: "5px",
							textAlign: "center",
							borderWidth: "1.2px",
							//padding: "3px",
							paddingTop: "5px",
							paddingBottom: "20px",
							width: "32px",
							height: "25px",
						}}
						onClick={props.displayNav}
					>
						<FontAwesomeIcon
							icon={props.nav ? faTimes : faBars}
							style={{ color: "#696969" }}
							size="1x"
						/>
					</button>
				</span>
			</Router>
		</div>
	);
}

export default Navbar;
