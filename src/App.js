import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; // Import Footer component
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />  {/* Footer placed outside Routes to ensure it's visible on all pages */}
      </div>
    </Router>
  );
}

export default App;