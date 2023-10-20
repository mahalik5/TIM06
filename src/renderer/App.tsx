import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter as Router, Routes, Route, } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Register from './Register';

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}
