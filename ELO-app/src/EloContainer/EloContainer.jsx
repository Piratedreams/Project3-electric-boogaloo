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
    callSummoner = async (formData) => {
        console.log(formData)
        const searchURL = await `https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${formData.search}?api_key=RGAPI-bb50fd46-64ff-4da5-a090-51430bb0d889`
        await fetch (searchURL)
        .then((response) => response.accountID)
        .then((data) => {
            console.log(data);
            this.setState({
                summonerID: data.accountID
            });
        });
    }
    getSummoner = async (summonerID) => {
        console.log(summonerID);
        const searchURL = await `https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerID}?api_key=RGAPI-bb50fd46-64ff-4da5-a090-51430bb0d889`
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
            });
        });
    }


    render() {
        console.log(this.state, '<- object')
        return (
        <div>
                <SummonerSearchForm getSummoner={this.getSummoner} name="Access-Control-Allow-Origin"></SummonerSearchForm>
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