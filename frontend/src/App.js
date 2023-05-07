import React from 'react';
import Blog from './pages/Blog';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route path="/" index element={<Blog />} />
        </Routes>
    </BrowserRouter>
);
}

export default App;