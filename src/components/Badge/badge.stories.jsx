import React from "react";
import Badge from ".";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import "story.css";

const BadgeInfo = {
  title: "UI 组件/Badge",
  component: Badge,
};

export const Default = () => <Badge count={5} />;

export const DotVariant = () => {
  return (
    <Badge show variant="dot">
      <FontAwesomeIcon icon={faCommentDots} style={{ fontSize: "24px" }} />
    </Badge>
  );
};

export default BadgeInfo;
