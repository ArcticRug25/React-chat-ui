import React from "react";
import Settings from ".";

import "story.css";
import { SettingsItem } from ".";

const SettingsInfo = {
  title: "页面组件/Settings",
  component: Settings,
};

export const Default = () => <Settings />;

export const WithoutDescription = () => (
  <SettingsItem label="这是一个没有描述的设置项" />
);

export const WithDescription = () => (
  <SettingsItem label="这是一个有描述的设置项" description="这是设置的描述" />
);

export const WithMenu = () => (
  <SettingsItem label="有子菜单的设置项" type="menu" />
);

export default SettingsInfo;
