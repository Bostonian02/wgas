import React from 'react';
import Tag from '../components/Tag';
import '../stylesheets/Post.css';
import '../stylesheets/Main.css';
import '../stylesheets/Blog.css';

/*
2023-05-08
0123456789
*/

function formatDate(isoDate) {
    let year = isoDate.substring(0,4);
    let month_num = isoDate.substring(5,7);
    let day = isoDate.substring(8);
    let month = "";

    if (day[0] === '0') {
        day = day.substring(1);
    }

    // This is a quick and dirty approach. If I think of a better way this will be changed
    switch (month_num) {
        case "01":
            month = "January";
            break;
        case "02":
            month = "February";
            break;
        case "03":
            month = "March";
            break;
        case "04":
            month = "April";
            break;
        case "05":
            month = "May";
            break;
        case "06":
            month = "June";
            break;
        case "07":
            month = "July";
            break;
        case "08":
            month = "August";
            break;
        case "09":
            month = "September";
            break;
        case "10":
            month = "October";
            break;
        case "11":
            month = "November";
            break;
        case "12":
            month = "December";
            break;
        default:
            month = "Decembruary"
    }

    return `${month} ${day}, ${year}`;
}


function Post() {
    const [postTitle, setPostTitle] = React.useState('Example title');
    const [postDate, setPostDate] = React.useState('April 20, 1969');
    const [postText, setPostText] = React.useState('Lorem ipsum dolor motherfucker')
    const [postTags, setPostTags] = React.useState(['']);

    // Retrieve the details of a post based on its id
    const getPostDetails = async (postID) => {
        try
        {
            var response = await fetch('http://localhost:3001/api/posts/' + postID,
            { method: 'GET', headers: { 'Content-Type': 'application/json' } });

            var res = JSON.parse(await response.text());

            if (res.success)
            {
                setPostTitle(res.details["title"]);
                let dateString = formatDate(res.details["date"])
                setPostDate(dateString);
                setPostText(res.details["body"]);
                setPostTags(res.details["tags"].split(','));
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
                        postTags.map((tag, index) => {
                            return <Tag tag={tag} />;
                        })
                    }
                </div>
                <div id="postAuthorAndDate">
                    <p>By <b>Boston Childs</b></p>
                    <p>{postDate}</p>
                </div>
            </div>
            <p id="postText">{postText}</p>
        </div>
    );
}

export default Post;