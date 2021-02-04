import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../Header/Header.js';
import ForgotPasswordForm from './ForgotPasswordForm.js';

class ForgotPassword extends React.Component {

    render() {
        return (
            <div>
            <Header />
            <ForgotPasswordForm />
            </div>
        );
    }
};

export default withRouter(ForgotPassword);