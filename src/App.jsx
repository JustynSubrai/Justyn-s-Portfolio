import { Routes, BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './components/App.css'
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import ContactPage from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
