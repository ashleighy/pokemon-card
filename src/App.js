import logo from './logo.svg';
import './App.css';
import Search from './components/Search/Search.js';
import Overview from './components/Overview/Overview.js';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function App() {
  return (
    <div className="App">
      <Search/>
      <Box component="span" m={1}>
        <Container maxWidth="sm">
          <Overview/>
        </Container>
      </Box>
    </div>
  );
}

export default App;
