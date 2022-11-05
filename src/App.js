import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.js';
import SingleLaunch from './pages/SingleLaunch.js';
import MultiLaunch from './pages/MultiLaunch.js';
import LaunchBtns from './pages/LaunchBtns.js';
import ErrorPage from './pages/ErrorPage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SingleLaunch" element={<SingleLaunch />} />
        <Route path="/MultiLaunch" element={<MultiLaunch />} />
        <Route path="/LaunchBtns" element={<LaunchBtns />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
