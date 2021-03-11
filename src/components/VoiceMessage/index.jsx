import React from "react";
import PropTypes from "prop-types";
import StyledVoiceMessage from "./style";
import { ReactComponent as Play } from "assets/icon/play.svg";
import { ReactComponent as Wave } from "assets/icon/wave.svg";
import Button from "components/Button";
import Icon from "components/Icon";
import { useTheme } from "styled-components";
import Text from "components/Text";

function VoiceMessage({ children, time, type, ...rest }) {
  const theme = useTheme();

  return (
    <StyledVoiceMessage type={type} {...rest}>
      <Button size="40px">
        <Icon
          icon={Play}
          color="white"
          width="14"
          height="16"
          style={{ transform: "translateX(1px)" }}
        />
      </Button>
      <Icon
        icon={Wave}
        width="100% "
        height="100%"
        color={theme.primaryColor}
      />
      <Text bold>{time}</Text>
    </StyledVoiceMessage>
  );
}

VoiceMessage.propTypes = {
  type:PropTypes.oneOf(['mine']),
  time:PropTypes.string,
  children: PropTypes.any,
};

export default VoiceMessage;
