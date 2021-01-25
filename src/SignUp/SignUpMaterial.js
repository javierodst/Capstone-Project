import React, { useState, useEffect } from 'react';
import './SignUpMaterial.css';
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
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { red } from '@material-ui/core/colors';
import { Redirect} from 'react-router-dom';

// We can use inline-style to overide styles
const buttonStyle = {  //to change signin button color
    background: 'rgb(13, 45, 62)',
};

const textStyle = { //to change signin text color
    color: 'rgb(13, 45, 62)',
};

const iconStyle = { //to change signin icon color
    background: '#3e0d14',
};

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        seCUrenity
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

//properties with default values
const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  username: '',
  companyname: '',
  password: '',
  cpassword: '',
  //error messages
    errors: {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      companyname: '',
      password: '',
      cpassword: ''
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

const passwordRequirements = 
  RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

export default function SignUpMaterial() {

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
      case "firstName":
        values.errors.firstName = 
        value.length < 2  
        ? "minimum 2 characters required"
        : "";
      break;
      case "lastName":
        values.errors.lastName = 
        value.length < 3 
        ? "minimum 3 characters required"
        : "";
      break;
      case "email":
        values.errors.email = 
        validEmailRegex.test(value) 
        ? ""
        : "invalid email address";
      break;
      case "username":
        values.errors.username = 
        value.length < 3 
        ? "minimum 3 characters required"
        : "";
      break;
      case "companyname":
        values.errors.companyname = 
        value.length < 2  
        ? "minimum 2 characters required"
        : "";
      break;
      case "password":
        values.errors.password = 
        passwordRequirements.test(value) 
        ? ""
        : "Password must contain at least 1 lowercase character, 1 uppercase character, 1 number, 1 special character, and be at least eight characters long";
      break;  
      case "cpassword":
        values.errors.cpassword = 
        (value == values.password)
        ? ""
        : "passwords do not match";
      break;
      default:
      break;
    }

    console.log(values);

    //update our state of our formerrors object, dynamically reset name and values as user inputs
    /*setValues({
      formErrors,
      [name]:value
    }, () => console.log(values)); */
    //add a callback to do something after the state updates, example console sate

  };

  const submit = event =>{
    event.preventDefault(); //stops form from submitting by itself
        //payload is the data that you are sending
          const payload = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            username: values.username,
            companyname: values.companyname,
            cpassword: values.cpassword
        };
    
    //only creates user account if passwords match and form is valid
    if( formValid(values.errors)){  

      //make http call, default uses get
      axios({
        url: 'http://localhost:8080/api/register',
        method: 'POST',
        data: payload
      })
      .then(()=> {
        console.log('Data has been sent to the server');
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

//for password visibilityOn/Off
  const usePasswordToggle = () => {
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

  const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  const [ConfirmPasswordInputType, ConfirmPasswordToggleIcon] = usePasswordToggle();

  return (

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar} style={iconStyle}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={submit} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                value={values.firstName}
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={handleInputChange}
              />
              {values.errors.firstName.length > 0 && (
                <span className="errormsg">{values.errors.firstName}</span>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={values.lastName}
                autoComplete="lname"
                onChange={handleInputChange}
              />
              {values.errors.lastName.length > 0 && (
                <span className="errormsg">{values.errors.lastName}</span>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={values.email}
                autoComplete="email"
                onChange={handleInputChange}
              />
              {values.errors.email.length > 0 && (
                <span className="errormsg">{values.errors.email}</span>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="username"
                value={values.username}
                label="Username"
                id="username"
                autoComplete="uname"
                onChange={handleInputChange}
              />
              {values.errors.username.length > 0 && (
                <span className="errormsg">{values.errors.username}</span>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                name="companyname"
                value={values.companyname}
                label="Company Name"
                id="companyname"
                autoComplete="cname"
                onChange={handleInputChange}
              />
              {values.errors.companyname.length > 0 && (
                <span className="errormsg">{values.errors.companyname}</span>
              )}
            </Grid>
            <Grid item xs={12}>
              
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                value={values.password}
                label="Password"
                type={PasswordInputType}
                id="password"
                autoComplete="current-password"
                onChange={handleInputChange}
              />
              <span className="password-toggle-icon">
                {ToggleIcon}
              </span>
             
              {values.errors.password.length > 0 && (
                <span className="errormsg">{values.errors.password}</span>
              )}

            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="cpassword"
                value={values.cpassword}
                label="Confirm Password"
                type={ConfirmPasswordInputType}
                id="cpassword"
                autoComplete="cpassword"
                onChange={handleInputChange}
              />
              <span className="password-toggle-icon">
                {ConfirmPasswordToggleIcon}
              </span>

              {values.errors.cpassword.length > 0 && (
                <span className="errormsg">{values.errors.cpassword}</span>
              )}

            </Grid>
           {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>*/}
          </Grid>
          <Button onClick={() => ('/signin')}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            style={buttonStyle}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2" style={textStyle}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}