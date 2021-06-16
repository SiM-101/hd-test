import React from "react";
import { CTA } from ".";

export default {
	title: "Elements / CTA",
	component: CTA,
};

export const Standard = () => <CTA>Hello CTA</CTA>;

export const Fill = () => (
	<div style={{ width: 300 }}>
		<CTA fill={true}>Big CTA!</CTA>
	</div>
);
