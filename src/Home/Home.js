import React from 'react';
import { withRouter } from 'react-router-dom';
import './Home.css';
import Header from '../Header/Header.js';

class Home extends React.Component {

    render() {
        return (
            <div>
                 <Header />
                 <img src="/Images/banner.jpg" alt="banner" class="banner"></img>
                
            </div>
        );
    }
};

//export default Home;
export default withRouter(Home);