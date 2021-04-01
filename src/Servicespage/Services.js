import React from 'react';
import { withRouter } from 'react-router-dom';
import './Services.css';
import ServiceCard from './ServiceCard.js';
import Header from '../Header/Header.js';

class Services extends React.Component {

    render() {
        return (
            <div>
            <Header />
            <div class="background">
            <h2 class="services">Services We Offer</h2>


            <ServiceCard image="/Images/consult.jpeg" title="Free Consultations"   
            description="Don't know what you need for your security? we are happy to discuss it with you. Free of charge.
            "
           />
            <ServiceCard image="/Images/instal.jpeg" title="Surveillance Camera Installation" 
            description="We do all the heavy lifting. We can install your camera's in any place you want. We are here for you."
            />
            <ServiceCard image="/Images/service.jpeg" title="Software Guide / Customer Service" 
            description="Need help with understanding the software? or any other questions about our service. We are here." 
            />
            </div>
            </div>
        );
    }
};

export default withRouter(Services);