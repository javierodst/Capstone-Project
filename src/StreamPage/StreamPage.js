import React, { useState } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './StreamPage.css';


class StreamPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = { playing: false, setStreaming: false };

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

    stopStream = () => {
        this.setState({ playing: false });
        let video = document.getElementsByClassName('feed')[0];
        video.srcObject.getTracks()[0].stop();
    };

    handleError = () => {

    }

    render() {

        return (
            
            <div>

            <div className="main">
              
                
              {/* <h2>Stream</h2>*/}
                <div className="player">
                    
                    {/* <video
                        src={this.state.videoSrc}
                        height={720}
                        width={1280}
                        autoPlay="true"
                        className="feed"
                    >

                    </video> */}

                    <iframe src="http://192.168.0.134:8080/view-stream.html" height="480" width="640" scrolling="no" />

                </div>
{/* 
                <div className="playerInput">
                    {this.state.playing ? (
                        <div>
                            <br />
                            <a onClick={this.stopStream} className="btn stop-btn">Stop</a>
                            &nbsp;&nbsp;&nbsp;
                            <a className="btn screenshot-btn">Screenshot</a>
                        </div>
                    ) : (
                            <div>
                                <br />
                                <a onClick={this.startStream} className="btn start-btn">Start</a>
                            </div>
                        )}
                </div> */}

             </div>
                        
            </div>

        );
    }

};

const CaptureVideo = () => {

}

export default StreamPage;