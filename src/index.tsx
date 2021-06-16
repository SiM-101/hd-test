import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { Nav } from "./components/Nav";
import { Header } from "./components/Header";

ReactDOM.render(
	<>
		<Nav />
		<Header />
	</>,
	document.getElementById("root")
);
