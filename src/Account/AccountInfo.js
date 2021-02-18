import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import EmailIcon from '@material-ui/icons/Email';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FaceIcon from '@material-ui/icons/Face';
import BusinessIcon from '@material-ui/icons/Business';
import LockIcon from '@material-ui/icons/Lock';
import {Button} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import { Alert, AlertTitle } from '@material-ui/lab';
//import Title from './Title';


const textStyle = { //to change signin text color
    color: 'rgb(13, 45, 62)',
};

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
      },
      left: {
        width: '50%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        textAlign: 'left',
      },
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

//properties with default values
const initialValues = {
  email: localStorage.getItem('sessionemail'),
  password: '',
  cpassword: '',
  //error messages
    errors: {
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

const passwordRequirements = 
  RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

export default function AccountInfo() {
  
  const classes = useStyles();
  const [values, setValues] = useState(initialValues);

    //callback whenever state
    const handleInputChange = event =>{
      event.preventDefault();
      const {name, value} = event.target
      setValues({
        ...values,
        [name]:value
      });

      switch (name) {
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
  
    };

  const [open, setOpen] = React.useState(true);
  const [openAlert, setOpenAlert] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handlepasswordEdit = () => {
    setOpenAlert(true);
  };
  const handleClose = () => {
    setOpenAlert(false);
  };

  const submit = event =>{
    event.preventDefault(); //stops form from submitting by itself
        //payload is the data that you are sending
          const payload = {
            email: values.email,
            cpassword: values.cpassword
      };
      
       
    //only creates user account if passwords match and form is valid
    if( (formValid(values.errors)) && (payload.cpassword != '')){  
      
      //make http call, default uses get
      axios({
        url: 'http://localhost:8080/api/editPassword',
        method: 'POST',
        data: payload
      })
      .then( res => { 
        if(res.status === 200){
          console.log('Data has been sent to the server');
          handleClose();
          <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
        </Alert>
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

  const sessionuser = localStorage.getItem('sessionfname') + ' ' + localStorage.getItem('sessionlname');

  return (
    <React.Fragment>
       <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FaceIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Name" secondary={sessionuser} />
        <Button color="primary" align="right">
            Edit
        </Button>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <EmailIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Email" secondary={localStorage.getItem('sessionemail')} />
        <Button color="primary" align="right">
            Edit
        </Button>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AccountCircleIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Username" secondary= {localStorage.getItem('sessionuname')}/>
        <Button color="primary" align="right">
            Edit
        </Button>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BusinessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Company Name" secondary={localStorage.getItem('sessioncname')} />
        <Button color="primary" align="right">
            Edit
        </Button>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LockIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Password"  />
        <Button onClick={handlepasswordEdit} color="primary" align="right">
            Edit
        </Button>
      </ListItem>
    </List>

  {/*Password edit alert*/}
    <Dialog
        open={openAlert}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form onSubmit={submit} className={classes.form} noValidate>
        <DialogTitle id="alert-dialog-title">{"Edit"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Please enter your new password and confirm.
          </DialogContentText>
         
          <Grid container spacing={1} justify={"center"}>

          <Grid item xs={10}>
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
          <Grid item xs={10}>
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
              </Grid>
              {/*<Grid item xs={5}>
              <Button type="submit" color="primary" className={classes.submit} autoFocus>
            Change 
          </Button>
          </Grid>
          <Grid item xs={5}>
          <Button onClick={handleClose} color="primary" autoFocus>
            Cancel
          </Button>
          </Grid>
             */}
       
        </DialogContent>
     <DialogActions>
          <Button type="submit" color="primary" className={classes.submit} autoFocus>
            Change 
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Cancel
          </Button>
        </DialogActions>
        </form>
      </Dialog>

  </React.Fragment>
  );
}