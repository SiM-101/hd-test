import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { Nav } from "./blocks/Nav";
import { Header } from "./blocks/Header";
import { Main } from "./blocks/Main";
import { Footer } from "./blocks/Footer";
import { ChatWidget } from "./components/ChatWidget";

ReactDOM.render(
	<>
		<Nav />
		<Header />
		<Main />
		<Footer />
		<ChatWidget />
	</>,
	document.getElementById("root")
);
