import React from "react";
import PropTypes from "prop-types";
import StyledTitleBar, { Title, Actions } from "./style";
import Avatar from "components/Avatar";
import Paragraph from "components/Paragraph";
import Text from "components/Text";
import Icon from "components/Icon";

import { ReactComponent as Call } from "assets/icon/call.svg";
import { ReactComponent as Camera } from "assets/icon/camera.svg";
import { ReactComponent as Options } from "assets/icon/options.svg";

function TitleBar({ children, status, src, name, statusText, ...rest }) {
  return (
    <StyledTitleBar {...rest}>
      <Avatar status={status} src={src} />
      <Title>
        <Paragraph size="large">{name}</Paragraph>
        <Paragraph type="secondary">
          <Text>{statusText}</Text>
          <Text>· 最后阅读：3小时前</Text>
        </Paragraph>
      </Title>
      <Actions>
        <Icon opacity={0.3} icon={Call} />
        <Icon opacity={0.3} icon={Camera} />
        <Icon opacity={0.3} icon={Options} />
      </Actions>
    </StyledTitleBar>
  );
}

TitleBar.propTypes = {
  children: PropTypes.any,
  status: PropTypes.string,
  src: PropTypes.string,
  name: PropTypes.string,
  statusText: PropTypes.string,
};

export default TitleBar;
