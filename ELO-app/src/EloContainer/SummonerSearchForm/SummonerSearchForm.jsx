import React, { Component } from 'react';


class SummonerSearchForm extends Component {
    constructor() {
        super();
        this.state = {
            search: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.getSummoner(this.state);
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
            Search for a summoner <input onChange={this.handleChange} type='text' name='search' />
            <input type='submit' />
            </form>
        )
    }
}


export default SummonerSearchForm;