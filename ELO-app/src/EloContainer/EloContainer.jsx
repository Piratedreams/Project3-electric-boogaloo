import React, { Component } from 'react';

class EloContainer extends Component {
    constructor(){
        super();
        this.state = {
            summonerName = '',
            rank = '',
            elo = 0
        }
    }
    componentDidMount(){
        this.getSummoner();
    }
    getSummoner = async () => {
        try {
            const response = await fetch('https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/RiotSchmick?api_key=RGAPI-3e86348c-59f5-413f-bad6-42ce1adbb9d3', {
                credentials: 'include'
            });
            if(response.status !== 200){
                throw Error(response.statusText);
            }
            const summonerParsed = await response.json();
            this.setState({movies: moviesParsed.data});
        } catch (err){
            console.log(err);
        }
    }

    render() {
        console.log(this.state, '<- object')
        return (
        <div>
            {this.state.getSummoner}
        </div>
        )
    }
}

export default EloContainer;