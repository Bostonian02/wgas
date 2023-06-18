import React from 'react';
// import Tag from '../components/Tag';
import '../stylesheets/Post.css';
import '../stylesheets/Main.css';
import '../stylesheets/Blog.css';
import formatDate from '../components/FormatDate';
import buildPath from '../components/BuildPath';

function Post() {
    const [postTitle, setPostTitle] = React.useState('Example title');
    const [postDate, setPostDate] = React.useState('April 20, 1969');
    const [postText, setPostText] = React.useState('Lorem ipsum dolor')
    // const [postTags, setPostTags] = React.useState(['']);

    // Retrieve the details of a post based on its id
    const getPostDetails = async (postID) => {
        try
        {
            var response = await fetch(buildPath('/api/posts/' + postID),
            { method: 'GET', headers: { 'Content-Type': 'application/json' } });

            var res = JSON.parse(await response.text());

            if (res.success)
            {
                setPostTitle(res.details["title"]);
                let dateString = formatDate(res.details["date"])
                setPostDate(dateString);
                setPostText(res.details["body"]);
                // setPostTags(res.details["tags"].split(','));
            }
        }
        catch (e)
        {
            console.log(e);
        }
    }

    // Grab the post details when the page loads
    React.useEffect(() => {
        let ignore = false;
        if (!ignore) {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            getPostDetails(urlParams.get('id'));
        }
        return () => { ignore = true; }
    }, []);


    return (
        <div id="postContainer">
            <div id="postHeader">
                <h1>{postTitle}</h1>
                <div id="tags">
                    {
                        // Gonna experiment with having tags not show up on post previews. I think it looks a bit cleaner
                        // I know I spent a lot of time getting this working but fuck me I guess
                        // postTags.map((tag, index) => {
                        //     return <Tag tag={tag} key={index}/>;
                        // })
                    }
                </div>
                <div id="postAuthorAndDate">
                    <p>By <b>Boston Childs</b></p>
                    <p>{postDate}</p>
                </div>
            </div>
            <p id="postText" dangerouslySetInnerHTML={{__html: postText}}></p>
        </div>
    );
}

export default Post;