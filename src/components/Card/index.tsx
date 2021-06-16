import React from "react";
import "./index.scss";
import classNames, { Argument as ClassesArgument } from "classnames";

export interface CardProps {
	title?: string;
	noPadding?: boolean;
	classes?: ClassesArgument;
}

const Card: React.FC<CardProps> = (props) => {
	const { classes, noPadding = false } = props;
	const modifiers = classNames({ "card--no-padding": noPadding }, classes);
	return (
		<div className={`card ${modifiers}`}>
			{props.title && <div className={"card__head"}>{props.title}</div>}
			<div className={"card__body"}>{props.children}</div>
		</div>
	);
};

export { Card };
