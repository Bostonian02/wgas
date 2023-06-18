import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import buildPath from "../components/BuildPath";

const MakePost = () => {
    const TAGS = ["Games", "Shows", "Movies", "Tech", "School", "Projects", "Personal"]
    const editorRef = useRef(null);
    const [postText, setPostText] = React.useState('');
    const [postTitle, setPostTitle] = React.useState('');
    const [postPrevImg, setPostPrevImg] = React.useState(null);
    const [tags, setTags] = React.useState('');
    const [checkedState, setCheckedState] = React.useState(new Array(TAGS.length).fill(false));

    React.useEffect(() => {
        generateTagString();
    }, [checkedState]);

    const generateTagString = () => {
        let tagString = '';
        for (let i = 0; i < TAGS.length; i++)
        {
            if (checkedState[i] === true)
            {
                tagString = tagString.concat((tagString === '' ? TAGS[i] : ',' + TAGS[i]));
            }
        }
        setTags(tagString);
    }

    const uploadImage = (img) => {
        const formData = new FormData();
        formData.append('image', img);
        
        // Send the image to the endpoint
        fetch(buildPath('/api/posts/upload'), { method: 'post', body: formData })
            .then(response => response.text())
            .then(data => {
                console.log(data);
            })
            .catch(e => {
                console.log(e);
                throw e;
            })
    }

    const post = () => {
        uploadImage(postPrevImg);
        let data =  { title: postTitle, body: postText.replace(/\r?\n|\r/g, ''), preview_image_url: '/images/thumbnails/' + postPrevImg.name, tags: tags };
        console.log(data);
        let json = JSON.stringify(data);
        
        // Andddddddd ... post!
        fetch(buildPath('/api/posts'), { method: 'post', body: json, headers: { 'Content-Type': 'application/json' } })
            .then(response => response.json())
            .then(data => {
                if (!data.success)
                {
                    console.log(data.error);
                }
            })
            .catch(e => {
                console.log(e);
                throw e;
            })
    }

    const handleTagBoxChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
    }

    return (
        <div>
            <input type="text" value={postTitle} onChange={(event) => setPostTitle(event.target.value)}></input>
            <Editor
                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue='<p>Put post text here.</p>'
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | image | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family: Helvetica, Arial, sans-serif; font-size: 20px }'
                }}
                onEditorChange={(text, editor) => setPostText(text)}
            />
            <div id="tagChecklist">
                { TAGS.map((tag, index) => {
                    return (
                        <div key={index}>
                            <input
                                type="checkbox"
                                id={index}
                                name={tag}
                                value={tag}
                                checked={checkedState[index]}
                                onChange={() => handleTagBoxChange(index)}
                            />
                            {tag}
                        </div>
                    );
                })}
            </div>
            <div id="postImgSelect">
                { postPrevImg && (
                    <div>
                        <img
                            alt="not found"
                            width={"250px"}
                            src={URL.createObjectURL(postPrevImg)}
                        />
                        <br />
                        <button onClick={() => setPostPrevImg(null)}>Remove</button>
                    </div>
                )}
                <br />
                <br />
                <input
                    type="file"
                    name="postPrevImg"
                    onChange={(event) => {
                        setPostPrevImg(event.target.files[0]);
                    }}
                />
            </div>
            <button onClick={() => { if (window.confirm("Are you sure you want to post?")) post() }}>Make post</button>
        </div>
    );
}

export default MakePost;