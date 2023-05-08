import React from 'react';
import Tag from './Tag.js';
import image from '../images/Spanish Garden.png';

/*
post: {
    id,
    img_url,
    title,
    date,
    tags
}
*/
function getImage(imageName){

    return "../images/"+imageName;
}

function PostPreview({ post }) {
    const url = "/:" + post.id;
    var src = post.img_url;
    console.log(getImage(post.img_url));

    return (
        <div class="postPreview">
            <a href={url}>
                <div id="realbitch" class="postImage"></div>
            </a>
            {
                post.tags.map(function(tag) {
                    return <Tag tag={tag} />;
                })
            }
            <p>{post.title}</p>
            <p>{post.date}</p>
        </div>
    );
}

export default PostPreview;