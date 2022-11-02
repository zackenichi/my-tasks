import { Box, Container } from '@mui/system';
import './App.css';
import TaskManager from './components/TaskManager';

function App() {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          flexGrow: 1,
          alignItems: 'center',
          flexDirection: 'column',
          padding: 4,
        }}
      >
        <TaskManager />
      </Box>
    </Container>
  );
}

export default App;
