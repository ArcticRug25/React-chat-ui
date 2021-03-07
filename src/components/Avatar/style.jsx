import styled, { css } from "styled-components";

const circleMixinFunc = (color,size) => css`
  content: "";
  display: block;
  position: absolute;
  width: ${size};
  height: ${size};
  border-radius: 50%;
  background-color: ${color};
`;

const StyledAvatar = styled.div`
  position: relative;
`;

const StatusIcon = styled.div`
  position: absolute;
  left: 2px;
  top: 4px;

  &::before {
    ${({size})=>circleMixinFunc("white",size)}

    transform: scale(2);
  }

  &::after {
    ${({ theme,status,size }) => {
        console.log(status);
        if(status === 'online'){
            return circleMixinFunc(theme.green,size)
        }else if(status === 'offline'){
            return circleMixinFunc(theme.gray,size)
        }
    }}
  }
`;

const AvatarClip = styled.div`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  border-radius: 50%;
  overflow: hidden;
`;

const AvatarImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

export default StyledAvatar;
export { StatusIcon, AvatarClip, AvatarImage };
