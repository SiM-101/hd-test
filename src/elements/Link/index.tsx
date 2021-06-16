import React from "react";
import classNames from "classnames";
import "./index.scss"

export interface LinkProps {
	href?: string;
	light?: boolean;
	inline?: boolean;
}

const Link: React.FC<LinkProps> = (props) => {
	const { href = "#", light = false, inline = false } = props;
	const modifiers = classNames({ "link--light": light });

	const anchor = (
		<a className={`link ${modifiers}`} href={href}>
			{props.children}
		</a>
	);

	return inline ? anchor : <div className={"link--block"}>{anchor}</div>;
};

export { Link };
