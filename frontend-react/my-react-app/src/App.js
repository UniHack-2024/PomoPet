import logo from './logo.svg';
import './App.css';
import'./component/MainMenu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainMenu from './component/MainMenu';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />} />
      </Routes>
    </Router>
  );
}

export default App;
