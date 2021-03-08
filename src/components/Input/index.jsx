import React from "react";
import PropTypes from "prop-types";
import StyledInput, { InputContainer, Prefix, Suffix } from "./style";
import { ReactComponent as SearchIcon } from "assets/icon/search.svg";
import Icon from "components/Icon";
import { useTheme } from "styled-components"; // 主题钩子函数 可以获取主题对象 给组件对象的自定义的属性传递值 css做不到
import "styled-components/macro"; // 可以在组件里用css属性 给组件加样式

function Input({ placeholder = "请输入内容...", prefix, suffix, ...rest }) {
  return (
    <InputContainer {...rest}>
      {prefix && <Prefix>{prefix}</Prefix>}
      <StyledInput placeholder={placeholder} />
      {suffix && <Suffix>{suffix}</Suffix>}
    </InputContainer>
  );
}

function Search({ placeholder = "请输入搜索内容...", ...rest }) {
  const theme = useTheme();

  return (
    <Input
      placeholder={placeholder}
      prefix={
        <Icon icon={SearchIcon} color={theme.gray3} width={18} height={18} />
      }
      {...rest}
    />
  );
}

Input.Search = Search;

Input.propTypes = {
  placeholder: PropTypes.string,
  prefix: PropTypes.any,
  suffix: PropTypes.any,
};

export default Input;
