import React from 'react';
import { Redirect} from 'react-router-dom';
import Header from '../Header/Header.js';
import SignUpMaterial from './SignUpMaterial.js';

class SignIn extends React.Component { 

    constructor(props) {
        super(props);
        this.state = {
          isSignedUp: false // <-- initialize the signup state as false
        }
    }


    userSignedUp = isSignedUp => {
        this.setState({isSignedUp: isSignedUp})
    }

    render(){

        if (this.state.isSignedUp) {
            // redirect to home if signed up
            return <Redirect to = {{ pathname: "/signin" }} />;
        }

        return(
            <div>
                <Header />
                <SignUpMaterial userSignedUp={true}/>
            </div>
        )
    }
}

export default SignIn;