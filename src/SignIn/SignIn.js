import React from 'react';
import Header from '../Header/Header.js';
import SignInSide from './SignInSide.js';

class SignIn extends React.Component {

    render(){
        return(
            <div>
                <Header />
                <SignInSide />
            </div>
        )
    }
}

export default SignIn;