import React, { Component } from 'react';
import CreatePost from '../CreatePost/CreatePost';
import Posts from '../PostList/PostList';
import EditPost from '../EditPost/EditPost'

class PostContainer extends Component {
    constructor(){
        super();
        this.state = {
            Posts: [],
            postToEdit: {
                _id: null,
                title: '',
                body: '',
                date: null
            },
            modalShowing: false
            
        }
    }

    componentDidMount(){
        this.getPost();
    }
    getPost = async () => {
        try {
            const response = await fetch('https://cors-anywhere.herokuapp.com/http://localhost:9000/api/v1/Posts', {
                credentials: 'include'
            });
            if(response.status !== 200){
                throw Error(response.statusText);
            }
            const PostParsed = await response.json();
            this.setState({Posts: PostParsed.data});
            } catch (err) {
            console.log(err)
            }
    }
    
    addPost = async (Posts, e) => {
        e.preventDefault();
        console.log(Posts);
        try{
            const createdPost = await fetch('https://cors-anywhere.herokuapp.com/http://localhost:9000/api/v1/Posts', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(Posts)
            });
        } catch (err){
        console.log(err)
        }
    }
    closeAndEdit = async (e) => {
        e.preventDefault();
        try{
            const editResponse = await fetch('https://cors-anywhere.herokuapp.com/http://localhost:9000/api/v1/Posts', {
                method: 'PUT',
                credentials: 'include',
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
    showModal = (Posts) => {
        console.log(Posts, '<--in modal')
        this.setState({
            modalShowing: true,
            postToEdit: Posts
        });
    }
    deletePost = async (id, e) => {
        console.log(id, '<-- ID')
        e.preventDefault();
        try{
            const deletePost = await fetch('https://cors-anywhere.herokuapp.com/http://localhost:9000/api/v1/Posts' + id, {
                method: 'DELETE',
                credentials: 'include'
            });
            console.log('inside try')
            const deletePostJson = await deletePost.json();
            this.setState({movies: this.state.Posts.filter((movie, i) => Posts._id !== id)});
            
        } catch (err) {
            console.log(err, ' error')
        }
    }
    render() {
        console.log(this.state, '<------ state object')
        return (
            <div>
                <CreatePost addPost={this.addPost}/>
                <Posts posts={this.state.Posts} showModal={this.showModal} deletePost={this.deletePost}/>
                {this.state.modalShowing ? <EditPost postToEdit={this.state.PostToEdit} closeAndEdit={this.closeAndEdit} handleFormChange={this.handleFormChange}/> : null}
            </div>
        )
    }
}


export default PostContainer;