/*Using Material-UI -> React UI framework */
import React, { useState, useEffect } from 'react';
import './SignIn.css';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {withStyles} from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import history from '../history';
import { red } from '@material-ui/core/colors';
import auth from '../ProtectedRoutes/auth';

// We can use inline-style to overide styles
const buttonStyle = {  //to change signin button color
    background: 'rgb(13, 45, 62)',
};

const textStyle = { //to change signin text color
    color: 'rgb(13, 45, 62)',
};

const iconStyle = { //to change signin icon color
    background: '#823038',/*#753742 *//**#AA5042 */
};

const eyeStyle = {
  top: '-52px', //different position then signup page icon
};

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        SeCUrenity
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

//properties with default values
const initialValues = {
  email: '',
  cpassword: '',
  //error messages
    errors: {
      email: ''
  }
};

const formValid = (errors) => {
  let valid = true;

  Object.values(errors).forEach(
    val => { val.length > 0 && (valid = false);
    //if we have an error string set valid to false
    });

  return valid;
}  

//email regexp
const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);


export default function SignInSide() {

  //deconstructing objects
  const classes = useStyles();
  const [values, setValues] = useState(initialValues);

  const handleInputChange = event =>{
    event.preventDefault();
    const {name, value} = event.target
    setValues({
      ...values,
      [name]:value
    });

    /*console.log("Name: ", name);
    console.log("Value: ", value);*/

    switch (name) {
      case "email":
        values.errors.email = 
        validEmailRegex.test(value) 
        ? ""
        : "invalid email address";
      break;  
      default:
      break;
    }

    console.log(values);

  };

  axios.defaults.withCredentials = true;

  const submit = event =>{
    event.preventDefault(); //stops form from submitting by itself
        //payload is the data that you are sending
          const payload = {
            email: values.email,
            cpassword: values.cpassword
        };
    
    //only creates user account if passwords match and form is valid
    if( formValid(values.errors) && (payload.email != '') && (payload.cpassword != '')){  

      //make http call, default uses get
      axios({
        url: 'http://localhost:8080/api/login',
        method: 'POST',
        data: payload
      })
      .then/*(()=> {
        console.log('Data has been sent to the server');
      })*/( res => { 
        if(res.status === 200){
          console.log('Data has been sent to the server');
          const sessionfname = res.data.user.firstName;
          const sessionlname = res.data.user.lastName;
          const sessionemail = res.data.user.email;
          const sessionuname = res.data.user.username;
          const sessioncname = res.data.user.companyname;

          localStorage.setItem('sessionfname', sessionfname);
          localStorage.setItem('sessionlname', sessionlname);
          localStorage.setItem('sessionemail', sessionemail);
          localStorage.setItem('sessionuname', sessionuname);
          localStorage.setItem('sessioncname', sessioncname);
        //  localStorage.setItem('sessionauth', true);
          auth.login(() => { history.push("/dashboard");});
          //history.push("/dashboard");
        }
      })
      .catch(()=> {
        console.log('Internal Server Error');
      });
    }
    else {
      //error message, can add a fancy css pop up
     console.error("FORM INVALID --");
    }
};

//if refresh the page user stays logged in
useEffect(()=> {
  axios.get("http://localhost:8080/api/login").then((response) =>{
    console.log(response);
  })
}, [])

//for password visibilityOn/Off
const usePasswordToggle2 = () => {
  const [visible, setVisibility] = useState(false);

  const Icon = (
  <FontAwesomeIcon
      icon = {visible ? "eye-slash" : "eye" }
      onClick={() => setVisibility(visibility => !visibility)}
  />
  )

  const InputType = visible ? "Text" : "Password";

  return [InputType, Icon];

};

const [PasswordInputType, ToggleIcon2] = usePasswordToggle2();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar} style={iconStyle}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={submit} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            value={values.email}
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleInputChange}
          />
          {values.errors.email.length > 0 && (
            <span className="errormsg">{values.errors.email}</span>
          )}
          <TextField
            variant="outlined"
            margin="normal"
            value={values.cpassword}
            required
            fullWidth
            name="cpassword"
            label="Password"
            type={PasswordInputType}
            id="cpassword"
            autoComplete="current-password"
            onChange={handleInputChange}
          />
          <span className="password-toggle-icon" style={eyeStyle}>
            {ToggleIcon2}
          </span>
          
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button 
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            style={buttonStyle}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/forgotpassword" variant="body2" style={textStyle}>
                Forgot your password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2" style={textStyle}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}