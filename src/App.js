import { useEffect } from 'react';

import { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';

import './App.css';
import Theme from './Theme/Theme';
import GlobalStyle from './Theme/GlobalStyle';
// import ProtectedRoute from './Router/ProtectedRoute';
import SignIn from './components/pages/Authentication/SignIn';
import Dashboard from './components/pages/Dashboard';
import ForgotPassword from './components/pages/Authentication/ForgotPassword';
import ResetPassword from './components/pages/Authentication/ResetPassword';
import ResendMail from './components/pages/Authentication/ResendMail';
import { checkAuthentication, userMe } from './store/actions/userState';

function App() {
  const dispatch = useDispatch();
  const history = useHistory();

  const isAuth = useSelector((state) => state.user.isAuthenticated);

  useEffect(() => {
    dispatch(userMe(history));
    dispatch(checkAuthentication());
  }, [dispatch, history]);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Switch>
        {isAuth ? (
          <Route exact path="/" component={Dashboard} />
        ) : (
          <>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route exact path="/reset-password" component={ResetPassword} />
            <Route exact path="/resend-mail" component={ResendMail} />
          </>
        )}
      </Switch>
    </ThemeProvider>
  );
}

export default App;
