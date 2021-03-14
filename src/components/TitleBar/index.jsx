import React from "react";
import PropTypes from "prop-types";
import StyledTitleBar, { Title, Actions } from "./style";
import { DropdownItem } from "../../components/Dropdown/style";
import Avatar from "components/Avatar";
import Paragraph from "components/Paragraph";
import Text from "components/Text";
import Icon from "components/Icon";
import Seperator from "components/Seperator";
import { ReactComponent as Call } from "assets/icon/call.svg";
import { ReactComponent as Camera } from "assets/icon/camera.svg";
import { ReactComponent as Options } from "assets/icon/options.svg";
import Dropdown from "components/Dropdown";

function TitleBar({
  animeProps,
  style,
  onAvatarClick,
  onVideoClick,
  children,
  status,
  src,
  name,
  statusText,
  ...rest
}) {
  return (
    <StyledTitleBar style={{...style,...animeProps}} {...rest}>
      <Avatar onClick={onAvatarClick} status={status} src={src} />
      <Title>
        <Paragraph size="large">{name}</Paragraph>
        <Paragraph type="secondary">
          <Text>{statusText}</Text>
          <Text>· 最后阅读：3小时前</Text>
        </Paragraph>
      </Title>
      <Actions>
        <Icon opacity={0.3} icon={Call} onClick={onVideoClick} />
        <Icon opacity={0.3} icon={Camera} />
        <Dropdown
          content={
            <>
              <DropdownItem>
                <Paragraph>个人资料</Paragraph>
              </DropdownItem>
              <DropdownItem>
                <Paragraph>关闭会话</Paragraph>
              </DropdownItem>
              <Seperator />
              <DropdownItem>
                <Paragraph type="danger">屏蔽此人</Paragraph>
              </DropdownItem>
            </>
          }
        >
          <Icon opacity={0.3} icon={Options} />
        </Dropdown>
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
