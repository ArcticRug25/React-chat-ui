import React from "react";
import PropTypes from "prop-types";
import StyledParagraph from "./style";

function Paragraph({ children, ellipsis, ...rest }) {
  console.log(rest); // as 将这个组件渲染成p标签
  return (
    <StyledParagraph as="p" ellipsis={ellipsis} {...rest}>
      {children}
    </StyledParagraph>
  );
}

Paragraph.propTypes = {
  children: PropTypes.any,
  ellipsis: PropTypes.bool,
  type: PropTypes.oneOf(["primary", "secondary", "danger"]),
  size: PropTypes.oneOf([
    "xxsmall",
    "xsmall",
    "small",
    "normal",
    "medium",
    "large",
    "xlarge",
    "xxlarge",
  ]),
  bold: PropTypes.bool,
};

export default Paragraph;
