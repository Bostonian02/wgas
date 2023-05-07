import React from 'react';
import { useState, state } from 'react';
import '../stylesheets/Main.css';
import '../stylesheets/Blog.css';
import Navbar from '../components/Navbar.js'

function Blog() {
    const [searchText, setSearchText] = React.useState('');

    return (
        <div id="blogPageContainer">
            <input type="text" id="searchInput" value={searchText} placeholder={"Search..."} onChange={e => setSearchText(e.target.value)}/>
            <div id="blogPostsContainer">

            </div>
        </div>
    );
}

export default Blog;