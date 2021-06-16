import React from "react";
import logoImage from "../../assets/images/hd-logo-inline.png";
import logoImage2 from "../../assets/images/hd-logo-inline@2x.png";
import logoImage3 from "../../assets/images/hd-logo-inline@3x.png";
import "./index.scss";

export interface NavProps {}

const Nav: React.FC<NavProps> = (props) => {
	return (
		<nav>
			<img
				src={logoImage}
				srcSet={`${logoImage}, ${logoImage2} 2x, ${logoImage3} 3x`}
				alt={"Hastings Direct logo"}
			/>
		</nav>
	);
};

export { Nav };
