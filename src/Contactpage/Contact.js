import React from 'react';
import { withRouter } from 'react-router-dom';
import './Contact.css';
import Header from '../Header/Header.js';
import MediaCard from './ContactCard.js';
import {withStyles} from "@material-ui/core/styles";


class Contact extends React.Component {
    constructor(props) {
        super(props);
      }

    render() {
        return (
            <div>
            <Header />
            <div class="background">
            <h1 class="center">Contact Us</h1>
            <MediaCard image="/Images/javier_red.jpg" name="Javier Ayala-Ruiz" role="Hardware and Video Streaming" description="Using a Rasbperry Pi with a video camera attached to it
            , openCV, and python, implemented the video camera hardware to stream to the web application into a user's account. Created the database for
            storing video URL's and the video api. The video url database is stored using MongoDB.
           
            
            " email="jayala-ruiz@myseneca.ca" 
           />
            <MediaCard image="/Images/serach_red.jpg" name="Serach Boes" role="User Functionality and Front-End Design" description="Implemented and designed the Front-end using 
            Material-Ui and the JavaScript library React. Using Node.js created a web API to allow communication between the User accounts database
            and the react web application. The user accounts database is stored using MongoDB." email="saboes@myseneca.ca"
            />
            <MediaCard image="/Images/chris_red.jpg" name="Christian Costantino" role="Delete Video Functionality" description="Implemented 
            the 
            delete 
            video 
            functionality
            
            
            
            " email="ccostantino@myseneca.ca" 
            />
            </div>
            </div>
        );
    }
};

export default withRouter(Contact);