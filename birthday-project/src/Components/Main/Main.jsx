import React, { Component } from "react";
import ContinuousAppearance from "../TextEffects/ContinuousAppearance/ContinuousAppearance";
import HorizontalFlow from "../TextEffects/HorizontalFlow/HorizontalFlow";

import "./Main.scss";

export default class Main extends Component {
	elements = [
		{
			element: <ContinuousAppearance text="Hello World !!!" />,
			time: 5,
		},
		{
			element: <HorizontalFlow text="Hello World !!!" />,
			time: 5,
		},
		{
			element: <ContinuousAppearance text="Hello World !!!" />,
			time: 5,
		},
		{
			element: <HorizontalFlow text="Hello World !!!" />,
			time: 5,
		},
		{
			element: <ContinuousAppearance text="Hello World !!!" />,
			time: 5,
		},
		{
			element: <HorizontalFlow text="Hello World !!!" />,
			time: 5,
		},
		{
			element: <ContinuousAppearance text="Hello World !!!" />,
			time: 5,
		},
		{
			element: <HorizontalFlow text="Hello World !!!" />,
			time: 5,
		},
	];

	constructor(props) {
		super(props);
		this.state = {
			activeElement: 0,
		};
	}

	render() {
		return (
			<div className="Main">
				Main
				<ContinuousAppearance
					text="Hello World !!!"
					initialDelay={1}
					speed={0.3}
					timing={0.6}
				/>
				<HorizontalFlow
					text="Hello World !!!"
					initialDelay={5}
					speed={0.3}
					timing={0.6}
				/>
			</div>
		);
	}
}
