import React from "react";
import Popover from ".";

import "story.css";
import Button from "components/Button";

const PopoverInfo = {
  title: "UI 组件/Popover",
  component: Popover,
};

export const Default = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "50vh",
    }}
  >
    <Popover content="Hello!">
      <Button shape="rect">点我</Button>
    </Popover>
  </div>
);

export const WithOffset = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "50vh",
    }}
  >
    <Popover offset={{x:"-25%"}} content="Hello!">
      <Button shape="rect">点我</Button>
    </Popover>
  </div>
);

export default PopoverInfo;
