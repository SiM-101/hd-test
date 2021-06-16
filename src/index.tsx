import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { Nav } from "./blocks/Nav";
import { Header } from "./blocks/Header";
import { Main } from "./blocks/Main";

ReactDOM.render(
	<>
		<Nav />
		<Header />
		<Main />
	</>,
	document.getElementById("root")
);
