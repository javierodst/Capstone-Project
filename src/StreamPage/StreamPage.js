import React, { useState } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './StreamPage.css';

class StreamPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = { playing: false, setStreaming: false, videoSrc: null };

    };

    componentDidMount = () => {

    }

    startStream = () => {
        this.setState({ playing: true });
        navigator.getUserMedia({
            video: true,
        },
            (stream) => {
                let video = document.getElementsByClassName('feed')[0];
                if (video) {
                    video.srcObject = stream;
                };
            },
            (err) => console.log(err)
        );
    };

    stopVideo = () => {
        this.setState({ playing: false });
        let video = document.getElementsByClassName('feed')[0];
        video.srcObject.getTracts()[0].stop();
    };

    handleError = () => {

    }

    render() {

        return (
            <div className="main">
                <h2>Stream</h2>
                <div className="player">

                    <video
                        src={this.state.videoSrc}
                        height={720}
                        width={1280}
                        autoPlay="true"
                        className="feed"


                    >

                    </video>


                </div>

                <div className="playerInput">
                    {this.state.playing ? (
                        <button onClick={this.stopStream}>Stop</button>
                    ) : (
                            <button onClick={this.startStream}>Start</button>
                        )}
                </div>

            </div>

        );
    }

};

const CaptureVideo = () => {

}

export default StreamPage;