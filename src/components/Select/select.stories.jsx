import React from "react";
import Select from ".";
import Option from 'components/Option'

import "story.css";

const SelectInfo = {
  title: "UI 组件/Input/Select",
  component: Select,
};

export const Default = () => (
  <Select>
    <Option>最新消息优先</Option>
    <Option>在线好友优先</Option>
  </Select>
);

export default SelectInfo;
