import { BrowserRouter } from 'react-router-dom';
import './global.css';
import { RouteApp } from './routes/Route';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { AuthProvider } from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <AuthProvider>
          <RouteApp />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
