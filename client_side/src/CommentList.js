//24. Displaying comments
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentList = ({ postId }) => {
    const [comments, setComments] = useState([]);

    const fetchData = async () => {
        const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`); 
    
        setComments(res.data);
    };

    useEffect(() => {
        fetchData();
    });

    const renderedComments = comments.map((comment) => {
        return <li key={comment.id}>{comment.content}</li>;
    });

    return <ul>{renderedComments}</ul>;
};

export default CommentList;

//Chapter 26, 27, 28, 29, 30: Async Communication solution for a problem
//Problem: For every post display, n no. of comment requests is made for a sinle post
// display.
//Single post to display should have single request of comment to fetch
//all comments