import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

const PostList = () => {
    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4000/posts');
    
        setPosts(res.data);
    };

    // to show the list only once and when in the component lifecycle
    //empty array to tell react to run it only once
    useEffect(() => {
        fetchPosts();
    }, []);

    //return html to show posts
    //object.values - is a built in object that ties all values inside posts
    // and for every post from the list of posts, we will map jsx with every post
    const renderedPosts = Object.values(posts).map(post => {
        return ( 
            <div 
                className = "card" 
                style={{ width: '30%', marginBottom: '20px' }} 
                key={post.id}
            >
                <div className="card-body">
                    <h3>{post.title}</h3>
                    <CommentList postId = {post.id} />
                    <CommentCreate postId = {post.id} />
                </div>
            </div>
        );
    })

    // overall component  
    return (
    <div 
        className="d-flex flex-row flex-wrap justify-content-between">
            {renderedPosts}
    </div>
    );
};

export default PostList;