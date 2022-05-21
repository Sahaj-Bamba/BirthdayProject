import React, { Component } from "react";
import ContinuousAppearance from "../TextEffects/ContinuousAppearance/ContinuousAppearance";
import HorizontalFlow from "../TextEffects/HorizontalFlow/HorizontalFlow";

import Button from "@mui/material/Button";

import "./Main.scss";
import Quiz from "../Quiz/Quiz";

export default class Main extends Component {
	noMessage = [
		"Nope, not me ",
		"Still nope",
		"Pity card ! Nice try But Nope",
		"Nevveeerrrrrr !!!",
	];

	emojis = [
		{
			emoji: "🙋‍♂️",
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
			noPressed: false,
			stage: 0,
			noStage: 0,
			activeElement: 0,
			noDisabled: false,
			emojiIndex: 0,
			subStage: 0,
		};
	}

	pressedButtonClick = () => {
		const { stage } = this.state;
		this.setState({ stage: stage + 1, noPressed: false });
	};

	pressedSwitch = () => {
		const { stage } = this.state;
		switch (stage) {
			case 0:
				return (
					<div className="Stage0">
						<ContinuousAppearance
							text="Hello World !!!☺️☺️"
							initialDelay={0.2}
							speed={0.2}
							timing={0.5}
						/>
						<HorizontalFlow
							text="I am Sahaj"
							initialDelay={3.5}
							speed={0.3}
							timing={0.4}
						/>
						<ContinuousAppearance
							text="&..."
							initialDelay={7}
							speed={0.3}
							timing={1}
						/>
						<HorizontalFlow
							text="today is my birthday"
							initialDelay={8}
							speed={0.2}
							timing={0.5}
						/>
						<ContinuousAppearance
							text="Thankyou !🥳🥳!"
							initialDelay={13}
							speed={0.4}
							timing={0.6}
						/>
						<ContinuousAppearance
							text="Thankyou !🥳🥳!"
							initialDelay={13}
							speed={0.4}
							timing={0.6}
						/>
						<HorizontalFlow
							text="Lets proceed with the project now"
							initialDelay={19}
							speed={0.2}
							timing={0.6}
						/>
						<ContinuousAppearance
							text="Hope you enjoy !!"
							initialDelay={27}
							speed={0.3}
							timing={0.6}
						/>
					</div>
				);
			case 1:
				if (!this.emojis[this.state.emojiIndex].activated) {
					setTimeout(() => {
						this.setState({
							emojiIndex: this.state.emojiIndex + 1,
						});
					}, this.emojis[this.state.emojiIndex].time * 1000);
					this.emojis[this.state.emojiIndex].activated = true;
				}

				return (
					<div className="Stage1 BgColorChanger">
						<div className="Emoji">
							{this.emojis[this.state.emojiIndex].emoji}
						</div>
						{this.subStageSwitch()}
					</div>
				);
			case 2:
				return <Quiz />;
			default:
				return <></>;
		}
	};

	subStageSwitch = () => {
		const { subStage } = this.state;
		switch (subStage) {
			case 0:
				setTimeout(
					() =>
						this.setState({
							subStage: 1,
						}),
					22000
				);
				return (
					<div className="Stage0">
						<ContinuousAppearance
							text="Hello Adventurer !!!"
							initialDelay={0.2}
							speed={0.2}
							timing={0.5}
						/>
						<HorizontalFlow
							text="Welcome to ."
							initialDelay={4}
							speed={0.3}
							timing={0.4}
						/>
						<ContinuousAppearance
							text="umm ... "
							initialDelay={6.6}
							speed={0.3}
							timing={1}
						/>
						<ContinuousAppearance
							text="much better"
							initialDelay={18}
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
					28000
				);
				return (
					<div className="Stage0">
						<HorizontalFlow
							text="Welcome to my project."
							initialDelay={0.2}
							speed={0.2}
							timing={0.5}
						/>
						<ContinuousAppearance
							text="This project is only for "
							initialDelay={5}
							speed={0.3}
							timing={0.4}
						/>
						<HorizontalFlow
							text="Sahaj's close friends."
							initialDelay={12}
							speed={0.2}
							timing={1}
						/>
						<HorizontalFlow
							text="Which means ..."
							initialDelay={18}
							speed={0.3}
							timing={1}
						/>
						<HorizontalFlow
							text="⚡POP QUIZ⚡"
							initialDelay={23}
							speed={0.3}
							timing={1}
						/>
					</div>
				);
			default:
				return <></>;
		}
	};

	NoPressedButtonClick = () => {
		const { noStage } = this.state;
		if (noStage === 3) {
			return;
		}
		this.setState({ noStage: noStage + 1, noPressed: true });
	};

	noPressedSwitch = () => {
		const { noStage } = this.state;
		switch (noStage) {
			case 1:
				return (
					<div className="NoStage Stage0">
						<ContinuousAppearance
							text="Heeyyy !!! 😠"
							initialDelay={0.1}
							speed={0.2}
							timing={0.5}
						/>
						<HorizontalFlow
							text="Thats rude !! "
							initialDelay={3}
							speed={0.25}
							timing={0.4}
						/>
						<HorizontalFlow
							text="Atleast checkout what I have prepared."
							initialDelay={8}
							speed={0.3}
							timing={0.4}
						/>
					</div>
				);
			case 2:
				return (
					<div className="NoStage2 Stage0">
						<HorizontalFlow
							text="Pleeasseeee !!! "
							initialDelay={0.1}
							speed={0.2}
							timing={0.5}
						/>
						<ContinuousAppearance
							text="Its my Birthday."
							initialDelay={3.5}
							speed={0.3}
							timing={0.4}
						/>
						<ContinuousAppearance
							text="PLEASE !!!!!!!"
							initialDelay={9}
							speed={0.3}
							timing={0.4}
						/>
					</div>
				);
			case 3:
				setTimeout(() => this.setState({ noDisabled: true }), 28000);
				return (
					<div className="NoStage3 Stage0">
						<ContinuousAppearance
							text="You Leave Me No Choice"
							initialDelay={0.2}
							speed={0.2}
							timing={0.5}
						/>
						<HorizontalFlow
							text="With the power vested to me by javascript"
							initialDelay={4.5}
							speed={0.15}
							timing={0.4}
						/>
						<HorizontalFlow
							text="I command the forces to bend to my will"
							initialDelay={11.5}
							speed={0.22}
							timing={0.4}
						/>
						<ContinuousAppearance
							text="Ultimate Skill"
							initialDelay={20}
							speed={0.2}
							timing={0.5}
						/>
						<HorizontalFlow
							text="⚡⚡DISABLE⚡⚡"
							initialDelay={22}
							speed={0.5}
							timing={1}
						/>
						<ContinuousAppearance
							text="Now Continue 😡😡"
							initialDelay={29}
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
		const { stage, noPressed, noStage, noDisabled } = this.state;
		return (
			<div className="Main">
				{stage === 0 && noPressed && this.noPressedSwitch()}
				{!noPressed && this.pressedSwitch()}
				{stage === 0 && (
					<div className="Stage0Buttons">
						<Button
							className="Buttons"
							variant="contained"
							color="success"
							onClick={() => this.pressedButtonClick()}
						>
							Lets Go Yaaayy !!!
						</Button>
						<Button
							className="Buttons"
							variant="contained"
							color="error"
							onClick={() => this.NoPressedButtonClick()}
							disabled={noDisabled}
						>
							{this.noMessage[noStage]}
						</Button>
					</div>
				)}
			</div>
		);
	}
}
