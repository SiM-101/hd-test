import React from "react";
import { Header as HeaderComponent } from ".";

export default {
	title: "Blocks / Header",
	component: HeaderComponent,
};

export const Header = () => <HeaderComponent />;
Header.parameters = {
	layout: "fullscreen",
};
