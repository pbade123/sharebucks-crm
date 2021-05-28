import { ThemeProvider } from 'styled-components';

import './App.css';
import Theme from './Theme/Theme';
import GlobalStyle from './Theme/GlobalStyle';
import Card from './components/common/Card';
import Loading from './components/common/Loading';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <div style={{ padding: '2rem' }}>
        <Card />
        <Loading />
      </div>
    </ThemeProvider>
  );
}

export default App;
