import React, { Suspense } from 'react';
// import Blog from './pages/Blog';
// import Post from './pages/Post';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Blog = React.lazy(() => import('./pages/Blog'));
const Post = React.lazy(() => import('./pages/Post'));


function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Suspense fallback="Loading...">
                <Routes>
                    <Route path="/" index element={<Blog />} />
                    <Route path="/posts/" element={<Post />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;