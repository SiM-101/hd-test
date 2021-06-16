import React from "react";
import "./index.scss";
import chatImage from "../../assets/icons/chat.svg";

export interface ChatWidgetProps {}

const ChatWidget: React.FC<ChatWidgetProps> = (props) => {
	return (
		<div className={"chat-widget"}>
			Chat
			<img src={chatImage} alt={"Chat"} />
		</div>
	);
};

export { ChatWidget };
