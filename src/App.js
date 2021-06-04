import { ThemeProvider } from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Theme from './Theme/Theme';
import GlobalStyle from './Theme/GlobalStyle';
import SignIn from './components/pages/SignIn';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={SignIn} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
