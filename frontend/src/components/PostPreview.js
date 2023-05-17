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
                { /* 675 x 450 */ }
                {/* <img src={post.preview_image_url} alt="" class="postImage" loading="lazy"></img> */}
                <div class="postImage" loading="lazy" style={{ backgroundImage: 'url("' + post.preview_image_url + '")', backgroundSize: "cover", backgroundRepeat: "no-repeat" }}></div>
            </Link>
            <div id="tagsContainer">
            {
                post.tags.map(function(tag, index) {
                    return <Tag tag={tag} key={index}/>;
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