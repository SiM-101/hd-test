import React from "react";
import "./index.scss";
import awardImage from "../../../assets/images/award.png";
import { Link } from "../../../elements/Link";
import { Card } from "../../../components/Card";

export interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = (props) => {
	return (
		<aside className={"sidebar"}>
			<Card title={"Info links"}>
				<Link>Contact Us</Link>
				<Link>Cookie policy</Link>
				<Link>Privacy notice</Link>
				<Link>Terms of use</Link>
				<Link>Terms & conditions</Link>
			</Card>
			<Card className={"card sidebar__award"}>
				<h2>Car Insurance Provider of the Year</h2>
				<img width={100} height={100} alt={"Award"} src={awardImage} />
				<div>
					<b>Car insurance provider of the year</b>
				</div>
			</Card>
		</aside>
	);
};

export { Sidebar };
