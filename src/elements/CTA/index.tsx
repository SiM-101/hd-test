import classNames, { Argument as ClassesArgument } from "classnames";
import React from "react";
import "./index.scss";

export interface CTAProps {
	fill?: boolean;
	classes?: ClassesArgument;
}

const CTA: React.FC<CTAProps> = (props) => {
	const { classes = [] } = props;
	const modifiers = classNames({ "cta--fill": props.fill }, classes);
	return <button className={`cta ${modifiers}`}>{props.children}</button>;
};

export { CTA };
