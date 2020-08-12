const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const cors = require("cors");
const creds = require("./config");
var transport = {
	service: "gmail",
	host: "smtp.gmail.com",
	port: 465,
	secure: false,
	auth: {
		user: creds.USER,
		pass: creds.PASS,
	},
};
var transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
	if (error) {
		console.log(error);
	} else {
		console.log("server is ready");
	}
});
router.post("/send", (req, res, next) => {
	var name = req.body.name;
	var email = req.body.email;
	var message = req.body.message;
	var content = `name:${name}\nemail:${email}\nmessage:${message}`;

	var mail = {
		from: name,
		to: "soloyaks.sy@gmail.com",
		subject: "New message from website",
		text: content,
	};
	transporter.sendMail(mail, (err, data) => {
		if (err) {
			res.json({ status: "fail" });
		} else {
			res.json({
				status: "success",
			});
		}
	});
});
const app = express();
const port = process.env.PORT || 3002;
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(port);
