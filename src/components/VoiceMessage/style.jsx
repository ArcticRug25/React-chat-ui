import StyledButton from "components/Button/style";
import StyledIcon from "components/Icon/style";
import StyledText from "components/Text/style";
import styled, { css } from "styled-components";

const typeVariants = {
  mine: css`
    ${StyledButton} {
      background-color: white;

      ${StyledIcon} path {
        fill: ${({ theme }) => theme.primaryColor};
      }
    }

    & > ${StyledIcon} path {
      fill: white;
    }

    & > ${StyledText} {
      color: white;
    }
  `,
};

const StyledVoiceMessage = styled.div`
  display: flex;
  align-items: center;

  & > *:first-child {
    flex-shrink: 0; // 禁止缩小
  }

  & > *:not(:first-child) {
    margin-left: 16px;
  }

  ${({ type }) => type && typeVariants[type]}
`;

export default StyledVoiceMessage;
