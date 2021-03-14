import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
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
import { ReactComponent as closeCircle } from "assets/icon/closeCircle.svg";
import blockedData from "data/blocked";
import useStaggeredList from "hooks/useStaggeredList";
import {animated} from 'react-spring';


function BlockedList({ children, ...rest }) {
  const trailAnimes = useStaggeredList(blockedData.length);
  const history = useHistory();

  return (
    <StyledBlockedList {...rest}>
      <SettingsMenu>
        <Icon
          icon={ArrowMenuList}
          css={`
            cursor: pointer;
          `}
          onClick={() => history.goBack()}
        />
        <Text size="xxlarge">已屏蔽的好友</Text>
      </SettingsMenu>
      <FriendList>
        {blockedData.map((user, i) => (
          <animated.div key={user.id} style={trailAnimes[i]}>
          <CloseabelAvatar key={user.id}>
            <BlockedAvatar size="105px" src={user.avatar} />
            <CloseIcon width={46} height={51} icon={closeCircle} />
            <BlockedName>{user.name}</BlockedName>
          </CloseabelAvatar>
          </animated.div>
        ))}
      </FriendList>
    </StyledBlockedList>
  );
}

BlockedList.propTypes = {
  children: PropTypes.any,
};

export default BlockedList;
