import {
    css
} from 'styled-components'

export const circle = (color, size) => css `
  width: ${size};
  height: ${size};
  border-radius: 50%;
  background-color: ${color};
`;