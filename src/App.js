
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>

        <Navbar />
        <Routes path="/" exact />
      </Router>
    </div>
  );
}

export default App;
