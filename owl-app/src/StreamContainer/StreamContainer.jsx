import React, { Component } from 'react';

class StreamContainer extends Component {
    constructor(){
        super();
        this.state = {
           stats: []
        }
    }
    componentDidMount(){
        this.searchStreams();
    }
     searchStreams = async () => {
            try {
                const response = await fetch('https://api.twitch.tv/helix/streams', {
                    credentials: 'include'
                });
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }
                const streamParsed = await response.json();
                this.setState({
                    stream: streamParsed.data
                })

            } catch (err) {
                console.log(err);
            }
        }
    render(){
        return(
        <div id="twitch-embed"></div>
            <script src="https://embed.twitch.tv/embed/v1.js"></script>
            <script type="text/javascript">
        new Twitch.Embed('twitch-embed', {
                width: 854,
                height: 480,
                channel: "overwatchleague"
          });
            </script>
        )
    }
}


export default StreamContainer;
