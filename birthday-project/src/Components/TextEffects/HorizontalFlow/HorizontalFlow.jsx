import React, { Component } from "react";

import "./HorizontalFlow.scss";

export default class HorizontalFlow extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { text, initialDelay, speed, timing } = this.props;

		return (
			<div className="HorizontalFlow">
				<div className="Container">
					{text.split("").map((content, index) => (
						<span
							className="Content"
							style={{
								animationDelay:
									initialDelay + index * speed + "s",
								animation:
									"horizontalFlow " +
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
