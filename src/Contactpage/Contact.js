import React from 'react';
import { withRouter } from 'react-router-dom';
import './Contact.css';
import Header from '../Header/Header.js';

class Contact extends React.Component {

    render() {
        return (
            <div>
            <Header />
            </div>
        );
    }
};

export default withRouter(Contact);