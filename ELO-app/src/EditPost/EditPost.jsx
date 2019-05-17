import React, { Component } from 'react';

const EditPost = (props) => {
    return (
        <div>
            <h3>Edit Post</h3>
            <form onSubmit={props.closeAndEdit}>
            <label>
                Edit Title:
                <input type='text' name='title' onChange={props.handleFormChange} value={props.postToEdit.title}/>
            </label>
            <label>
                Edit Body:
                <input type='text' name='body' onChange={props.handleFormChange} value={props.postToEdit.body}/>
            </label>
            <input type='submit'/>
            </form>
        </div>
    )
}

export default EditPost;