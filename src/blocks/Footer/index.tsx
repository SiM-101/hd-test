import React from "react";
import { Link } from "../../elements/Link";
import "./index.scss";
import twitterImage from "../../assets/icons/twitter-circle.svg";
import facebookImage from "../../assets/icons/facebook-circle.svg";
import youtubeImage from "../../assets/icons/youtube-circle.svg";

export interface FooterProps {}

const Footer: React.FC<FooterProps> = (props) => {
	return (
		<footer className={"footer"}>
			<div className={"container"}>
				<div className={"footer__body"}>
					<div className={"footer__links"}>
						<div className={"footer__links__list"}>
							<h2>Insurance</h2>
							<Link light>Car insurance</Link>
							<Link light>Van insurance</Link>
							<Link light>Bike insurance</Link>
							<Link light>Home insurance</Link>
							<Link light>Multi car insurance</Link>
							<Link light>Telematics insurance</Link>
						</div>
						<div className={"footer__links__list"}>
							<h2>Insurance</h2>
							<Link light>Car insurance</Link>
							<Link light>Van insurance</Link>
							<Link light>Bike insurance</Link>
							<Link light>Home insurance</Link>
							<Link light>Multi car insurance</Link>
							<Link light>Telematics insurance</Link>
						</div>
						<div className={"footer__links__list"}>
							<h2>Insurance</h2>
							<Link light>Car insurance</Link>
							<Link light>Van insurance</Link>
							<Link light>Bike insurance</Link>
							<Link light>Home insurance</Link>
							<Link light>Multi car insurance</Link>
							<Link light>Telematics insurance</Link>
						</div>
						<div className={"footer__links__list"}>
							<h2>Insurance</h2>
							<Link light>Car insurance</Link>
							<Link light>Van insurance</Link>
							<Link light>Bike insurance</Link>
							<Link light>Home insurance</Link>
							<Link light>Multi car insurance</Link>
							<Link light>Telematics insurance</Link>
						</div>
					</div>
					<div className={"footer__media-links"}>
						<img alt={"Facebook logo"} src={facebookImage} />
						<img alt={"Youtube logo"} src={youtubeImage} />
						<img alt={"Twitter logo"} src={twitterImage} />
					</div>
				</div>

				<div className={"footer__disclaimers"}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>

					<p>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
						doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
						veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
						ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
						consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
						porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
						adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
						dolore magnam aliquam quaerat voluptatem.
					</p>
				</div>
				<div className={"footer__copyright"}>
					&#169; 2021 Hastings Insurance Services Limited <a href={"#"}>Privacy notice</a>
				</div>
			</div>
		</footer>
	);
};

export { Footer };
