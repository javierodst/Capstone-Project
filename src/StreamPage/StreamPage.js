import React, { useState } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import AccountHeader from '../AccountHeader/AccountHeader.js';
import Dashboard from '../Dashboard/DashboardMaterial.js';
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

    handleClick = () => {
        var btn = document.getElementById("mybtn");
        if (btn.innerHTML == "Save") btn.innerHTML = "SAVED!";
        else btn.innerHTML = "Save";
        
     }

     handleClick1 = () => {
        var btn = document.getElementById("mybtn1");
        if (btn.innerHTML == "Save") btn.innerHTML = "SAVED!";
        else btn.innerHTML = "Save";
        
     }

     handleClick2 = () => {
        var btn = document.getElementById("mybtn2");
        if (btn.innerHTML == "Save") btn.innerHTML = "SAVED!";
        else btn.innerHTML = "Save";
        
     }

     handleClick3 = () => {
        var btn = document.getElementById("mybtn3");
        if (btn.innerHTML == "Save") btn.innerHTML = "SAVED!";
        else btn.innerHTML = "Save";
        
     }

     handleClick4 = () => {
        var btn = document.getElementById("mybtn4");
        if (btn.innerHTML == "Save") btn.innerHTML = "SAVED!";
        else btn.innerHTML = "Save";
        
     }

     handleClick5 = () => {
        var btn = document.getElementById("mybtn5");
        if (btn.innerHTML == "Save") btn.innerHTML = "SAVED!";
        else btn.innerHTML = "Save";
        
     }

     handleClick6 = () => {
        var btn = document.getElementById("mybtn6");
        if (btn.innerHTML == "Save") btn.innerHTML = "SAVED!";
        else btn.innerHTML = "Save";
        
     }

     handleClick7 = () => {
        var btn = document.getElementById("mybtn7");
        if (btn.innerHTML == "Save") btn.innerHTML = "SAVED!";
        else btn.innerHTML = "Save";
        
     }

     handleClick8 = () => {
        var btn = document.getElementById("mybtn8");
        if (btn.innerHTML == "Save") btn.innerHTML = "SAVED!";
        else btn.innerHTML = "Save";
        
     }

     handleClick9 = () => {
        var btn = document.getElementById("mybtn9");
        if (btn.innerHTML == "Save") btn.innerHTML = "SAVED!";
        else btn.innerHTML = "Save";
        
     }

    render() {

        return (
            
            <div>

               <AccountHeader />

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
                </div>

               <div class="title">
                <h2>Auto Saved Footage</h2>
                <h3>(2020-11-10 10:00am - 2020-11-17 10:00am)</h3>
                <h3>*Please save footage if needed for longer then a week</h3>
                </div>

                    <form action="">
                        <label for="days">Choose a date: &nbsp;</label>
                        <select id="days" name="days" size="1">
                        <option value="1">2020-11-17</option>
                        <option value="2">2020-11-16</option>
                        <option value="3">2020-11-15</option>
                        <option value="4">2020-11-14</option>
                        <option value="5">2020-11-13</option>
                        <option value="6">2020-11-12</option>
                        <option value="7">2020-11-11</option>
                        <option value="8">2020-11-10</option>
                        </select><br></br>
                    </form>
                    

                <div class="thumbnails">
                <div class="hour">
                <video width="325"  height = "200" controls="controls" preload="metadata">
                    <source src="/Videos/practice_11.mp4" type="video/MP4" />
                </video>
                <p>Date: 2020-11-17 &nbsp;&nbsp; 9:00am - 10:00am &nbsp; <button id="mybtn" class="savebtn" type="button" onClick={this.handleClick}>Save</button></p>
                
                </div>
                
                <div class="hour">
                <video width="325" height = "200" controls="controls" preload="metadata">
                    <source src="/Videos/practice_12.mp4" type="video/MP4" />
                </video>
                <p>Date: 2020-11-17 &nbsp;&nbsp; 8:00am - 9:00am &nbsp; <button id="mybtn1" class="savebtn" type="button" onClick={this.handleClick1}>Save</button></p>
                </div>
                
                <div class="hour">
                <video width="325" height = "200" controls="controls" preload="metadata">
                    <source src="/Videos/practice_11.mp4" type="video/MP4" />
                </video>
                <p>Date: 2020-11-17 &nbsp;&nbsp; 7:00am - 8:00am &nbsp; <button id="mybtn2" class="savebtn" type="button" onClick={this.handleClick2}>Save</button></p>
                </div>

                <div class="hour">
                <video width="325" height = "200" controls="controls" preload="metadata">
                    <source src="/Videos/practice_14.mp4" type="video/MP4" />
                </video>
                <p>Date: 2020-11-17 &nbsp;&nbsp; 6:00am - 7:00am &nbsp; <button id="mybtn3" class="savebtn" type="button" onClick={this.handleClick3}>Save</button></p>
                </div>

                <div class="hour">
                <video width="325" height = "200" controls="controls" preload="metadata">
                    <source src="/Videos/practice_10.mp4" type="video/MP4" />
                </video>
                <p>Date: 2020-11-17 &nbsp;&nbsp; 5:00am - 6:00am &nbsp; <button id="mybtn4" class="savebtn" type="button" onClick={this.handleClick4}>Save</button></p>
                </div>

                <div class="hour">
                <video width="325" height = "200" controls="controls" preload="metadata">
                    <source src="/Videos/practice_9.mp4" type="video/MP4" />
                </video>
                <p>Date: 2020-11-17 &nbsp;&nbsp; 4:00am - 5:00am &nbsp; <button id="mybtn5" class="savebtn" type="button" onClick={this.handleClick5}>Save</button></p>
                </div>

                <div class="hour">
                <video width="325" height = "200" controls="controls" preload="metadata">
                    <source src="/Videos/practice_8.mp4" type="video/MP4" />
                </video>
                <p>Date: 2020-11-17 &nbsp;&nbsp; 3:00am - 4:00am &nbsp; <button id="mybtn6" class="savebtn" type="button" onClick={this.handleClick6}>Save</button></p>
                </div>

                <div class="hour">
                <video width="325" height = "200" controls="controls" preload="metadata">
                    <source src="/Videos/practice_5.mp4" type="video/MP4" />
                </video>
                <p>Date: 2020-11-17 &nbsp;&nbsp; 2:00am - 3:00am &nbsp; <button id="mybtn7" class="savebtn" type="button" onClick={this.handleClick7}>Save</button></p>
                </div>

                <div class="hour">
                <video width="325" height = "200" controls="controls" preload="metadata">
                    <source src="/Videos/practice_3.mp4" type="video/MP4" />
                </video>
                <p>Date: 2020-11-17 &nbsp;&nbsp; 1:00am - 2:00am &nbsp; <button id="mybtn8" class="savebtn" type="button" onClick={this.handleClick8}>Save</button></p>
                </div>

                <div class="hour">
                <video width="325" height = "200" controls="controls" preload="metadata">
                    <source src="/Videos/practice_1.mp4" type="video/MP4" />
                </video>
                <p>Date: 2020-11-17 &nbsp;&nbsp; 12:00am - 1:00am &nbsp; <button id="mybtn9" class="savebtn" type="button" onClick={this.handleClick9}>Save</button></p>
                </div>
             </div>
                        
            </div>

            </div>

        );
    }

};

const CaptureVideo = () => {

}

export default StreamPage;