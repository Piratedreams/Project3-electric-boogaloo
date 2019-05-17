import React, { Component } from 'react';
import CreatePost from '../CreatePost/CreatePost';
import Posts from '../PostList/PostList';
import EditPost from '../EditPost/EditPost';

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
            const searchURL = await 'http://localhost:9000/api/v1/Posts/'
            await fetch(searchURL)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    title: data.postToEdit.title,
                    body: data.postToEdit.body,
                    date: data.postToEdit.date
                })
            })
            } catch (err) {
            console.log(err)
            }
    }
    
    addPost = async (Posts, e) => {
        e.preventDefault();
        console.log(Posts);
        try{
            const createdPost = await fetch('http://localhost:9000/api/v1/Posts/', {
                method: 'POST',
                Posts : JSON.stringify(Posts)
            });
            const parsedResponse = await createdPost.json();
            console.log(parsedResponse)
            this.setState({Posts: [...this.state.Posts, parsedResponse.data]})
        } catch (err){
        console.log(err)
        }
    }
    closeAndEdit = async (e) => {
        e.preventDefault();
        try{
            const editResponse = await fetch(`http://localhost:9000/api/v1/Posts/${this.state.postToEdit._id}`, {
                method: 'PUT',
                bio: JSON.stringify(this.state.postToEdit),
                'Content-Type': 'application'
            })
            const parsedResponse = await editResponse.json();
            const editPostArray = this.state.Posts.map((Posts) => {
                if(Posts._id === this.state.postToEdit._id) {
                    Posts = parsedResponse.data;
                }
                return Posts
            });
            this.setState({
                Posts: editPostArray,
                modalShowing: false
            });

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
            const deletePost = await fetch('http://localhost:9000/api/v1/Posts/' + id, {
                method: 'DELETE'
            });
            console.log('inside try')
            const deletePostJson = await deletePost.json();
            this.setState({Posts: this.state.Posts.filter((Posts, i) => Posts._id !== id)});
            
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
                {this.state.modalShowing ? <EditPost postToEdit={this.state.postToEdit} closeAndEdit={this.closeAndEdit} handleFormChange={this.handleFormChange}/> : null}
            </div>
        )
    }
}


export default PostContainer;