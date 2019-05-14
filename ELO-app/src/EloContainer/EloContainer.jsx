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
        const searchURL = await `https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${formData.search}api_key=RGAPI-3a1e1d3b-f252-4d97-94b0-1a802ab0aa83`
        await fetch (searchURL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            this.setState({
                summoner: data.summonerName,
                rank: data.rank,
                wins: data.wins,
                losses: data.losses,
                elo: data.leaguePoints
            })
        })
    }

    render() {
        console.log(this.state, '<- object')
        return (
        <div>
            <SummonerSearchForm getSummoner={this.getSummoner}></SummonerSearchForm>
                <h1>looking at {this.state.summoner}</h1>
                <p>
                rank: {this.state.rank}<br/>
                wins: {this.state.wins}<br/>
                losses: {this.state.losses}<br/>
                elo: {this.state.leaguePoints}
                </p>
            
        </div>
        )
        }
}

export default EloContainer;