import React from "react";
import PropTypes from "prop-types";
import StyledFileList from "./style";
import FilterList from "components/FilterList";
import { Files } from "./style";
import FileCard from "components/FileCard";

function FileList({ children, ...rest }) {
  return (
    <StyledFileList {...rest}>
      <FilterList options={["最新文件优先", "按文件名排序"]}>
        <Files>
          {new Array(10).fill(0).map((_, i) => (
            <FileCard key={i} />
          ))}
        </Files>
      </FilterList>
    </StyledFileList>
  );
}

FileList.propTypes = {
  children: PropTypes.any,
};

export default FileList;
