import React from "react";
import Radio from ".";

import "story.css";

const RadioInfo = {
  title: "UI 组件/Input/Radio",
  component: Radio,
};

export const Default = () => <Radio>选项</Radio>;

export const RadioGroup = () => (
  <Radio.Group label="请选择">
    <Radio name="option">选项一</Radio>
    <Radio name="option">选项二</Radio>
    <Radio name="option">选项三</Radio>
  </Radio.Group>
);

export default RadioInfo;
