import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { Button, withTheme } from '@material-ui/core';
import './Header.css';

// We can use inline-style to overide styles from material UI
const buttonStyle = {  //to change sign in button color and text
    background: '#FFFFFF',
    color: 'rgb(13, 45, 62)',
    position: 'relative',
    right: '20px',
    padding: '15px 25px',
    textalign: 'center',
    cursor: 'pointer',
    outline: 'none',
    border: 'none',
    borderradius: '15px',
    boxshadow: '0 9px #999'
};


const clockStyle = {
    position: 'relative',
    top: '5px'
}

class Header extends React.Component {
    render(){
        return(
            <div class= "Header">
                <div class = "top">
                <span class= "topText">
                <a href="/signin">
                <Button variant="contained" size="small" style={buttonStyle}>Sign In</Button>
                </a>
                </span>
                <span class = "hours">
                <p><AccessTimeIcon size="small" style={clockStyle}/>     MON-FRI: 6:00 AM - 10:00 PM          SAT & SUN: CLOSED</p>
                </span>
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