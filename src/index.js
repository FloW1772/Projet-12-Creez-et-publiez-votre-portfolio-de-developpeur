import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './pages/home/HomePage.jsx';
import Portfolio from './pages/portfolio/Portfolio';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from './pages/contact/ContactPage.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Portfolio" element={<Portfolio />} />

      </Routes>
      <Footer />

    </Router>
  </React.StrictMode>
);