import React from 'react';
import { withRouter } from 'react-router-dom';
import './Home.css';
import Header from '../Header/Header.js';
import Slider from './Slideshow.js';


class Home extends React.Component {

    render() {
        return (
            <div>
            <Header />
            <Slider />
            <div class= "head">
       <p class="topic">We are here for you!</p> 
       <p class="topic">With state-of-the-art surveillance systems to ensure 
           you and your company's security.
       </p>
       <p class="topic"> Contact us today for a free consultation.</p>
       </div>
            </div>
        );
    }
};

export default withRouter(Home);