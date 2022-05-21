import React, { Component } from "react";
import ContinuousAppearance from "../TextEffects/ContinuousAppearance/ContinuousAppearance";
import HorizontalFlow from "../TextEffects/HorizontalFlow/HorizontalFlow";

import "./Quiz.scss";

export default class Quiz extends Component {
	emojis = [
		{
			emoji: "🙂",
		},
		{
			emoji: "😁",
		},
		{
			emoji: "🤤",
		},
		{
			emoji: "🤯",
		},
	];

	answered = {};

	answerSuccessText = [
		[
			"East where everyone feast.",
			"West no time to rest.",
			"Now if we just had a compass.",
			"Go North if things ever go South.",
		],
		[
			"Yummmmyyyyyy.",
			"Yum ! Yum ! Yum !",
			"I am radio-active",
			"It will do",
		],
	];

	nextQuestionDelay = [7, 7];

	constructor(props) {
		super(props);
		this.state = {
			emojiIndex: 0,
			questionNumber: 0,
			answerNumber: 0,
		};
	}

	answering = (questionNumber, answerNumber) => {
		if (this.answered[questionNumber]) {
			return;
		}
		this.answered[questionNumber] = true;
		setTimeout(() => {
			if (this.state.questionNumber === 1) {
				this.props.nextStage();
				return;
			}
			this.setState({
				questionNumber: this.state.questionNumber + 1,
				emojiIndex: this.state.emojiIndex + 1,
			});
		}, this.nextQuestionDelay[this.state.questionNumber] * 1000);
		this.setState({
			emojiIndex: this.state.emojiIndex + 1,
			answerNumber: answerNumber,
		});
	};

	quizPannelSwitch = () => {
		const { questionNumber } = this.state;
		switch (questionNumber) {
			case 0:
				return (
					<div className="QuizPannel">
						<div className="Question">
							Q1) Which direction would you go ?
							<br />
						</div>
						<div className="Options">
							<br />
							<div
								className="Option"
								onClick={() => {
									this.answering(0, 0);
								}}
								style={{ background: "#6060f3" }}
							>
								1) East
							</div>
							<br />
							<div
								className="Option"
								onClick={() => {
									this.answering(0, 1);
								}}
								style={{ background: "#f36060" }}
							>
								2) West
							</div>
							<br />
							<div
								className="Option"
								onClick={() => {
									this.answering(0, 2);
								}}
								style={{ background: "#9ff360" }}
							>
								3) North
							</div>
							<br />
							<div
								className="Option"
								onClick={() => {
									this.answering(0, 3);
								}}
								style={{ background: "#60f3b6" }}
							>
								4) South
							</div>
							<br />
						</div>
					</div>
				);
			case 1:
				return (
					<div className="QuizPannel">
						<div className="Question">
							Q2) What would you eat?
							<br />
						</div>
						<div className="Options">
							<br />
							<div
								className="Option"
								onClick={() => {
									this.answering(1, 0);
								}}
								style={{ background: "#6060f3" }}
							>
								1) Pizza
							</div>
							<br />
							<div
								className="Option"
								onClick={() => {
									this.answering(1, 1);
								}}
								style={{ background: "#f36060" }}
							>
								2) Burger
							</div>
							<br />
							<div
								className="Option"
								onClick={() => {
									this.answering(1, 2);
								}}
								style={{ background: "#9ff360" }}
							>
								3) Uranium
							</div>
							<br />
							<div
								className="Option"
								onClick={() => {
									this.answering(1, 3);
								}}
								style={{ background: "#60f3b6" }}
							>
								4) Fries
							</div>
							<br />
						</div>
					</div>
				);
			default:
				return <></>;
		}
	};

	emojiTextPannelSwitch = () => {
		const { emojiIndex } = this.state;
		switch (emojiIndex) {
			case 0:
				return (
					<div className="Stage0">
						<ContinuousAppearance
							text="Nice Question"
							initialDelay={0.2}
							speed={0.2}
							timing={0.5}
						/>
						<HorizontalFlow
							text="Now where would Sahaj go ??"
							initialDelay={4}
							speed={0.3}
							timing={0.4}
						/>
						<ContinuousAppearance
							text="umm ... "
							initialDelay={10}
							speed={0.3}
							timing={1}
						/>
					</div>
				);
			case 1:
				return (
					<div className="Stage0">
						<HorizontalFlow
							text={
								this.answerSuccessText[0][
									this.state.answerNumber
								]
							}
							initialDelay={0.2}
							speed={0.2}
							timing={0.5}
						/>
					</div>
				);
			case 2:
				return (
					<div className="Stage0">
						<ContinuousAppearance
							text="All this is making me hungry"
							initialDelay={0.2}
							speed={0.2}
							timing={0.5}
						/>
					</div>
				);
			case 3:
				return (
					<div className="Stage0">
						<HorizontalFlow
							text={
								this.answerSuccessText[1][
									this.state.answerNumber
								]
							}
							initialDelay={0.2}
							speed={0.2}
							timing={0.5}
						/>
					</div>
				);
			default:
				return <></>;
		}
	};

	render() {
		return (
			<div className="Quiz">
				{this.quizPannelSwitch()}
				<div className="EmojiPannel">
					<div className="Emoji">
						{this.emojis[this.state.emojiIndex].emoji}
					</div>
					{this.emojiTextPannelSwitch()}
				</div>
			</div>
		);
	}
}
