import React, { Component } from 'react';
import SummonerSearchForm from './SummonerSearchForm/SummonerSearchForm';

class EloContainer extends Component {
    constructor(){
        super();
        this.state = {
            summonerName: '',
            rank: '',
            elo: 0
        }
    }
    componentDidMount(){
        this.getSummoner();
    }
    getSummoner = async () => {
        try {
            const response = await fetch('https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/RiotSchmick?api_key=RGAPI-3a1e1d3b-f252-4d97-94b0-1a802ab0aa83', {
                credentials: 'include'
            });
            if(response.status !== 200){
                throw Error(response.statusText);
            }
            const summonerParsed = await response.json();
            this.setState({summoner: summonerParsed.data});
        } catch (err){
            console.log(err);
        }
    }

    render() {
        console.log(this.state, '<- object')
        return (
        <div>
            <SummonerSearchForm></SummonerSearchForm>
            {this.state.summoner}
        </div>
        )
        }
}

export default EloContainer;