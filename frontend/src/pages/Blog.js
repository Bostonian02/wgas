import React from 'react';
import { useState, state } from 'react';
import '../stylesheets/Main.css';
import '../stylesheets/Blog.css';
import PostPreview from '../components/PostPreview';

function Blog() {
    const [searchText, setSearchText] = React.useState('');

    return (
        <div id="blogPageContainer">
            <input type="text" id="searchInput" value={searchText} placeholder={"Search..."} onChange={e => setSearchText(e.target.value)}/><br/>
            <div id="blogPostsContainer">
                <PostPreview post={{ id: "235132352353", img_url: "/images/forest.jpg", title: "Why you should hire me", date: "April 20, 1969", tags: ["Nature", "Tech", "Movies"] }}/>
                <PostPreview post={{ id: "235132352353", img_url: "/images/Spanish Garden.png", title: "Look at this cool art my best friend made", date: "April 20, 1969", tags: ["Projects", "Personal"] }}/>
                <PostPreview post={{ id: "235132352353", img_url: "/images/forest.jpg", title: "Drop out of college RIGHT NOW", date: "April 20, 1969", tags: ["School"] }}/>
                <PostPreview post={{ id: "235132352353", img_url: "/images/forest.jpg", title: "The Last of Us is a good show", date: "April 20, 1969", tags: ["Shows", "Games"] }}/>
            </div>
        </div>
    );
}

export default Blog;