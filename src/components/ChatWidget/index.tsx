import React, { useEffect, useState } from "react";
import "./index.scss";
import chatImage from "../../assets/icons/chat.svg";
import classNames from "classnames";

export interface ChatWidgetProps {}

const ChatWidget: React.FC<ChatWidgetProps> = (props) => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const scrollListener = () => {
			setVisible(window.scrollY > 100);
		};
		window.addEventListener("scroll", scrollListener);
		return () => window.removeEventListener("scroll", scrollListener);
	}, [setVisible]);

	const className = classNames({ "chat-widget--visible": visible });

	return (
		<div className={`chat-widget ${className}`}>
			Chat
			<img src={chatImage} alt={"Chat"} />
		</div>
	);
};

export { ChatWidget };
