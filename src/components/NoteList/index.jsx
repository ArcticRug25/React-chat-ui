import React from "react";
import PropTypes from "prop-types";
import StyledNoteList from "./style";
import { Notes } from "./style";
import NoteCard from "components/NoteCard";
import FilterList from "components/FilterList";
import { animated } from "react-spring";
import useStaggeredList from "hooks/useStaggeredList";
import noteData from 'data/notes'

function NoteList({ children, ...rest }) {
  const trailAnimes = useStaggeredList(noteData.length);
  return (
    <StyledNoteList {...rest}>
      <FilterList
        options={["最新笔记优先", "有改动的优先"]}
        actionLabel="添加笔记"
      >
        <Notes>
          {noteData.map((note, index) => (
            <animated.div key={note.id} style={trailAnimes[index]}>
              <NoteCard key={note.id} note={note} />
            </animated.div>
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
