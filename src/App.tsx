import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './style.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
