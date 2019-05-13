import React, { Component } from 'react';



const EMBED_URL = 'https://embed.twitch.tv/embed/v1.js';

class StreamContainer extends Component {
    componentDidMount() {
        let embed;
        const script = document.createElement('script');
        this.setState(
            'src',
            EMBED_URL
        );
        this.addEventListener('load', () => {
            embed = new window.Twitch.Embed(this.props.targetID, { ...this.props });
        });
        document.body.appendChild(script);
    }

    render() {

        return (
            <div>
                StreamContainer {this.props.targetID} {this.props.width} {this.props.height}
                <div id={this.props.targetID}>test</div>
            </div>
        )
    }
}

StreamContainer.defaultProps = {
    targetID: 'twitch-embed',
    width: '940',
    height: '480',
    channel: 'riotgames'
}




export default StreamContainer;