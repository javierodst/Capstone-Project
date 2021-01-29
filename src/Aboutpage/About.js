import React from 'react';
import { withRouter } from 'react-router-dom';
import './About.css';
import Header from '../Header/Header.js';

class About extends React.Component {

    render() {
        return (
            <div>
            <Header />
            </div>
        );
    }
};

export default withRouter(About);