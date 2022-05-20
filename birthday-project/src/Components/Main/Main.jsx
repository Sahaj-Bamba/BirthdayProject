import React, { Component } from "react";
import ContinuousAppearance from "../TextEffects/ContinuousAppearance/ContinuousAppearance";
import HorizontalFlow from "../TextEffects/HorizontalFlow/HorizontalFlow";

import "./Main.scss";

export default class Main extends Component {
	// elements = [
	// 	{
	// 		element: <ContinuousAppearance text="Hello World !!!" />,
	// 		time: 5,
	// 	},
	// 	{
	// 		element: <HorizontalFlow text="Hello World !!!" />,
	// 		time: 5,
	// 	},
	// 	{
	// 		element: <ContinuousAppearance text="Hello World !!!" />,
	// 		time: 5,
	// 	},
	// 	{
	// 		element: <HorizontalFlow text="Hello World !!!" />,
	// 		time: 5,
	// 	},
	// 	{
	// 		element: <ContinuousAppearance text="Hello World !!!" />,
	// 		time: 5,
	// 	},
	// 	{
	// 		element: <HorizontalFlow text="Hello World !!!" />,
	// 		time: 5,
	// 	},
	// 	{
	// 		element: <ContinuousAppearance text="Hello World !!!" />,
	// 		time: 5,
	// 	},
	// 	{
	// 		element: <HorizontalFlow text="Hello World !!!" />,
	// 		time: 5,
	// 	},
	// ];

	constructor(props) {
		super(props);
		this.state = {
			activeElement: 0,
		};
	}

	// setTimeout(
	// 	function () {
	// 		const activeElement = this.state.activeElement;
	// 		console.log(activeElement);
	// 		this.setState({ activeElement: activeElement + 1 });
	// 	}.bind(this),
	// 	this.elements[this.state.activeElement].time * 1000
	// );
	// setTimeout(() => {
	// 	const activeElement = this.state.activeElement;
	// 	console.log(activeElement);
	// 	this.setState({ activeElement: activeElement + 1 });
	// }, this.elements[this.state.activeElement].time * 1000);
	// }

	// componentDidMount() {
	// 	console.log("MountedMain");
	// 	console.log(this.elements[this.state.activeElement].time * 1000);
	// 	setTimeout(() => {
	// 		const activeElement = this.state.activeElement;
	// 		console.log(activeElement);
	// 		this.setState({ activeElement: activeElement + 1 });
	// 	}, this.elements[this.state.activeElement].time * 1000);
	// }

	render() {
		return (
			<div className="Main">
				Main
				<ContinuousAppearance
					text="Hello World !!!"
					initialDelay={1}
					speed={0.5}
					timing={0.5}
				/>
				<HorizontalFlow
					text="Hello World !!!"
					initialDelay={10}
					speed={0.2}
				/>
			</div>
		);
	}
}
