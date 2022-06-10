import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.js';
import Launch from './pages/Launch.js';
import ErrorPage from './pages/ErrorPage.js';
import CounterPage from './pages/CounterPage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Launch" element={<Launch />} />
        <Route path="/CounterPage" element={<CounterPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
