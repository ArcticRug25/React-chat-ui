import styled from "styled-components";
import CaretDown from "assets/icon/caret_down.svg";

const StyledSelect = styled.select`
  appearance: none; // 取消默认向下箭头图标
  background-image: url(${CaretDown});
  background-repeat: no-repeat;
  background-position: right center;
  background-color: transparent;  
  border: none;
  padding-right: 14px;
  font-size: ${({ theme }) => theme.normal};
  color: ${({ theme }) => theme.grayDark};

  ::-ms-expand {
    // ie 取消默认向下箭头图标
    display: none;
  }
`;

export default StyledSelect;
