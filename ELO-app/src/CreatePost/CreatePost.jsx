import React, { Component } from 'react';

class CreatePost extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            date: '',
            body: ''
        }
    }
    updatePost = (e) => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value})
    }
    render() {
        return (
            <form onSubmit={this.props.addPost.bind(null, this.stae)}>
            <label>
                Post Title:
                <input type='text' name='title' onChange={this.updatePost}/>
            </label>
            <label>
                Text Body:
                <input type='text' name='description' onChange={this.updatePost}/>
            </label>
            <label>
                Date:
                <input type='date' name='date' onChange={this.updatePost}/>
            </label>
            <button type='submit'/>
            </form>
        )
    }
}

export default CreatePost;