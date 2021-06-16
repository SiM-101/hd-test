import React from "react";

export default {
	title: "HTML Components",
};

export const Headers = () => (
	<div>
		<h1>Hastings Direct</h1>
		<h2>Hastings Direct</h2>
		<h3>Hastings Direct</h3>
		<h4>Hastings Direct</h4>
		<h5>Hastings Direct</h5>
	</div>
);

export const Container = () => <div className={"container"}>Hello</div>;

export const Link = () => <a className={"link"} href={"#"}>Hello this is a link</a>;
Link.parameters = { layout: "centered" };

export const Card = () => <div className={"card"}>Hello card</div>;
Card.parameters = { layout: "centered" };

export const CTA = () => <button className={"cta"}>Hello CTA</button>;
CTA.parameters = { layout: "centered" };

export const CTAFill = () => <button className={"cta cta--fill"}>Hello CTA</button>;
