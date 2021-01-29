import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import {Button} from '@material-ui/core';
import './Header.css';
import {withStyles} from "@material-ui/core/styles";
import history from '../history';

  const styles = () => ({
    button: {
        display: 'block',
        position: 'relative',
        right: '20px',
        textalign: 'center',
        cursor: 'pointer',
        outline: 'none',
        border: 'none',
        borderradius: '15px',
        boxshadow: '0 9px #999',
        fontWeight: 'bold',
        float: 'right', //CAUSES DISABLED BUTTON
        marginRight: '70px',
        marginTop: '10px',  
      backgroundColor: "white",
      color: "rgb(13, 45, 62);",
      "&:hover": {
        backgroundColor: "#823038",
        color: "white",
      },
      position: "relative",
     /* bottom: 20,
      right: 20*/
    }
  });

  const redirect = () => {
    history.push("/signin");
}
  

// We can use inline-style to overide styles from material UI
/*const buttonStyle = {  //to change sign in button color and text
    background: '#FFFFFF',
        "&:hover": {
          backgroundColor: "blue"
        },
    color: 'rgb(13, 45, 62)',
    position: 'relative',
    right: '20px',
    textalign: 'center',
    cursor: 'pointer',
    outline: 'none',
    border: 'none',
    borderradius: '15px',
    boxshadow: '0 9px #999',
    fontWeight: 'bold',
    /*float: 'right',*/ //CAUSES DISABLED BUTTON
  /*  marginRight: '70px',
    marginTop: '10px'
};*/

const clockStyle = {
    position: 'relative',
    top: '5px'
}

const innerStyle = {
    color: '#823038'
}

class Header extends React.Component {
    constructor(props) {
        super(props);
      }

    render(){
        return(
            <div class= "Header">
                <div class = "top">
             <p>                   
                <span class = "hours">
                <AccessTimeIcon size="small" style={clockStyle}/>     MON-FRI: 6:00 AM - 10:00 PM          SAT & SUN: CLOSED
                </span>
                <Button onClick={redirect} variant="contained" color="secondary" size="small" className={this.props.classes.button}>
          Sign In
        </Button>

                </p>
                </div>

                <div class= "bottom">

                    <div class = "bottomText">
                    <ul>
                    <li class="link"><a href="/contact">Contact</a></li>
                    <li class="link"><a href="/services">Services</a></li>
                    <li class="link"><a href="/about">About</a></li>
                    <li class="link"><a href="/">Home</a></li>
                    <li id = "logo">se<span id="inner" style={innerStyle}>cu</span>renity</li>
                    </ul> 
                     </div>
                </div>

            </div>
        )
    }
}

export default withStyles(styles)(Header);