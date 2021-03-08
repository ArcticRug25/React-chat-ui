import React from "react";
import Button from ".";

import { ReactComponent as Plus } from "assets/icon/plus.svg";

import "story.css";
import Icon from "components/Icon";

const ButtonInfo = {
  title: "UI 组件/Button",
  component: Button,
};

export const RectButton = () => <Button shape="rect">默认</Button>;

export const CircleButton = () => (
  <Button>
    <Icon icon={Plus} width={12} height={12} />
  </Button>
);

export default ButtonInfo;
