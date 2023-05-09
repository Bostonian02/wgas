import React from 'react';
import { useState, state } from 'react';
import '../stylesheets/Main.css';
import '../stylesheets/Blog.css';
import PostPreview from '../components/PostPreview';

function Blog() {
    const [isLoading, setLoading] = useState(true);
    const [searchText, setSearchText] = React.useState('');
    const [posts, setPosts] = React.useState([{}]);

    // Retrieve all posts from the database
    const getAllBlogPosts = async () => {
        try
        {
            var response = await fetch('http://localhost:3001/api/posts/',
            { method: 'GET', headers: { 'Content-Type': 'application/json' } });

            var res = JSON.parse(await response.text());

            if (res.success)
            {
                setPosts(res.posts);
                setLoading(false);
            }
        }
        catch (e)
        {
            console.log(e);
        }
    }

    // Grab all posts when the page first loads
    React.useEffect(() => {
        let ignore = false;
        // Give the page some time to retrieve data and set state
        setTimeout(() => {
            if (!ignore) {
                getAllBlogPosts()
            }
        }, 5)
        return () => { ignore = true; }
    }, []);

    if (isLoading) {
        return (
            <div>
            </div>
        );
    }

    return (
        <div id="blogPageContainer">
            <input type="text" id="searchInput" value={searchText} placeholder={"Search..."} onChange={e => setSearchText(e.target.value)}/><br/>
            <div id="blogPostsContainer">
                {
                    posts.map((post) => {
                        return <PostPreview post={post}></PostPreview>;
                    })
                }
                {/* <PostPreview post={{ id: "1", preview_image_url: "/images/forest.jpg", title: "Why you should hire me", date: "April 20, 1969", tags: ["Nature", "Tech", "Movies"] }}/>
                <PostPreview post={{ id: "235132352353", preview_image_url: "/images/Spanish Garden.png", title: "Look at this cool art my best friend made", date: "April 20, 1969", tags: ["Projects", "Personal"] }}/>
                <PostPreview post={{ id: "235132352353", preview_image_url: "/images/forest.jpg", title: "Drop out of college RIGHT NOW", date: "April 20, 1969", tags: ["School"] }}/>
                <PostPreview post={{ id: "235132352353", preview_image_url: "/images/forest.jpg", title: "The Last of Us is a good show", date: "April 20, 1969", tags: ["Shows", "Games"] }}/> */}
            </div>
        </div>
    );
}

export default Blog;