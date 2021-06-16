import React from "react";
import { Card } from ".";

export default {
	title: "Components / Card",
	component: Card,
};

export const Standard = () => <Card>Hello Card</Card>;

export const WithTitle = () => <Card title={"I'm here"}>And i'm here</Card>;
