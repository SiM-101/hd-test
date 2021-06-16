import React from "react";
import { Sidebar } from "./Sidebar";
import { Content } from "./Content";
import "./index.scss";

export interface MainProps {}

const Main: React.FC<MainProps> = (props) => {
	return (
		<main className={"container"}>
			<Content />
			<Sidebar />
		</main>
	);
};

export { Main };
