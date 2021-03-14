import ChatApp from "components/ChatApp";
import React from "react";
import {ThemeProvider} from 'styled-components';
import theme from './theme'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <ChatApp />
    </ThemeProvider>
  );
}

export default App;
