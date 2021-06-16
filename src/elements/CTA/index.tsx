import classNames from "classnames";
import React from "react";
import "./index.scss";

export interface CTAProps {
	fill?: boolean;
}

const CTA: React.FC<CTAProps> = (props) => {
	const modifiers = classNames({ "cta--fill": props.fill });
	return <button className={`cta ${modifiers}`}>{props.children}</button>;
};

export { CTA };
