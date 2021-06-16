import React from "react";
import { Main as Component } from ".";
import { Header } from "../Header/index.stories";

export default {
	title: "Blocks / Main",
	component: Component,
};

export const Main = () => <Component />;
Main.parameters = {
	layout: "fullscreen",
};
