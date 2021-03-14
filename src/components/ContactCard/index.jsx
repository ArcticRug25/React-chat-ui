import React from "react";
import PropTypes from "prop-types";
import StyledContactCard, { Name, Intro } from "./style";
import Avatar from "components/Avatar";

// import Paragraph from "components/Paragraph";
// import "styled-components/macro"

// function ContactCard({ children, ...rest }) {
//   return (
//     <StyledContactCard {...rest}>
//       <Avatar src={face} status="online" />
//       <Paragraph size="large" css={`color:${({theme})=>theme.primaryColor}`}>李浩</Paragraph>
//       <Paragraph type="secondary">我是前端工程师我是前端工程师我是前端工程师我是前端工程师我是前端工程师我是前端工程师我是前端工程师</Paragraph>
//     </StyledContactCard>
//   );
// }

function ContactCard({ contact,children, ...rest }) {
  return (
    <StyledContactCard {...rest}>
      <Avatar src={contact.avatar} status="online" />
      <Name>{contact.name}</Name>
      <Intro>{contact.Intro}</Intro>
    </StyledContactCard>
  );
}

ContactCard.propTypes = {
  children: PropTypes.any,
};

export default ContactCard;
