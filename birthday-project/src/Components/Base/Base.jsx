import React, { Component } from "react";
import "./Base.scss";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";

export default class Base extends Component {
	render() {
		return (
			<div className="Base">
				<Header />
				<Main />
				<Footer />
			</div>
		);
	}
}
