import React from 'react';
import './AccountHeader.css';

class AccountHeader extends React.Component {

    render(){
        return(
            <div class= "accountHeader">
                <div class = "top">
                <div class= "topText">Signed In</div>
                </div>

                <div class= "bottom">

                    <div class = "bottomText">
                    <ul>
                    <li><a href="/account">Home</a></li>
                    <li><a href="/stream">View Camera</a></li>
                    <li><a href="/footage">Saved Footage</a></li>
                    <li id = "logo">se<span id="inner">cu</span>renity</li>
                    </ul> 
                     </div>
                </div>

            </div>
        )
    }
}

export default AccountHeader;