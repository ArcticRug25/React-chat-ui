import React, { useState } from "react";
import PropTypes from "prop-types";
import StyledEditProfile, { GroupTitle, StyledIconInput } from "./style";
import Profile from "components/Profile";
import face from "assets/image/face-male-1.jpg";
import Avatar from "components/Avatar";
import Button from "components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import "styled-components/macro";
import InputText from "components/InputText";
import { GenderAndRegion } from "./style";
import Radio from "components/Radio";
import LabelContainer from "components/LabelContainer";
import { SelectGroup } from "./style";
import Select from "components/Select";
import Option from "components/Option";
import Icon from "components/Icon";
import {
  faGithub,
  faLinkedin,
  faWeibo,
} from "@fortawesome/free-brands-svg-icons";

function EditProfile({ children, ...rest }) {
  const [showEdit, setShowEdit] = useState(false);

  if (!showEdit) {
    return (
      <Profile
        onEdit={() => setShowEdit(true)}
        showEditBtn
        showCloseIcon={false}
      />
    );
  }
  return (
    <StyledEditProfile {...rest}>
      <Avatar
        src={face}
        size="160px"
        css={`
          grid-area: 1/1/2/2;
          justify-self: center;
          margin-bottom: 12px;
        `}
      />
      <Button
        size="52px"
        css={`
          grid-area: 1/1/3/2;
          z-index: 10;
          align-self: end;
          justify-self: end;
        `}
      >
        <FontAwesomeIcon icon={faCheck} onClick={() => setShowEdit(false)} />
      </Button>
      <GroupTitle>基本信息</GroupTitle>
      <InputText label="昵称" />
      <GenderAndRegion>
        <LabelContainer label="性别">
          <Radio.Group>
            <Radio name="gender">男</Radio>
            <Radio name="gender">女</Radio>
          </Radio.Group>
        </LabelContainer>
        <LabelContainer label="地区">
          <SelectGroup>
            <Select type="form">
              <Option>省份</Option>
            </Select>
            <Select type="form">
              <Option>城市</Option>
            </Select>
            <Select type="form">
              <Option>区县</Option>
            </Select>
          </SelectGroup>
        </LabelContainer>
      </GenderAndRegion>
      <InputText label="个性签名" />

      <GroupTitle>基本信息</GroupTitle>
      <InputText label="联系电话" />
      <InputText label="电子邮箱" />
      <InputText label="个人网站" />

      <GroupTitle>社交信息</GroupTitle>
      <IconInput icon={faWeibo} bgColor="#F06767" />
      <IconInput icon={faGithub} bgColor="black" />
      <IconInput icon={faLinkedin} bgColor="#2483C0" />
    </StyledEditProfile>
  );
}

function IconInput({ icon, bgColor, ...rest }) {
  return (
    <StyledIconInput>
      <Icon.Social icon={icon} bgColor={bgColor} />
      <InputText {...rest} />
    </StyledIconInput>
  );
}

EditProfile.propTypes = {
  children: PropTypes.any,
};

export default EditProfile;
