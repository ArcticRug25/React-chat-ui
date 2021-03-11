import React from "react";
import Emoji from ".";

import "story.css";

const EmojiInfo = {
  title: "UI 组件/Emoji",
  component: Emoji,
};

export const Default = () => (
  <div>
    <Emoji label="smile">😄</Emoji>
    <Emoji label="todo">✅</Emoji>
    <Emoji label="clock">🕔</Emoji>
  </div>
);

export default EmojiInfo;
