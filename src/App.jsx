import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Sessions from './components/Sessions/Sessions';
import Header from './components/Header/Header';
import MentalHealthReports from './components/MentalHealthReports/MentalHealthReports';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 min-h-screen bg-gray-50 p-6">
          <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/mentalHealthReports" element={<MentalHealthReports />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sessions" element={<Sessions />} />
            <Route path="/home" element={<Home />} />
        
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;