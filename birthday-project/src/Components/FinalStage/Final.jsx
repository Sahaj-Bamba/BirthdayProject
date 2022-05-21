import React, { Component } from "react";
import ContinuousAppearance from "../TextEffects/ContinuousAppearance/ContinuousAppearance";
import HorizontalFlow from "../TextEffects/HorizontalFlow/HorizontalFlow";

export default class Final extends Component {
	emojis = [
		{
			emoji: "🥳",
			time: "4.6",
		},
		{
			emoji: "😊",
			time: "3",
		},
		{
			emoji: "🤔",
			time: "1.4",
		},
		{
			emoji: "🤖",
			time: "10",
		},
		{
			emoji: "😁",
			time: "3",
		},
		{
			emoji: "😊",
			time: "5",
		},
		{
			emoji: "🤫",
			time: "7",
		},
		{
			emoji: "🤫",
			time: "6",
		},
		{
			emoji: "😕",
			time: "5",
		},
		{
			emoji: "😜",
			time: "5",
		},
		{
			emoji: "😁",
			time: "100000000",
		},
	];

	constructor(props) {
		super(props);
		this.state = {
			stage: 0,
			emojiIndex: 0,
		};
	}

	nextCalled = false;

	stageSwitch = () => {
		const { stage } = this.state;
		switch (stage) {
			case 0:
				setTimeout(
					() =>
						this.setState({
							stage: 1,
						}),
					22000
				);
				return (
					<div className="Stage0">
						<ContinuousAppearance
							text="Congrats !!!"
							initialDelay={0.2}
							speed={0.2}
							timing={0.5}
						/>
						<HorizontalFlow
							text="You are now officially part of"
							initialDelay={4}
							speed={0.3}
							timing={0.4}
						/>
						<ContinuousAppearance
							text="Sahaj's close friends list "
							initialDelay={6.6}
							speed={0.3}
							timing={1}
						/>
					</div>
				);
			case 1:
				setTimeout(
					() =>
						this.setState({
							stage: 2,
						}),
					25000
				);
				return (
					<div className="Stage0">
						<HorizontalFlow
							text="You are still here ?"
							initialDelay={0.2}
							speed={0.2}
							timing={0.5}
						/>
						<ContinuousAppearance
							text="Its quite unusual"
							initialDelay={4}
							speed={0.3}
							timing={0.4}
						/>
						<HorizontalFlow
							text="This has never happened before"
							initialDelay={6.6}
							speed={0.3}
							timing={1}
						/>
						<ContinuousAppearance
							text="You survived through all those messages"
							initialDelay={4}
							speed={0.3}
							timing={0.4}
						/>
						<ContinuousAppearance
							text="And that weird quiz"
							initialDelay={4}
							speed={0.3}
							timing={0.4}
						/>
						<HorizontalFlow
							text="And you still want more"
							initialDelay={6.6}
							speed={0.3}
							timing={1}
						/>
					</div>
				);
			case 2:
				if (!this.nextCalled) {
					setTimeout(() => {
						this.nextCalled = true;
						this.props.nextStage();
					}, 25000);
				}
				return (
					<div className="Stage0">
						<ContinuousAppearance
							text="Maybe I underestimated my friends"
							initialDelay={0.2}
							speed={0.2}
							timing={0.5}
						/>
						<HorizontalFlow
							text="I thought no one would stay till the end"
							initialDelay={4}
							speed={0.3}
							timing={0.4}
						/>
						<ContinuousAppearance
							text="But here you are living proof"
							initialDelay={6.6}
							speed={0.3}
							timing={1}
						/>
						<HorizontalFlow
							text="That I am not that bad"
							initialDelay={4}
							speed={0.3}
							timing={0.4}
						/>
						<HorizontalFlow
							text="Up for some more ?"
							initialDelay={4}
							speed={0.3}
							timing={0.4}
						/>
						<ContinuousAppearance
							text="Why not give me your mailId and "
							initialDelay={6.6}
							speed={0.3}
							timing={1}
						/>
						<HorizontalFlow
							text="I will ping you whenever I prepare something new."
							initialDelay={4}
							speed={0.3}
							timing={0.4}
						/>
					</div>
				);
			default:
				return <></>;
		}
	};

	render() {
		if (!this.emojis[this.state.emojiIndex].activated) {
			setTimeout(() => {
				this.setState({
					emojiIndex: this.state.emojiIndex + 1,
				});
			}, this.emojis[this.state.emojiIndex].time * 1000);
			this.emojis[this.state.emojiIndex].activated = true;
		}

		return (
			<div className="Stage1">
				<div className="Emoji">
					{this.emojis[this.state.emojiIndex].emoji}
				</div>
				{this.stageSwitch()}
			</div>
		);
	}
}
