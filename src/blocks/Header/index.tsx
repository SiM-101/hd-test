import React from "react";
import "./index.scss";

import sofaMobileImage from "../../assets/images/mobile/family-on-sofa.jpg";
import sofaMobileImage2 from "../../assets/images/mobile/family-on-sofa@2x.jpg";
import sofaMobileImage3 from "../../assets/images/mobile/family-on-sofa@3x.jpg";
import sofaDesktopImage from "../../assets/images/desktop/family-on-sofa.jpg";
import sofaDesktopImage2 from "../../assets/images/desktop/family-on-sofa@2x.jpg";
import sofaDesktopImage3 from "../../assets/images/desktop/family-on-sofa@3x.jpg";
import infoImage from "../../assets/icons/info.svg";
import { CTA } from "../../elements/CTA";
import { Link } from "../../elements/Link";
import { Card } from "../../components/Card";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = (props) => {
	return (
		<header className={"header"}>
			<div className={"container"}>
				<div className={"header__alert"}>
					<img src={infoImage} alt={"Information"} />
					Affected by Coronavirus? <br className={"sm"} />
					<Link inline light>
						Get help online
					</Link>{" "}
					or make changes via the app or{" "}
					<Link inline light>
						MyAccount
					</Link>
				</div>
				<Card noPadding>
					<div className={"header__card"}>
						<div className={"header__description"}>
							<h1>Home insurance</h1>
							<p>
								At Hastings Direct, we know how important your home and its contents
								are to you. That's why we offer home insurance that covers you for
								the unexpected expense that theft, loss and damage can bring.
							</p>
							<div>
								<CTA classes={"lg"}>Get a home insurance quote</CTA>
								<CTA fill classes={"sm"}>
									Get a home quote
								</CTA>
							</div>
							<div>
								<Link classes={"lg"}>Retrieve your home insurance quote</Link>
								<Link classes={"sm"}>Retrieve your home quote</Link>
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
				</Card>
			</div>
		</header>
	);
};

export { Header };
