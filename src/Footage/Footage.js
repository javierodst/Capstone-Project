import React from 'react';
import DashboardMaterial from '../Dashboard/DashboardMaterial.js';
import FootageInfo from './FootageInfo.js';
import { withRouter } from 'react-router-dom';

class Footage extends React.Component {

    state = { videos: [] };

    url = "https://nameless-ravine-22066.herokuapp.com/api/videos";

    componentDidMount() {
        fetch(this.url)
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
        return (
            <div>
                <DashboardMaterial name="Automatically Recorded Footage" componentToPassDown={<FootageInfo videos={this.state.videos} />} />
            </div>
        );
    }
};

export default withRouter(Footage);