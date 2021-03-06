import React, { useState } from "react";
import "../App.css";

const Contact = () => {
	const [state, setState] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch("http://localhost:3002/send", {
			method: "POST",
			body: JSON.stringify(state),
			headers: {
				Accept: "application.json",
				"Content-Type": "application/json",
			},
		}).then((response) =>
			response.json().then((response) => {
				if (response.status === "success") {
					alert("Message Sent.");
					resetForm();
				} else if (response.status === "fail") {
					alert("message not sent.");
				}
			}),
		);
	};
	const resetForm = () => {
		setState({ name: "", email: "", message: "" });
	};
	const onNameChange = (e) => {
		setState((prevState) => {
			return {
				...prevState,
				name: e,
			};
		});
	};
	const onEmailChange = (e) => {
		setState((prevState) => {
			return {
				...prevState,
				email: e,
			};
		});
	};
	const onMessageChange = (e) => {
		setState((prevState) => {
			return {
				...prevState,
				message: e,
			};
		});
	};

	return (
		<React.Fragment>
			<div style={{}} className="aboutP">
				<div
					style={{
						borderBottomStyle: "solid",

						padding: "none",
					}}
					className="aboutStyles"
				>
					Contact Me
				</div>
			</div>
			<form
				id="contact-form"
				onSubmit={handleSubmit.bind(this)}
				method="POST"
				className="form"
			>
				<div className="formItem">
					<label htmlFor="name" className="label">
						Name
					</label>
					<input
						type="text"
						className="formInput details"
						placeholder="John Doe"
						onChange={(e) => onNameChange(e.target.value)}
						required
					/>
				</div>
				<div className="formItem">
					<label htmlFor="email" className="label">
						Email
					</label>
					<input
						type="email"
						className="formInput details"
						aria-describedby="emailHelp"
						placeholder="example@gmail.com"
						value={state.email}
						onChange={(e) => onEmailChange(e.target.value)}
						required
					/>
				</div>
				<div className="formItem">
					<label htmlFor="message" className="label">
						Message
					</label>
					<textarea
						className="formInput message"
						rows="5"
						value={state.message}
						onChange={(e) => onMessageChange(e.target.value)}
						required
					/>
				</div>
				<div className="formItem">
					<button type="submit" className="btnSubmit">
						Send Email
					</button>
				</div>
			</form>
		</React.Fragment>
	);
};

export default Contact;
