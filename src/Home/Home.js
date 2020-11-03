import React from 'react';
import { withRouter } from 'react-router-dom';

class Home extends React.Component {

    render() {
        return (
            <div>
                <h1>TEST</h1>
                <Car />
            </div>
        );
    }
};

const Car = () => {
    return (
        <div>
            <p>High</p>
        </div>
    );
}
export default withRouter(Home);