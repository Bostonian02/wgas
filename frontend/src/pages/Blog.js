import React from 'react';
import { useState, state } from 'react';
import '../stylesheets/Main.css';
import '../stylesheets/Blog.css';
import '../images/Logo.png';
import Navbar from '../components/Navbar.js'
import PostPreview from '../components/PostPreview';

function Blog() {
    const [searchText, setSearchText] = React.useState('');

    return (
        <div id="blogPageContainer">
            <input type="text" id="searchInput" value={searchText} placeholder={"Search..."} onChange={e => setSearchText(e.target.value)}/><br/>
            <div id="blogPostsContainer">
                <PostPreview post={{ id: "235132352353", img_url: "Logo.png", title: "Test title", date: "April 20, 1969", tags: ["Nature"] }}/>
                <PostPreview post={{ id: "235132352353", img_url: "../images/Logo.png", title: "Look at this cool art my best friend made", date: "April 20, 1969", tags: ["Nature"] }}/>
                <PostPreview post={{ id: "235132352353", img_url: "../images/Logo.png", title: "Test title", date: "April 20, 1969", tags: ["Nature"] }}/>
                <PostPreview post={{ id: "235132352353", img_url: "../images/Logo.png", title: "Test title", date: "April 20, 1969", tags: ["Nature"] }}/>

            </div>
        </div>
    );
}

export default Blog;