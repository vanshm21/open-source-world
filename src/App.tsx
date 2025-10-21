import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <Router>
      <div className="App">
        <ThemeProvider>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
