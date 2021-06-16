import React from "react";
import "./index.scss";

export interface CardProps {
	title?: string;
	className?: string;
}

const Card: React.FC<CardProps> = (props) => {
	const { className = "" } = props;
	return (
		<div className={`card ${className}`}>
			{props.title && <div className={"card__head"}>{props.title}</div>}
			<div className={"card__body"}>{props.children}</div>
		</div>
	);
};

export { Card };
