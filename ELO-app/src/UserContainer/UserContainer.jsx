import React, { Component } from 'react';

class UserContainer extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            _id: null
        }
    }

    componentDidMount(){
        this.getUser();
    }
    getUser = async () => {
        try {
            const response = await fetch('https://localhost:9000/api/v1/auth', {
                credentials: 'include'
            });
            if(response.status !== 200){
                throw Error(response.statusText);
            }
            const UserParsed = await response.json();
            this.setState({User: UserParsed.data});
        } catch (err) {
            res.send(err)
        }
    }
    addUser = async (User, e) => {
        e.preventDefault();
        console.log(User);
        try{
            const createdMovie = await fetch('localhost:9000/api/v1/auth', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(User)
            });
        } catch (err){
        console.log(err)
    }
    closeAndEdit = async (e) => {
        e.preventDefault();
        try{
            const editResponse = await fetch('http://localhost:900/api/v1/auth', {
                method: 'PUT',
                bio: JSON.stringify(this.state.userToEdit),
                'Content-Type': 'application'
            })

        } catch (err) {
            console.log(err);
        }
    }

    }



}

export default UserContainer;