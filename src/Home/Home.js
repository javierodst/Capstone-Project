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
            <img src="/Images/porch.jpg" alt="banner" class="banner"></img>
            <p class="text">We Are Here</p>
            <p class="text">For Your Peace</p>
            <p class="text">Of Mind</p>
            </div>
        );
    }
};

//export default Home;
export default withRouter(Home);