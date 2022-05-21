import React, { Component } from "react";

import "./ContinuousAppearance.scss";

export default class ContinuousAppearance extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { text, initialDelay, speed, timing } = this.props;

		return (
			<div className="ContinuousAppearance">
				<div className="Container">
					{text.split("").map((content, index) => (
						<span
							key={index}
							className="Content"
							style={{
								animation:
									"continuousAppearance " +
									timing +
									"s ease-in forwards",
								animationDelay:
									initialDelay + index * speed + "s",
							}}
						>
							{content}
						</span>
					))}
				</div>
			</div>
		);
	}
}
