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
							className="Content"
							style={{
								animationDelay:
									initialDelay + index * speed + "s",
								animation:
									"continuousAppearance " +
									timing +
									"s ease forwards",
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
