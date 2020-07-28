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
			<strong style={{}} className="aboutStyles">
				<div
					style={{
						borderBottomStyle: "solid",
						borderWidth: "6px",
						textAlign: "left",
						width: "200px",
						paddingTop: "20px",
					}}
				>
					My Skills
				</div>
			</strong>
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
						color: "#696969",
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
								color: "fuchsia",
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
								color: "fuchsia",
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
								color: "fuchsia",
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
								color: "fuchsia",
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
								color: "fuchsia",
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
								color: "fuchsia",
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
								color: "fuchsia",
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
	// const scrollers = (e) => {
	// 	props.nameSet(e);

	// 	props.scrollSet(true);
	// };
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
				<div
					className="imgCon"
					style={
						{
							// width: "auto",
							// height: "auto",
							// padding: "0px",
							// margin: "0px",
						}
					}
				>
					<img
						src={require("../images/profile.jpg")}
						style={{
							width: "100px",
							height: "100px",
							borderRadius: "100px",
							borderStyle: "solid",
							borderColor: "#898989",
							borderWidth: "3px",
						}}
					/>
				</div>
				{/* <div
					style={{
						width: "auto",
						height: "12px",
						padding: "10px",
						// borderRadius: "10px",
						// boxShadow: "0px 0px 7px 0px #696969",
						textAlign: "center",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				> */}
				<p style={{}} className="intro">
					Hi!&#128075;, I'm{" "}
					<strong
						style={{
							borderColor: "#a6f1a6",
							borderWidth: "8px",
							borderBottomStyle: "solid",
							color: "#a6f1a6",
							paddingLeft: "5px",
							margin: "0",
							borderLeftWidth: "0.5px",
							borderLeftStyle: "solid",
						}}
					>
						Yakubu Solomon
					</strong>
				</p>

				<div
					style={{
						fontSize: "15px",
						fontFamily: "Helvetica,Arial,sans serif",
						// fontWeight: "bold",
						color: "#696969",
					}}
				>
					<TypingEffect
						text={["I'm a Full Stack web developer", "Glad to have you here"]}
						speed={30}
						eraseDelay={2000}
					/>
				</div>

				<p style={{}} className="profileStyles">
					<strong className="personalInfo">PERSONAL INFORMATION</strong>
					<br />
					Birthday: 02 September
					<br />
					PHONE:{" "}
					<a href="tel:+2348108405421" style={{ textDecoration: "none" }}>
						+234 8108405421
					</a>
					<br />
					MAIL:{" "}
					<a
						href="mailto:soloyaks.sy@gmail.com"
						style={{ textDecoration: "none" }}
					>
						soloyaks.sy@gmail.com
					</a>
					<br />
					Location: FCT Nigeria
					<br />
				</p>
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
					&nbsp;
					<a href="http://www.twitter.com/@King__Solo">
						<FontAwesomeIcon
							icon={faTwitter}
							className="socialIcon"
							size="lg"
						/>
					</a>
					&nbsp;
					<a href="http://www.instagram.com/solomonyakubu34">
						<FontAwesomeIcon
							icon={faInstagram}
							className="socialIcon"
							size="lg"
						/>
					</a>
					&nbsp;
					<a href="http://www.github.com/Solomon-Yakubu">
						<FontAwesomeIcon icon={faGithub} className="socialIcon" size="lg" />
					</a>
					&nbsp;
				</div>
			</div>

			<div className="contentDiv">
				<div className="divCon" style={{}}>
					<p style={{}} className="aboutP">
						<strong style={{}} className="aboutStyles">
							<div
								style={{
									borderBottomStyle: "solid",
									borderWidth: "6px",
									width: "200px",
									padding: "none",
								}}
							>
								About Me
							</div>
						</strong>
						<br />I am a motivated and creative self-taught full-stack
						developer. Currently residing at FCT, Nigeria. I am proficient in
						vanilla Javascript and some of it's libraries and frameworks
						including: React Js, React Native, Node.js/ExpresssJs, NextJS e.t.c.
						Aside being a full stack developer, i am also a Computer Engineering
						undergraduate. I offer 2 years of development experience, a strong
						affinity for learning and meeting my goals.
					</p>
				</div>
				<br />
				<br />

				<div className="divCon" style={{}}>
					<div className="mySkill" style={{ paddingBottom: "25px" }}>
						<Skills />
					</div>
				</div>
				<br />
				<div className="divCon" style={{}}></div>
			</div>
		</div>
	);
}

export default Content;
