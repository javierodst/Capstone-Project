import React from 'react';
import { withRouter } from 'react-router-dom';
import './Home.css';
import Header from '../Header/Header.js';
import Slider from './Slider.js';

class Home extends React.Component {

    render() {
        return (
            <div>
            <Header />
            <Slider />
            </div>
        );
    }
};

//export default Home;
export default withRouter(Home);