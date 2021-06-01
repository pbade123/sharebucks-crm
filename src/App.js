import { ThemeProvider } from 'styled-components';

import './App.css';
import Theme from './Theme/Theme';
import GlobalStyle from './Theme/GlobalStyle';
import SignIn from './components/pages/SignIn';

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={Theme}>
        <GlobalStyle />

        <SignIn />
      </ThemeProvider>
    </div>
  );
}

export default App;
