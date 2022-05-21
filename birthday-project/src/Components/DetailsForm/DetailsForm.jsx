import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { Component } from "react";

import "./DetailsForm.scss";

export default class DetailsForm extends Component {
	secrets = [
		"love",
		"friendship",
		"motivation",
		"sword",
		"shield",
		"bow",
		"spear",
		"gun",
		"brain",
		"brawn",
		"legacy",
		"honour",
		"honest",
		"strength",
		"speed",
		"luck",
		"agility",
		"superior",
		"loyal",
		"brave",
		"true",
	];

	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			secret: this.secrets[Date.now() % this.secrets.length],
			disable: false,
			submited: false,
		};
	}

	submitting = () => {
		const { name, email, secret } = this.state;

		if (!name) {
			return;
		}
		if (!email) {
			return;
		}
		if (!secret) {
			return;
		}

		var bodyFormData = new FormData();
		bodyFormData.append("name", name);
		bodyFormData.append("email", email);
		bodyFormData.append("secret", secret);
		axios({
			method: "post",
			url: "https://backend.sahaj-bamba.tech/submit.php",
			data: bodyFormData,
			headers: { "Content-Type": "multipart/form-data" },
		})
			.then((response) => {
				console.log(response);
				this.setState({
					submited: true,
				});
			})
			.catch((response) => {
				console.log(response);
				this.setState({
					submited: true,
					name: "",
					email: "",
					disable: true,
				});
			});
	};

	render() {
		const { name, email, submited, disable, secret } = this.state;

		return (
			<div className="DetailsFormContainer">
				<div className="DetailsForm">
					<TextField
						required
						id="outlined-required"
						label="Name"
						value={name}
						onChange={(event) =>
							this.setState({
								name: event.target.value,
							})
						}
					/>
					<br />
					<br />
					<TextField
						required
						id="outlined-required"
						label="Email"
						value={email}
						onChange={(event) =>
							this.setState({
								email: event.target.value,
							})
						}
					/>
					<br />
					<br />
					<Button
						className="Buttons"
						variant="contained"
						color="success"
						onClick={() => this.submitting()}
						disabled={disable}
					>
						Submit
					</Button>
					<br />
					<br />
					{submited && (
						<div>
							Your secret word is {secret}.
							<br />
							If you have come this far ping me your secret word.
						</div>
					)}
				</div>
			</div>
		);
	}
}
