import { Routes, BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Global from './pages/Global';

function App() {
  return (
    <Router>
      
    <Global/>

    <Routes>
      <Route path="/" element={ <Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    </Router>
  );
}

export default App;
