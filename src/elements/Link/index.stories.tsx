import React from "react";
import { Link } from ".";

export default {
	title: "Elements/ Link",
	component: Link,
};

export const Block = () => <Link>This is a link</Link>;

export const Inline = () => (
	<div>
		that is a <Link inline>link</Link> inline
	</div>
);
