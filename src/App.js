import './App.css';
import Header from './Components/Header';
import { Container , ThemeProvider, createTheme } from '@mui/material';


function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
});

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
