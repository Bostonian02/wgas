import React from 'react';
import Blog from './pages/Blog';
import Post from './pages/Post';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/" index element={<Blog />} />
                <Route path="/posts/" element={<Post />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;