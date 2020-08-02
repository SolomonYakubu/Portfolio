import React, { useState } from "react";
import "../App.css";
import Options from "./Options";
import TypingEffect from "react-typing-effect";
import { scroller } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faTwitter,
	faGithub,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
//import { Line } from "rc-progress";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
const Skills = () => {
	return (
		<div>
			<div style={{}} className="aboutP">
				<div
					style={{
						borderBottomStyle: "solid",
						borderWidth: "4px",
						width: "auto",
						padding: "none",
					}}
					className="aboutStyles"
				>
					My Skills
				</div>
			</div>
			<br />
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
						borderWidth: "3px",
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
								color: "#60935d",
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
								color: "#60935d",
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
								color: "#60935d",
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
								color: "#60935d",
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
								color: "#60935d",
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
								color: "#60935d",
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
								color: "#60935d",
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
	return (
		<div className="container" style={{}}>
			<Options nav={props.nav} scrollers={props.scrollers} />
			<div className="profile">
				<div className="imgCon">
					<img
						src={require("../images/profile.jpg")}
						style={{
							width: "100px",
							height: "100px",
							borderRadius: "170px",
							borderStyle: "solid",
							borderColor: "#1f2041",
							borderWidth: "3px",
						}}
					/>
				</div>

				<p style={{}} className="intro">
					Hi!&#128075;, I'm{" "}
					<strong
						style={{
							borderColor: "#4b3f72",
							borderWidth: "10px",
							borderBottomStyle: "solid",
							color: "#000",
							paddingLeft: "5px",
							margin: "0",
							borderLeftWidth: "0.9px",
							borderLeftStyle: "solid",
						}}
					>
						Yakubu Solomon
					</strong>
				</p>

				<div style={{}} className="typing">
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

				<div style={{ padding: "8px" }} className="profileStyles">
					<strong className="personalInfo">PERSONAL INFORMATION</strong>

					<p>Birthday: 02 September</p>

					<p>
						PHONE:{" "}
						<a href="tel:+2348108405421" style={{ textDecoration: "none" }}>
							+234 8108405421
						</a>
					</p>

					<p>
						MAIL:{" "}
						<a
							href="mailto:soloyaks.sy@gmail.com"
							style={{ textDecoration: "none" }}
						>
							soloyaks.sy@gmail.com
						</a>
					</p>
					<p>Location: FCT Nigeria</p>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						width: "auto",
						paddingBottom: "20px",
					}}
				>
					<a href="http://www.facebook.com/solomon.yakubu.313">
						<FontAwesomeIcon
							icon={faFacebook}
							className="socialIcon"
							size="lg"
						/>
					</a>
					&nbsp; &nbsp;
					<a href="http://www.twitter.com/@King__Solo">
						<FontAwesomeIcon
							icon={faTwitter}
							className="socialIcon"
							size="lg"
						/>
					</a>
					&nbsp; &nbsp;
					<a href="http://www.instagram.com/solomonyakubu34">
						<FontAwesomeIcon
							icon={faInstagram}
							className="socialIcon"
							size="lg"
						/>
					</a>
					&nbsp; &nbsp;
					<a href="http://www.github.com/Solomon-Yakubu">
						<FontAwesomeIcon icon={faGithub} className="socialIcon" size="lg" />
					</a>
					&nbsp; &nbsp;
				</div>
			</div>

			<div className="contentDiv">
				<div className="divCon" style={{}}>
					<div style={{ paddingBottom: "10px" }} className="aboutP">
						<div
							style={{
								borderBottomStyle: "solid",
								borderWidth: "4px",
								width: "auto",
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
				</div>

				<p style={{ padding: "5px" }}></p>

				<div className="divCon" style={{}}>
					<div className="mySkill" style={{ paddingBottom: "15px" }}>
						<Skills />
					</div>
				</div>
				<br />
			</div>
		</div>
	);
}

export default Content;
