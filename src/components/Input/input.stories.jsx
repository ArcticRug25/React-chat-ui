import React from "react";
import Input from ".";
import Icon from "components/Icon";

import { ReactComponent as ClipIcon } from "assets/icon/clip.svg";
import { ReactComponent as SmileIcon } from "assets/icon/smile.svg";

import "story.css";

const InputInfo = {
  title: "UI 组件/Input",
  component: Input,
};

export const Default = () => <Input />;

export const Search = () => <Input.Search />;

export const InputTextWithLabel = () => <Input.Text label="昵称" />;

export const InputTextWithoutLabel = () => <Input.Text />

export const WithAffix = () => (
  <Input
    prefix={<Icon icon={ClipIcon} color="#ccc" />}
    suffix={<Icon icon={SmileIcon} color="#ccc" />}
  />
);

export default InputInfo;
