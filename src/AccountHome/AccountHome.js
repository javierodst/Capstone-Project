import React from 'react';
import './AccountHome.css';

class AccountHome extends React.Component {

    render(){
        return(
            <div class = "main">
                <p id = "your">Your Account</p>
                <p id = "welcome"> Welcome to your Account!</p>
            </div>
        )
    }
}

export default AccountHome;