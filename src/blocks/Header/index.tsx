import React from "react";
import "./index.scss";

import sofaMobileImage from "../../assets/images/mobile/family-on-sofa.png";
import sofaMobileImage2 from "../../assets/images/mobile/family-on-sofa@2x.png";
import sofaMobileImage3 from "../../assets/images/mobile/family-on-sofa@3x.png";
import sofaDesktopImage from "../../assets/images/desktop/family-on-sofa.png";
import sofaDesktopImage2 from "../../assets/images/desktop/family-on-sofa@2x.png";
import sofaDesktopImage3 from "../../assets/images/desktop/family-on-sofa@3x.png";
import { CTA } from "../../elements/CTA";
import { Link } from "../../elements/Link";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = (props) => {
	return (
		<header className={"header"}>
			<div className={"container"}>
				<div className={"card header__card"}>
					<div className={"header__description"}>
						<h1>Home insurance</h1>
						<p>
							At Hastings Direct, we know how important your home and its contents are
							to you. That's why we offer home insurance that covers you for the
							unexpected expense that theft, loss and damage can bring.
						</p>
						<div>
							{/*<button className={"cta lg"}>Get a home insurance quote</button>*/}
							{/*<button className={"cta cta--fill sm"}>Get a home quote</button>*/}
							<CTA>Get a home insurance quote</CTA>
						</div>
						<div>
							<Link>Retrieve your home insurance quote</Link>
							<a className={"lg link"} href={"#"}>

							</a>
							<a className={"sm link"} href={"#"}>
								Retrieve your home quote
							</a>
						</div>
					</div>
					<div className={"header__picture"}>
						<picture>
							<source
								media="(max-width:780px)"
								srcSet={`${sofaMobileImage}, ${sofaMobileImage2} 2x, ${sofaMobileImage3} 3x`}
								sizes={""}
							/>
							<source
								media="(min-width:780px)"
								srcSet={`${sofaDesktopImage}, ${sofaDesktopImage2} 2x, ${sofaDesktopImage3} 3x`}
							/>
							<img
								src={`${sofaMobileImage}`}
								alt={"Family Enjoying Hastings Direct"}
							/>
						</picture>
					</div>
				</div>
			</div>
		</header>
	);
};

export { Header };
