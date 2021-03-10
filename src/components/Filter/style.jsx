import StyledText from "components/Text/style";
import styled from "styled-components";

const Filters = styled.div``;

const Action = styled.div`
  justify-self: end;
  ${StyledText} {
    padding-right: 1rem;
  }
`;

const StyledFilter = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
`;

export default StyledFilter;
export { Filters, Action };
