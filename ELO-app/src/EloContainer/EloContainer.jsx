import React, { Component } from 'react';
import SummonerSearchForm from './SummonerSearchForm/SummonerSearchForm';

class EloContainer extends Component {
    constructor(){
        super();
        this.state = {
            summoner: '',
            rank: '',
            elo: 0
        }
    }
    componentDidMount(){
        this.getSummoner({ search: ''})
    }
    getSummoner = async (formData) => {
        console.log(formData);
        const searchURL = await `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${formData.search}api_key=RGAPI-3a1e1d3b-f252-4d97-94b0-1a802ab0aa83`
        await fetch (searchURL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            this.setState({
                summoner: data.summonerName,
                rank: data.rank,
                
            })
        })
    }

    render() {
        console.log(this.state, '<- object')
        return (
        <div>
            <SummonerSearchForm getSummoner={this.getSummoner}></SummonerSearchForm>
            {this.state.summoner}
        </div>
        )
        }
}

export default EloContainer;