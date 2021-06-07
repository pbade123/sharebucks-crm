import { ThemeProvider } from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Theme from './Theme/Theme';
import GlobalStyle from './Theme/GlobalStyle';
import SignIn from './components/pages/Authentication/SignIn';
import Dashboard from './components/pages/Dashboard';
import ForgotPassword from './components/pages/Authentication/ForgotPassword';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route path="/" component={SignIn} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
