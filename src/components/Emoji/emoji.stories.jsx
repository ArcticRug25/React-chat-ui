import React from "react";
import Emoji from ".";

import "story.css";

const EmojiInfo = {
  title: "UI ็ปไปถ/Emoji",
  component: Emoji,
};

export const Default = () => (
  <div>
    <Emoji label="smile">๐</Emoji>
    <Emoji label="todo">โ</Emoji>
    <Emoji label="clock">๐</Emoji>
  </div>
);

export default EmojiInfo;
