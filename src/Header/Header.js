import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import './Header.css';

class Header extends React.Component {

    render(){
        return(
            <div class= "Header">
                <div class = "top">
                <div class= "topText">
                {/*<ul>
                    <li>MON-FRI: 6:00 AM - 10:00 PM</li>
                    <li>SAT & SUN: CLOSED</li>
                    <li><a href="/signin">Sign In</a></li>
                </ul> */}
                </div>
                </div>

                <div class= "bottom">

                    <div class = "bottomText">
                    <ul>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/">Home</a></li>
                    <li id = "logo">se<span id="inner">cu</span>renity</li>
                    </ul> 
                     </div>
                </div>

            </div>
        )
    }
}

export default Header;