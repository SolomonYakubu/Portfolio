import React, { useState, useEffect, useCallback } from "react";
import VizSensor from "react-visibility-sensor";
import "../App.css";

import Options from "./Options";
import Contact from "./Contact";

import TypingEffect from "react-typing-effect";
import { scroller } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faTwitter,
	faGithub,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
	faPhone,
	faEnvelope,
	faMapMarker,
} from "@fortawesome/free-solid-svg-icons";

import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
const Skills = () => {
	const progColor = "#6d9bf1 ";
	return (
		<div>
			<div style={{}} className="aboutP">
				<div
					style={{
						borderBottomStyle: "solid",

						padding: "none",
					}}
					className="aboutStyles"
				>
					My Skills
				</div>
			</div>
			<p></p>
			<div className="skillContainer">
				<div className="skills">#HTML</div> &nbsp;
				<div className="skills">#CSS</div> &nbsp;
				<div className="skills">#Javascript</div> &nbsp;
				<div className="skills">#Node.Js</div> &nbsp;
				<div className="skills">#ExpressJs</div> &nbsp;
				<div className="skills">#Saas</div> &nbsp;
				<div className="skills">#BootStrap</div> &nbsp;
				<div className="skills">#Reactjs</div> &nbsp;
				<div className="skills">#Redux</div> &nbsp;
				<div className="skills">#Jquery</div> &nbsp;
				<div className="skills">#Nextjs</div> &nbsp;
				<div className="skills">#MongoDB</div> &nbsp;
				<div className="skills">#Sqlite</div> &nbsp;
				<div className="skills">#MySQL</div> &nbsp;
				<div className="skills">#C++</div> &nbsp;
				<div className="skills">#Java</div> &nbsp;
				<div className="skills">#Cordova</div> &nbsp;
				<div className="skills">#Wordpress</div> &nbsp;
			</div>
			<div>
				<div
					style={{
						borderBottomStyle: "solid",
						borderWidth: "5px",
						textAlign: "left",
						width: "100px",
						paddingTop: "10px",
						fontSize: "18px",
						// color: "#000",
					}}
					className="aboutStyles"
				>
					<strong>In Details</strong>
				</div>
				<br />
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
					}}
				>
					<div style={{ textAlign: "center" }} className="skillProgress">
						Javascript & jQuery
					</div>

					<Progress
						percent={92}
						status="active"
						theme={{
							active: {
								color: progColor,
								width: "20px",
							},
						}}
					/>
				</div>
				<br />
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
					}}
				>
					<div style={{ textAlign: "center" }} className="skillProgress">
						HTML,CSS,Bootstrap & SASS
					</div>

					<Progress
						percent={96}
						status="active"
						theme={{
							active: {
								color: progColor,
								width: "20px",
							},
						}}
					/>
				</div>
				<br />
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
					}}
				>
					<div style={{ textAlign: "center" }} className="skillProgress">
						Node.js/ExpressJs & NextJS
					</div>

					<Progress
						percent={75}
						status="active"
						theme={{
							active: {
								color: progColor,
								width: "20px",
							},
						}}
					/>
				</div>
				<br />
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
					}}
				>
					<div style={{ textAlign: "center" }} className="skillProgress">
						ReactJs/Redux
					</div>

					<Progress
						percent={85}
						status="active"
						theme={{
							active: {
								color: progColor,
								width: "20px",
							},
						}}
					/>
				</div>
				<br />
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
					}}
				>
					<div style={{ textAlign: "center" }} className="skillProgress">
						Databases: MongoDB, MySQL
					</div>

					<Progress
						percent={78}
						status="active"
						theme={{
							active: {
								color: progColor,
								width: "20px",
							},
						}}
					/>
				</div>
				<br />
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
					}}
				>
					<div style={{ textAlign: "center" }} className="skillProgress">
						Hybrid Apps - Cordova,Phonegap & Ionic
					</div>

					<Progress
						percent={80}
						status="active"
						theme={{
							active: {
								color: progColor,
								width: "20px",
							},
						}}
					/>
				</div>
				<br />
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
					}}
				>
					<div style={{ textAlign: "center" }} className="skillProgress">
						C++ & Java
					</div>

					<Progress
						percent={71}
						status="active"
						theme={{
							active: {
								color: progColor,
								width: "20px",
							},
						}}
					/>
				</div>
				<br />
			</div>
		</div>
	);
};

function Content(props) {
	if (props.scroll) {
		scroller.scrollTo(props.name, {
			duration: 500,
			delay: 100,
			smooth: true,

			offset: -100,
		});
		props.displayNav();
		props.scrollSet(false);
	}

	const [aboutShow, setAboutShow] = useState(false);
	const [skillShow, setSkillShow] = useState(false);
	const [projectShow, setProjectShow] = useState(false);
	const [contactShow, setContactShow] = useState(false);
	const [homeShow, setHomeShow] = useState(false);

	return (
		<div className="container" style={{}}>
			<Options
				nav={props.nav}
				scrollers={props.scrollers}
				aboutShow={aboutShow}
				skillShow={skillShow}
				projectShow={projectShow}
				contactShow={contactShow}
				homeShow={homeShow}
			/>
			<VizSensor
				onChange={(isVisible) => {
					setHomeShow(isVisible);
				}}
			>
				<div className="profile">
					<div className="imgCon">
						<img
							src={require("../images/profile.jpg")}
							style={{
								width: "120px",
								height: "120px",
								borderRadius: "50%",
								borderStyle: "solid",
								borderColor: "#000",
								borderWidth: "4px",
							}}
						/>
					</div>

					<p style={{}} className="intro">
						Hi!&#128075;, I'm{" "}
						<strong
							style={{
								// borderColor: "#1464f4",
								// borderWidth: "10px",
								// borderBottomStyle: "solid",
								color: "#000",
								paddingLeft: "5px",
								margin: "0",
								// borderLeftWidth: "0.9px",
								// borderLeftStyle: "solid",
							}}
						>
							Yakubu Solomon
						</strong>
					</p>

					<div style={{ marginBottom: "12px" }} className="typing">
						<TypingEffect
							text={[
								"I'm a Full-Stack web developer",
								"I'm focused....",
								"Creative....",
								"Determined....",
							]}
							speed={15}
							eraseDelay={1500}
						/>
					</div>
					<p style={{ margin: "5px" }}></p>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							width: "auto",
							marginBottom: "20px",
						}}
					>
						<a href="http://www.facebook.com/solomon.yakubu.313">
							<FontAwesomeIcon
								icon={faFacebook}
								className="socialIcon"
								size="2x"
								style={{ color: "#0d4f8b" }}
							/>
						</a>
						&nbsp; &nbsp;
						<a href="http://www.twitter.com/@King__Solo">
							<FontAwesomeIcon
								icon={faTwitter}
								className="socialIcon"
								size="2x"
								style={{ color: "#5cacee" }}
							/>
						</a>
						&nbsp; &nbsp;
						<a href="http://www.instagram.com/solomonyakubu34">
							<FontAwesomeIcon
								icon={faInstagram}
								className="socialIcon"
								style={{
									background: "#d6249f",
									borderRadius: "5px",
									color: "#fff",
									paddingLeft: "2px",
									paddingRight: "2px",
									background:
										"radial-gradient(circle at 30% 107%, #fdf497 0%,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285aeb 90%)",
								}}
								size="2x"
							/>
						</a>
						&nbsp; &nbsp;
						<a href="http://www.github.com/Solomon-Yakubu">
							<FontAwesomeIcon
								icon={faGithub}
								className="socialIcon"
								size="2x"
								style={{ color: "#000" }}
							/>
						</a>
						&nbsp; &nbsp;
					</div>

					<div style={{}} className="profileStyles">
						<p style={{ margin: "5px" }}>
							<a
								href="tel:+2348108405421"
								style={{ textDecoration: "none" }}
								className="conStyle"
							>
								<FontAwesomeIcon
									icon={faPhone}
									className="socialIcon b"
									size="lg"
								/>
								&nbsp; +234 8108405421
							</a>
						</p>

						<p style={{ margin: "5px" }}>
							<a
								href="mailto:soloyaks.sy@gmail.com"
								style={{ textDecoration: "none" }}
								className="conStyle"
							>
								<FontAwesomeIcon
									icon={faEnvelope}
									className="socialIcon b"
									size="lg"
								/>
								&nbsp; soloyaks.sy@gmail.com
							</a>
						</p>
						<p style={{ margin: "5px" }}>
							<FontAwesomeIcon
								icon={faMapMarker}
								className="socialIcon b"
								size="lg"
							/>
							&nbsp;{" "}
							<b className="conStyle" style={{ fontWeight: "200" }}>
								FCT, Nigeria.
							</b>
						</p>
					</div>
				</div>
			</VizSensor>
			<div className="contentDiv">
				<div className="divCon" style={{}}>
					<VizSensor
						partialVisibility
						onChange={(isVisible) => {
							setAboutShow(isVisible);
						}}
					>
						<div
							style={{
								paddingBottom: "10px",
							}}
							className="aboutP"
						>
							<div
								style={{
									borderBottomStyle: "solid",

									padding: "none",
								}}
								className="aboutStyles"
							>
								About Me
							</div>
							<p style={{ textAlign: "center" }}>
								I am a creative full-stack web developer and a Computer
								Engineering undergraduate. i have a great passion for software
								development and programming. i am proficient in Javascript and
								it's libraries/frameworks such as ReactJs, JQuery,
								Node.js/Expressjs etc. I am also knowledgeable with backend
								technologies like MYSQL and MongoDB. I offer 2 years of
								development experience. I learn fast and easily adapt to new
								technologies. I do not believe in failure, I always work hard to
								meet my goals.
							</p>
						</div>
					</VizSensor>
				</div>

				<p style={{ padding: "5px" }}></p>

				<div className="divCon" style={{}}>
					<div className="mySkill" style={{ paddingBottom: "15px" }}>
						<VizSensor
							partialVisibility
							onChange={(isVisible) => {
								setSkillShow(isVisible);
							}}
						>
							<Skills />
						</VizSensor>
					</div>
				</div>
				<p style={{ padding: "5px" }}></p>
				<div className="divCon" style={{}}>
					<div className="contact" style={{ paddingBottom: "15px" }}>
						<VizSensor
							partialVisibility
							onChange={(isVisible) => {
								setContactShow(isVisible);
							}}
						>
							<Contact />
						</VizSensor>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Content;
