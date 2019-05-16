import React, { Component } from 'react';
import CreatePost from '../CreatePost';
import Posts from '../PostList';
import EditPost from '../EditPost'

class PostContainer extends Component {
    constructor(){
        super();
        this.state = {
            Postname: '',
            password: '',
            _id: null
        }
    }

    componentDidMount(){
        this.getPost();
    }
    getPost = async () => {
        try {
            const response = await fetch('https://localhost:9000/api/v1/post', {
                credentials: 'include'
            });
            if(response.status !== 200){
                throw Error(response.statusText);
            }
            const PostParsed = await response.json();
            this.setState({Post: PostParsed.data});
            } catch (err) {
            res.send(err)
            }
    }
    
    addPost = async (Post, e) => {
        e.preventDefault();
        console.log(Post);
        try{
            const createdMovie = await fetch('localhost:9000/api/v1/posts', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(Post)
            });
        } catch (err){
        console.log(err)
        }
    }
    closeAndEdit = async (e) => {
        e.preventDefault();
        try{
            const editResponse = await fetch('http://localhost:900/api/v1/posts', {
                method: 'PUT',
                bio: JSON.stringify(this.state.postToEdit),
                'Content-Type': 'application'
            })

        } catch (err) {
            console.log(err);
        }
    }
    handleFormChange = (e) => {
        this.setState({
            postToEdit: {
                ...this.state.postToEdit,
                [e.target.name]: e.target.value
            }
        })
    }
    showModal = (post) => {
        Console.log(post, '<--in modal')
        this.setState({
            modalShowing: true,
            postToEdit: post
        });
    }
    deletePost = async (id, e) => {
        console.log(id, '<-- ID')
        e.preventDefault();
        try{
            const deletePost = await fetch('http://localhost:9000/api/v1/posts' + id, {
                method: 'DELETE'
            });
            console.log('inside try')
            const deletePostJson = await deletePost.json();
            this.setState({movies: this.state.post.filter((movie, i) => post._id !== id)});
            
        } catch (err) {
            console.log(err, ' error')
        }
    }
    render() {
        console.log(this.state, '<------ state object')
        return (
            <div>
                <CreatePost addPost={this.addPost}/>
                <Post posts={this.state.Posts} showModal={this.showModal} deletePost={this.deletePost}/>
                {this.state.modalShowing ? <EditPost postToEdit={this.state.postToEdit} closeAndEdit={this.closeAndEdit} handleFormChange={this.handleFormChange}/> : null}
            </div>
        )
    }
}


export default PostContainer;