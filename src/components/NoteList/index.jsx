import React from "react";
import PropTypes from "prop-types";
import StyledNoteList from "./style";
import { Notes } from "./style";
import NoteCard from "components/NoteCard";
import FilterList from "components/FilterList";

function NoteList({ children, ...rest }) {
  return (
    <StyledNoteList {...rest}>
      <FilterList
        options={["最新笔记优先", "有改动的优先"]}
        actionLabel="添加笔记"
      >
        <Notes>
          {new Array(10).fill(0).map((_, index) => (
            <NoteCard key={index} />
          ))}
        </Notes>
      </FilterList>
    </StyledNoteList>
  );
}

NoteList.propTypes = {
  children: PropTypes.any,
};

export default NoteList;
