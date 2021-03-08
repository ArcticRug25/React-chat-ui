import React from "react";
import Paragraph from ".";

import "story.css";

const ParagraphInfo = {
  title: "排版/Paragraph",
  component: Paragraph,
};

export const Default = () => (
  <>
    <Paragraph>这是一个段落</Paragraph>
    <Paragraph>这是一个段落</Paragraph>
  </>
);

export const Ellipsis = () => (
  <Paragraph ellipsis bold>
    这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落
  </Paragraph>
)

export default ParagraphInfo;
