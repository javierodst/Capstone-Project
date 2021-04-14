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
import history from '../history';
import { Alert, AlertTitle } from '@material-ui/lab';

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
  icons: {
    color: "white",
      position: "relative",
  },
  avatars: {
    backgroundColor: "rgb(13, 45, 62);",
  },
  edit: {
    color: "rgb(13, 45, 62);",
    "&:hover": {
        backgroundColor: "#823038",
        color: "white",
      },
  },
  alert: {
    backgroundColor: "rgb(13, 45, 62);",
    color: "white",
    "&:hover": {
        backgroundColor: "#823038",
        color: "white",
      },
  },
  dcontent: {
    color: "black",
  },
  dtitle: {
    color: "rgb(13, 45, 62);",
    fontSize: "20",
    fontWeight: "bold",
  },
}));

//properties with default values
const initialValues = {
  email: localStorage.getItem('sessionemail'),
  emailNew: '',
  lastName: '',
  firstName: '',
  password: '',
  cpassword: '',
  username: '',
  companyname: '',
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
        case "emailNew":
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
        default:
        break;
      }
      console.log(values);
    };

  //logout alert  
  const [open, setOpen] = React.useState(true);
  //password alert state
  const [openAlert, setOpenAlert] = React.useState(false);
  //company alert state
  const [openCompanyAlert, setCompanyAlert] = React.useState(false);
  //username alert state
  const [openUnameAlert, setUnameAlert] = React.useState(false);
  //email alert state
  const [openEmailAlert, setEmailAlert] = React.useState(false);
  //name alert state
  const [openNameAlert, setNameAlert] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  //password edit
  const handlepasswordEdit = () => {
    setOpenAlert(true);
  };
  const handleClose = () => {
    setOpenAlert(false);
  };

  //company edit
  const handlecompanyEdit = () => {
    setCompanyAlert(true);
  };
  const handleCompanyClose = () => {
    setCompanyAlert(false);
  }

  //username edit
  const handleUnameEdit = () => {
    setUnameAlert(true);
  };
  const handleUnameClose = () => {
    setUnameAlert(false);
  }

  //email edit
const handleEmailEdit = () => {
    setEmailAlert(true);
  };
  const handleEmailClose = () => {
    setEmailAlert(false);
  }

  //name edit
 const handleNameEdit = () => {
    setNameAlert(true);
  };
  const handleNameClose = () => {
    setNameAlert(false);
  }

  //password submit
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
        url: 'https://blooming-eyrie-08565.herokuapp.com/api/editPassword',
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
  
  //name submit
  const submitName = event =>{
    event.preventDefault(); //stops form from submitting by itself
        //payload is the data that you are sending
          const payload = {
            email: values.email,
            firstName: values.firstName,
            lastName: values.lastName
  };

  //only creates user account if passwords match and form is valid
  if( (formValid(values.errors)) && (payload.firstName != '') && (payload.lastName != '')){  
      
    //make http call, default uses get
    axios({
      url: 'https://blooming-eyrie-08565.herokuapp.com/api/editFirstName',
      method: 'POST',
      data: payload
    })
    .then( res => { 
      if(res.status === 200){
        console.log('Data has been sent to the server');
        <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
      </Alert>
      }
    })
    .catch(()=> {
      console.log('Internal Server Error');
      
    });

     //make http call, default uses get
     axios({
      url: 'https://blooming-eyrie-08565.herokuapp.com/api/editLastName',
      method: 'POST',
      data: payload
    })
    .then( res => { 
      if(res.status === 200){
        console.log('Data has been sent to the server');
        localStorage.setItem('sessionfname', payload.firstName);
        localStorage.setItem('sessionlname', payload.lastName);
        history.push("/account");
        handleNameClose();
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
}
      
  //username submit
  const submitUserName = event =>{
    event.preventDefault(); //stops form from submitting by itself
        //payload is the data that you are sending
          const payload = {
            email: values.email,
            username: values.username
  };

      //only creates user account if passwords match and form is valid
      if( (formValid(values.errors)) && (payload.username != '')){  
      
        //make http call, default uses get
        axios({
          url: 'https://blooming-eyrie-08565.herokuapp.com/api/edituserName',
          method: 'POST',
          data: payload
        })
        .then( res => { 
          if(res.status === 200){
            console.log('Data has been sent to the server');
            localStorage.setItem('sessionuname', payload.username);
            history.push("/account");
            handleUnameClose();
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
}
      
  //email submit
  const submitEmail = event =>{
    event.preventDefault(); //stops form from submitting by itself
        //payload is the data that you are sending
          const payload = {
            email: values.email,
            emailNew: values.emailNew,
  };

   //only creates user account if passwords match and form is valid
   if( (formValid(values.errors)) && (payload.email != '') && (payload.emailNew != '')){  
      
    //make http call, default uses get
    axios({
      url: 'https://blooming-eyrie-08565.herokuapp.com/api/editEmail',
      method: 'POST',
      data: payload
    })
    .then( res => { 
      if(res.status === 200){
        console.log('Data has been sent to the server');
        localStorage.setItem('sessionemail', payload.emailNew);
        history.push("/account");
        handleEmailClose();
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

}
      
 //company name submit
 const submitCompanyName = event =>{
  event.preventDefault(); //stops form from submitting by itself
      //payload is the data that you are sending
        const payload = {
          email: values.email,
          companyname: values.companyname
    };
 
         //only creates user account if passwords match and form is valid
    if( (formValid(values.errors)) && (payload.companyname != '')){  
      
      //make http call, default uses get
      axios({
        url: 'https://blooming-eyrie-08565.herokuapp.com/api/editCompanyName',
        method: 'POST',
        data: payload
      })
      .then( res => { 
        if(res.status === 200){
          console.log('Data has been sent to the server');
          localStorage.setItem('sessioncname', payload.companyname);
          history.push("/account");
          handleCompanyClose();
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
          <Avatar className={classes.avatars}>
            <FaceIcon className={classes.icons}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Name" secondary={sessionuser} />
        <Button onClick={handleNameEdit} color="primary" align="right" className={classes.edit} size="small">
            Edit
        </Button>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatars}>
            <EmailIcon className={classes.icons}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Email" secondary={localStorage.getItem('sessionemail')} />
        <Button onClick={handleEmailEdit} color="primary" align="right" className={classes.edit} size="small">
            Edit
        </Button>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatars}>
            <AccountCircleIcon className={classes.icons}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Username" secondary= {localStorage.getItem('sessionuname')}/>
        <Button onClick={handleUnameEdit} color="primary" align="right" className={classes.edit} size="small"> 
            Edit
        </Button>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatars}>
            <BusinessIcon className={classes.icons}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Company Name" secondary={localStorage.getItem('sessioncname')} />
        <Button onClick={handlecompanyEdit} color="primary" align="right" className={classes.edit} size="small">
            Edit
        </Button>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatars}>
            <LockIcon className={classes.icons}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Password"  />
        <Button onClick={handlepasswordEdit} color="primary" align="right" className={classes.edit} size="small">
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
        <DialogTitle id="alert-dialog-title" className={classes.dtitle}>{"Edit"}</DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.dcontent} id="alert-dialog-description">
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
          <Button type="submit" color="primary" className={classes.submit}  className={classes.alert} size="small" autoFocus>
            Change 
          </Button>
          <Button onClick={handleClose} color="primary" className={classes.alert} size="small" autoFocus>
            Cancel
          </Button>
        </DialogActions>
        </form>
      </Dialog>

    {/*Company Name edit alert*/}
    <Dialog
        open={openCompanyAlert}
        onClose={handleCompanyClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form onSubmit={submitCompanyName} className={classes.form} noValidate>
        <DialogTitle id="alert-dialog-title" className={classes.dtitle}>{"Edit"}</DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.dcontent} id="alert-dialog-description">
          Please enter your new company name.
          </DialogContentText>
          <TextField
                variant="outlined"
                required
                fullWidth
                name="companyname"
                value={values.companyname}
                label="Company Name"
                id="companyname"
                autoComplete="companyname"
                onChange={handleInputChange}
            />
       
       {values.errors.companyname.length > 0 && (
                <span className="errormsg">{values.errors.companyname}</span>
        )}

        </DialogContent>
            <DialogActions>
          <Button type="submit" color="primary" className={classes.submitCompanyName} className={classes.alert} size="small" autoFocus>
            Change 
          </Button>
          <Button onClick={handleCompanyClose} color="primary" className={classes.alert} size="small" autoFocus>
            Cancel
          </Button>
        </DialogActions>
       {/*</Dialog>*/}
       </form>
      </Dialog>

      {/*user name edit alert*/}
    <Dialog
        open={openUnameAlert}
        onClose={handleUnameClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form onSubmit={submitUserName} className={classes.form} noValidate>
        <DialogTitle id="alert-dialog-title" className={classes.dtitle}>{"Edit"}</DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.dcontent} id="alert-dialog-description">
          Please enter your new username.
          </DialogContentText>
          <TextField
                variant="outlined"
                required
                fullWidth
                name="username"
                value={values.username}
                label="User Name"
                id="username"
                autoComplete="username"
                onChange={handleInputChange}
            />
          {values.errors.username.length > 0 && (
                <span className="errormsg">{values.errors.username}</span>
            )}
        </DialogContent>
            <DialogActions>
          <Button type="submit" color="primary" className={classes.submitUserName} className={classes.alert} size="small" autoFocus>
            Change 
          </Button>
          <Button onClick={handleUnameClose} color="primary" className={classes.alert} size="small" autoFocus>
            Cancel
          </Button>
        </DialogActions>
       {/*</Dialog>*/}
        </form>
      </Dialog>

      {/*Email edit alert*/}
    <Dialog
        open={openEmailAlert}
        onClose={handleEmailClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form onSubmit={submitEmail} className={classes.form} noValidate>
        <DialogTitle id="alert-dialog-title" className={classes.dtitle}>{"Edit"}</DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.dcontent} id="alert-dialog-description">
          Please enter your new email address.
          (*This will change your sign in information)
          </DialogContentText>
          <TextField
                variant="outlined"
                required
                fullWidth
                name="emailNew"
                value={values.emailNew}
                label="Email"
                type="email"
                id="emailNew"
                onChange={handleInputChange}
            />
            
              {values.errors.email.length > 0 && (
                <span className="errormsg">{values.errors.email}</span>
              )}
       
        </DialogContent>
            <DialogActions>
          <Button type="submit" color="primary" className={classes.submitEmail} className={classes.alert} size="small" autoFocus>
            Change 
          </Button>
          <Button onClick={handleEmailClose} color="primary" className={classes.alert} size="small" autoFocus>
            Cancel
          </Button>
        </DialogActions>
       {/*</Dialog>*/}
       </form>
      </Dialog>

      {/*Name edit alert*/}
    <Dialog
        open={openNameAlert}
        onClose={handleNameClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form onSubmit={submitName} className={classes.form} noValidate>
        <DialogTitle id="alert-dialog-title" className={classes.dtitle}>{"Edit"}</DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.dcontent} id="alert-dialog-description">
          Please enter your new name.
          </DialogContentText>

          <Grid container spacing={1} justify={"center"}>
          <Grid item xs={10}>
          <TextField
                variant="outlined"
                required
                fullWidth
                name="firstName"
                value={values.firstName}
                label="First Name"
                id="firstName"
                autoComplete="firstName"
                onChange={handleInputChange}
            />

              {values.errors.firstName.length > 0 && (
                <span className="errormsg">{values.errors.firstName}</span>
              )}

            </Grid>
            <Grid item xs={10}>
             <TextField
                variant="outlined"
                required
                fullWidth
                name="lastName"
                value={values.lastName}
                label="Last Name"
                id="lastName"
                autoComplete="lastName"
                onChange={handleInputChange}
            />
              {values.errors.lastName.length > 0 && (
                <span className="errormsg">{values.errors.lastName}</span>
              )}

            </Grid>
       </Grid>
        </DialogContent>
            <DialogActions>
          <Button type="submit" color="primary" className={classes.submitName} className={classes.alert} size="small" autoFocus>
            Change 
          </Button>
          <Button onClick={handleNameClose} color="primary" className={classes.alert} size="small" autoFocus>
            Cancel
          </Button>
        </DialogActions>
       {/*</Dialog>*/}
       </form>
      </Dialog>

  </React.Fragment>
  );
}