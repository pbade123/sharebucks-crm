import { ThemeProvider } from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Theme from './Theme/Theme';
import GlobalStyle from './Theme/GlobalStyle';
import SignIn from './components/pages/Authentication/SignIn';
import Dashboard from './components/pages/Dashboard';
import ForgotPassword from './components/pages/Authentication/ForgotPassword';
import ResetPassword from './components/pages/Authentication/ResetPassword';
import ResendMail from './components/pages/Authentication/ResendMail';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/reset-password" component={ResetPassword} />
        <Route exact path="/resend-mail" component={ResendMail} />
        <Route path="/" component={SignIn} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
