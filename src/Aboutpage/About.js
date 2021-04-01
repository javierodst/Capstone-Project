import React from 'react';
import { withRouter } from 'react-router-dom';
import './About.css';
import Header from '../Header/Header.js';

class About extends React.Component {

    render() {
        return (
            <div>
            <Header />
            <div class="background">
            <h2 class="about">About This Project</h2>
            <p class="center">This is a surveillence system web application made for the capstone project for BSD in Seneca College.
            It was made using both hardware and software.
            We used the Raspberry Pi 4 Model B with an attached camera. This is an updated model with a more powerful processor and more RAM. 
            This helped us with the detection of people and objects. We designed a website that the video feed streams to.</p>

           <p class="center"> This web application is made using React and material UI. We have a user account database that is stored on MongoDB and have made a 
               webAPI using node.js that communicates with the database and our front-end react application. We also have a video url database that
               is stored on mongoDB and a webAPI that communicates with the database and our front-end react application. </p>
            <img src="/Images/Seneca-College-Logo.png" alt="seneca" class="seneca"></img>
            </div>
            </div>
        );
    }
};

export default withRouter(About);