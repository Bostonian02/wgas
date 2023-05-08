import React from 'react';
import Tag from './Tag.js';
import { Link } from 'react-router-dom';

/*
post: {
    id,
    img_url,
    title,
    date,
    tags
}
*/

function PostPreview({ post }) {
    const url = "/posts?id=" + post.id;

    return (
        <div class="postPreview">
            <Link to={url}>
                <img src={post.img_url} alt="" class="postImage"></img>
            </Link>
            <div id="tagsContainer">
            {
                post.tags.map(function(tag) {
                    return <Tag tag={tag} />;
                })
            }
            </div>
            <div class="postPreviewText">
                <h2>{post.title}</h2>
                <p>{post.date}</p>
            </div>
        </div>
    );
}

export default PostPreview;