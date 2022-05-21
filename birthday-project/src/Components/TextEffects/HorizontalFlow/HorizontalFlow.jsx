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
							key={index}
							className="Content"
							style={{
								animation:
									"horizontalFlow " +
									timing +
									"s ease-out forwards",
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
