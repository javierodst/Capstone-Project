import React from 'react';
import Header from '../Header/Header.js';
import SignUpMaterial from './SignUpMaterial.js';

class SignIn extends React.Component {

    render(){
        return(
            <div>
                <Header />
                <SignUpMaterial />
            </div>
        )
    }
}

export default SignIn;