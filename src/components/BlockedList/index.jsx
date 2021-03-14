import React from "react";
import PropTypes from "prop-types";
import StyledBlockedList, {
  SettingsMenu,
  CloseabelAvatar,
  BlockedAvatar,
  CloseIcon,
  BlockedName,
  FriendList,
} from "./style";
import "styled-components/macro";
import Icon from "components/Icon";
import { ReactComponent as ArrowMenuList } from "assets/icon/arrowMenuLeft.svg";
import Text from "components/Text";
import face from "../../assets/image/face-male-1.jpg";
import { ReactComponent as closeCircle } from "assets/icon/closeCircle.svg";

function BlockedList({ children, ...rest }) {
  return (
    <StyledBlockedList {...rest}>
      <SettingsMenu>
        <Icon
          icon={ArrowMenuList}
          css={`
            cursor: pointer;
          `}
        />
        <Text size="xxlarge">已屏蔽的好友</Text>
      </SettingsMenu>
      <FriendList>
        {new Array(8).fill(0).map((_, i) => (
          <CloseabelAvatar key={i}>
            <BlockedAvatar size="105px" src={face} />
            <CloseIcon width={46} height={51} icon={closeCircle} />
            <BlockedName>ArcticRug25</BlockedName>
          </CloseabelAvatar>
        ))}
      </FriendList>
    </StyledBlockedList>
  );
}

BlockedList.propTypes = {
  children: PropTypes.any,
};

export default BlockedList;
