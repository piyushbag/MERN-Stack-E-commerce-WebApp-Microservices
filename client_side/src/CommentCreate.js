//Import packages
//Keywords - JSX, Babel transpiles JSX to use React
// diff bet transpilers and compilers:
//1. transiplers a subset of compiler and whatever it converts it has to go through a
// compiler/interpreter again. eg. Babel: converts ES6+ to ES5
//2. converts one source file to another
// useState, useEffect, useContext - React Hooks concept
import React, { useState } from 'react';
import axios from 'axios';


// 23. Creating Comments
//postID is props, receiving from PostList beacuse
//every comment created or listed would be under
// specific list
const CommentCreate = ({postId}) => {
    //concept of hooks
    //content - current state of the content
    //setContent - is the method that will allow us to update the content state
    const [content, setContent] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post(`http://localhost:4001/posts/${postId}/comments`,{
            content
        });

        setContent('');
    };

    //React.createElement('div',null); Babel transpiles JSX to React
    return (
        <div>
            <form onSubmit = {onSubmit}>
                <div className = "form-group">
                    <label>New Comment</label>
                    <input
                        value = {content}
                        onChange = {(e) => setContent(e.target.value)}
                        className = "form-control">
                    </input>
                </div>
                <br></br>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default CommentCreate;