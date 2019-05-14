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
            const response = await fetch('https://localhost:9000/api/v1/User', {
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
            const createdMovie = await fetch('localhost:9000/api/v1/User', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(User)
            });
        } catch (err){
        console.log(err)
    }
    
    }



}

export default UserContainer;