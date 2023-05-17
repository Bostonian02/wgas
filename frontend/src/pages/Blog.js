import React, { Suspense } from 'react';
import { useState, state } from 'react';
import '../stylesheets/Main.css';
import '../stylesheets/Blog.css';
import buildPath from '../components/BuildPath';
import formatDate from '../components/FormatDate';
const PostPreview = React.lazy(() => import('../components/PostPreview'));

function Blog() {
    const [isLoading, setLoading] = useState(true);
    const [searchText, setSearchText] = React.useState('');
    const [posts, setPosts] = React.useState([{}]);

    const sortBlogPosts = (post1, post2) => {
        return post2.id - post1.id;
    }

    // Retrieve all posts from the database
    const getAllBlogPosts = async () => {
        try
        {
            var response = await fetch(buildPath('/api/posts/'),
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
            <input type="text" id="searchInput" value={searchText} placeholder={"Search..."} onChange={(e) => {setSearchText(e.target.value);}}/><br/>
            <div id="blogPostsContainer">
                {
                    // Filter the posts based on search, sort them, then map the results
                    posts.filter(post => {
                        if (searchText === '') {
                            return post;
                        } else if (post.title.toLowerCase().includes(searchText.toLowerCase()) || formatDate(post.date).toLowerCase().includes(searchText.toLowerCase())) {
                            return post;
                        }
                    }).sort(sortBlogPosts).map((post, index) => {
                        return (
                            // Wrap the component in a 'Suspense' tag to lazy load it
                            <Suspense fallback={ <span>Loading...</span> }>
                                <PostPreview post={post} key={index}></PostPreview>
                            </Suspense>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Blog;