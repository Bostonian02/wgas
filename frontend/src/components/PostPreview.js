import React from 'react';
import Tag from './Tag.js';
import { Link } from 'react-router-dom';
import formatDate from './FormatDate.js';
/*
post: {
    id,
    preview_image_url,
    title,
    date,
    tags
}
*/

function PostPreview({ post }) {
    const url = "/posts?id=" + post.id;
    let date = formatDate(post.date);

    return (
        <div class="postPreview">
            <Link to={url}>
                <img src={post.preview_image_url} alt="" class="postImage"></img>
            </Link>
            <div id="tagsContainer">
            {
                post.tags.map(function(tag) {
                    return <Tag tag={tag} />;
                })
            }
            </div>
            <div class="postPreviewText">
                <h2 class="postTitle">{post.title}</h2>
                <p class="postDate">{date}</p>
            </div>
        </div>
    );
}

export default PostPreview;