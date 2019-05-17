import React, { Component } from 'react';

const Posts = (props) => {
    const postList = props.posts.map((Posts) => {
        return (
            <ul>
            <li key={Posts._id}>
            <span>{Posts.title}</span><br/>
            <span>{Posts.date}</span><br/>
            <span>{Posts.body}</span><br/>
            <button onClick={props.deletePost.bind(null, Posts._id)}>Delete</button>
            <button onClick={props.showModal.bind(null, Posts)}>Edit</button>
            </li>
            </ul>
        )
    });
    return postList;
}

export default Posts;