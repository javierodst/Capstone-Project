import React from 'react';
import ReactPlayer from 'react-player';
import './VideoList.css';

import { Link, withRouter } from "react-router-dom";
import { Button } from '@material-ui/core';

class VideoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };


    }

    url = "https://nameless-ravine-22066.herokuapp.com/api/video/keep/"
    componentDidMount() {

    }

    handleClick = (id, title, date, keep, path) => {
        console.log("Clicked!");
        this.toogleKeep(id, title, date, keep, path);
    }

    toogleKeep = (id, title, date, keep, path) => {
        console.log(this.url + id);
        let vidBody = {
            '_id': id,
            'title': title,
            'date': date,
            'keep': keep,
            'path': path
        }
        console.log(JSON.stringify(vidBody));
        fetch(this.url + id, {
            method: 'PUT',
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify(vidBody)
        })
            .then(response => {
                this.setState({ httpStatusCode: response.status, httpStatusOk: response.ok });
                if (response.ok) {

                    return response.json();

                }

                else if (response.status === 404) {
                    throw Error("HTTP 404, Not found");
                }

                else {
                    throw Error(`HTTP ${response.status}, ${response.statusText}`);
                }
            })
            .then(responseData => {
                this.setState({ videos: responseData });
            })
            .catch(error => {
                console.log(error);
            })
    }


    render() {
        const videos = this.props.videos.map(({ _id, title, date, keep, path }) => {


            var kept = () => {
                if (keep) {
                    return (
                        <div>
                            <p>Video will be kept</p>
                            <Button onClick={() => this.handleClick(_id, title, date, keep, path)}>UnKeep</Button>
                        </div>

                    );
                }
                else {
                    return (
                        <div>
                            <p>Video is not kept</p>
                            <Button className="btn-keep" onClick={() => this.handleClick(_id, title, date, keep, path)} >Keep</Button>
                        </div>
                    );
                }
            }

            return (
                <div className="videoPage">
                    <div key={_id} className="videos">
                        <div className="title"><strong>{title}</strong></div>
                        <div className="video">
                            <video controls>
                                <source src={path} type="video/mp4" />
                            </video>
                        </div>

                        <div className="video-date"><strong>Date: </strong>{date}</div>

                        <div className="keep">
                            {kept()}
                        </div>

                    </div>
                </div>
            )
        });

        return videos;
    }
}



export default withRouter(VideoList);