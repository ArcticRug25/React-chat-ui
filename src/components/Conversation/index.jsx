import React from "react";
import PropTypes from "prop-types";
import male1 from "../../assets/image/face-male-1.jpg";
import StyledConversation,{ Conversations ,MyChatBubble}  from "./style";
import TitleBar from "components/TitleBar";
import Footer from "components/Footer";
import Emoji from "components/Emoji";
import ChatBubble from "components/ChatBubble";
import VoiceMessage from "components/VoiceMessage";

function Conversation({ children, ...rest }) {
  return (
    <StyledConversation {...rest}>
      <TitleBar status="online" src={male1} name="李铭浩" statusText="在线" />
      <Conversations>
        <ChatBubble time="昨天 下午14:26">Hi 小宇，忙什么呢？</ChatBubble>
        <MyChatBubble time="昨天 下午16:30">
          Hello 啊！最近就是一直在加班改 bug，然后 怼产品，怼 UI，各种怼！
        </MyChatBubble>
        <ChatBubble time="昨天 下午14:26">
          <VoiceMessage time="01:24" />
        </ChatBubble>
        <MyChatBubble time="昨天 下午16：30">
          明天约一把王者荣耀，不连赢5把不罢休 🤘
          <Emoji label="smile">🤘</Emoji>
        </MyChatBubble>
      </Conversations>
      <Footer />
    </StyledConversation>
  );
}

Conversation.propTypes = {
  children: PropTypes.any,
};

export default Conversation;
