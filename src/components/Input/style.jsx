import styled from "styled-components";

//输入框
const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  border: none;
  background: none;
  color: ${({ theme }) => theme.grayDark};
  font-size: ${({ theme }) => theme.medium};
  display: block;
  &::placeholder {
    color: ${({ theme }) => theme.gray3};
  }
`;

//前缀图标组件
const Prefix = styled.div`
  margin-right: 16px;
`;

//后缀图标组件
const Suffix = styled.div`
  margin-left: 16px;
`;

//整体输入框容器
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.gray2};
  border-radius: 24px;
  padding: 0 30px;
`;

export default StyledInput;
export { Prefix, Suffix, InputContainer };
