import React from "react";
import logoImage from "../../../assets/images/hd-logo-wrapped.png";
import logoImage2 from "../../../assets/images/hd-logo-wrapped@2x.png";
import logoImage3 from "../../../assets/images/hd-logo-wrapped@3x.png";
import checkImage from "../../../assets/icons/check_circle.svg";

import "./index.scss";

interface RowProps {
	text: string;
	normal?: boolean;
	premium?: boolean;
}

const Row: React.FC<RowProps> = (props) => {
	const { text, normal = false, premium = false } = props;
	return (
		<tr title={text}>
			<td>{text}</td>
			<td className={"cover-table__check"}>
				{normal && <img alt={"Feature included in Hastings Direct"} src={checkImage} />}
			</td>
			<td className={"cover-table__check"}>
				{premium && (
					<img
						width={20}
						height={20}
						alt={"Feature included in Hastings Direct Premium"}
						src={checkImage}
					/>
				)}
			</td>
		</tr>
	);
};
export interface ContentProps {}

const Content: React.FC<ContentProps> = (props) => {
	return (
		<section>
			<h1>Why choose Hastings Direct home insurance?</h1>
			<p>
				With our range of home insurance policies tailored to suit your needs, you can
				choose buildings only insurance, contents only insurance, combined builds and
				content cover
			</p>
			<table className={"card cover-table"}>
				<thead>
					<tr>
						<th className={"cover-table__title"}>Cover included</th>
						<th className={"cover-table__logo"}>
							<img
								srcSet={`${logoImage}, ${logoImage2} 2x, ${logoImage3} 3x`}
								alt={"Hastings Direct logo"}
							/>
						</th>
						<th className={"cover-table__logo"}>
							<img
								srcSet={`${logoImage}, ${logoImage2} 2x, ${logoImage3} 3x`}
								alt={"Hastings Direct Premium logo"}
							/>
						</th>
					</tr>
				</thead>
				<tbody>
					<Row text={"£100,000 alternative accommodation cover"} normal premium />
					<Row text={"New for old (excluding linens and clothing)"} normal premium />
					<Row text={"£1,000,000 of buildings insurance"} normal premium />
					<Row text={"£75,000 of contents insurance"} normal premium />
					<Row text={"24 hour claims helpline"} normal premium />
					<Row text={"Family legal expenses cover"} premium />
					<Row text={"Home emergency cover"} premium />
				</tbody>
			</table>
			<p>Limitations may apply to family legal expenses cover and home emergency cover.</p>
			<p>
				* Upgraded to £200,000 for Premier policies. Only for building and buildings and
				contents policies.
			</p>
			<p>** Can be increased up to £1500,000 for an additional charge.</p>
			<p>
				The services we provide are covered under the Financial Services Compensation
				Scheme.
			</p>
			<div className={"content__actions"}>
				<button className={"cta lg"}>Get a home insurance quote</button>
				<button className={"cta cta-fill sm"}>Get a home quote</button>
				<div>
					<a className={"lg link"} href={"#"}>
						Retrieve your home insurance quote
					</a>
					<a className={"sm link"} href={"#"}>
						Retrieve your home quote
					</a>
				</div>
			</div>
		</section>
	);
};

export { Content };
