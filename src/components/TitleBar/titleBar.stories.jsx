import React from "react";
import TitleBar from ".";
import male1 from "../../assets/image/face-male-1.jpg";
import "story.css";

const TitleBarInfo = {
  title: "UI 组件/TitleBar",
  component: TitleBar,
};

export const Default = () => (
  <TitleBar status="online" src={male1} name="李铭浩" statusText="在线" />
);

export default TitleBarInfo;
