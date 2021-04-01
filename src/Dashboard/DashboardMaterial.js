import React, {useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import {Button} from '@material-ui/core';
import {withStyles} from "@material-ui/core/styles";
import history from '../history';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import axios from 'axios';
//import Chart from './Chart';
import Deposits from './Deposits';
//import Orders from './Orders';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ReactDOM from 'react-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import VideocamIcon from '@material-ui/icons/Videocam';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import TheatersIcon from '@material-ui/icons/Theaters';
import auth from '../ProtectedRoutes/auth';

// We can use inline-style to overide styles
const headerStyle = {  //to change signin button color
    background: 'rgb(13, 45, 62)',
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

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  signOut: {
    display: 'block',
    position: 'relative',
   // right: '20px',
    textalign: 'center',
    cursor: 'pointer',
    outline: 'none',
    border: 'none',
    borderradius: '15px',
    boxshadow: '0 9px #999',
    fontWeight: 'bold',
    float: 'right', //CAUSES DISABLED BUTTON
    //marginRight: '70px',
    //marginTop: '10px',  
    backgroundColor: "white",
    color: "rgb(13, 45, 62);",
    "&:hover": {
        backgroundColor: "#823038",
        color: "white",
      },
      position: "relative",
  },
  userIcon: {
    //backgroundColor: "white",
    color: "white",
    "&:hover": {
      //  backgroundColor: "#823038",
        color: "#823038",
      },
      position: "relative",
  },
}));



export default function DashboardMaterial(props, {componentToPassDown}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [openAlert, setOpenAlert] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpenAlert(true);
  };
  const handleClose = () => {
    setOpenAlert(false);
  };
  const SignOut = () => {
    setOpenAlert(false);
    localStorage.setItem('sessionfname', '');
    localStorage.setItem('sessionlname', '');
    localStorage.setItem('sessionemail', '');
    localStorage.setItem('sessionuname', '');
    localStorage.setItem('sessioncname', '');
   // localStorage.setItem('sessionauth', false);
    //history.push("/signin");
    auth.logout(() => { history.push("/signin");});
  };

  //navigation callbacks for protected routes
  const dash = () => {
    auth.login(() => { history.push("/dashboard");});
  };

  const stream = () => {
    auth.login(() => { history.push("/stream");});
  };

  const account = () => {
    auth.login(() => { history.push("/account");});
  };

  const current = () => {
    auth.login(() => { history.push("/currentweek");});
  };

  const last = () => {
    auth.login(() => { history.push("/lastweek");});
  };

  const footage = () => {
    auth.login(() => { history.push("/footage");});
  };

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar style={headerStyle} className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
           {/* Dashboard*/}
           {props.name}
          </Typography>
          <h2>{localStorage.getItem('sessionfname')}</h2>
          <IconButton size="large">
            <Badge /*badgeContent={4} color="secondary"*/ >
              <AccountCircleIcon fontSize= "medium" className={classes.userIcon}/>
            </Badge>
          </IconButton>
          <Button onClick={handleClickOpen} variant="contained" size="small" className={classes.signOut}>
          Sign Out
        </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        {/*<List>{mainListItems}</List>
        <Divider />
      <List>{secondaryListItems}</List>*/}
      <List>
      <ListItem button onClick={dash}>
      <ListItemIcon>
        <DashboardIcon style={{color:"rgb(13, 45, 62)"}}/>
      </ListItemIcon>
      <ListItemText style={{color:"rgb(13, 45, 62)"}} primary="Dashboard" />
    </ListItem>
    
    <ListItem button onClick={stream}>
      <ListItemIcon>
        <VideocamIcon style={{color:"rgb(13, 45, 62)"}}/>
      </ListItemIcon>
      <ListItemText style={{color:"rgb(13, 45, 62)"}} primary="View Camera" />
    </ListItem>

    <ListItem button onClick={account}>
      <ListItemIcon>
        <AccountCircleIcon style={{color:"rgb(13, 45, 62)"}}/>
      </ListItemIcon>
      <ListItemText  style={{color:"rgb(13, 45, 62)"}} primary="Account" />
    </ListItem>

        </List>
        <Divider />
        
        <List>
        <ListSubheader style={{color:"black", fontWeight:"bold", fontSize: "40"}} inset>Footage</ListSubheader>

              <ListItem button onClick={current}>
              <ListItemIcon>
                <VideoLibraryIcon style={{color:"rgb(13, 45, 62)"}}/>
                  </ListItemIcon>
                <ListItemText  style={{color:"rgb(13, 45, 62)"}} primary="Current Week" />
                  </ListItem>

         
          <ListItem button onClick={last}>
          <ListItemIcon>
          <VideoLibraryIcon style={{color:"rgb(13, 45, 62)"}}/>
          </ListItemIcon>
          <ListItemText  style={{color:"rgb(13, 45, 62)"}} primary="Last Week" />
          </ListItem>

         
          <ListItem button onClick={footage}>
            <ListItemIcon>
            <VideoLibraryIcon style={{color:"rgb(13, 45, 62)"}}/>
          </ListItemIcon>
            <ListItemText style={{color:"rgb(13, 45, 62)"}} primary="Saved Footage" />
          </ListItem>
        </List>
      </Drawer>
      {/*signout alert*/}
      <Dialog
        open={openAlert}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure you would like to sign out?"}</DialogTitle>
        {/*<DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>*/}
        <DialogActions>
          <Button onClick={SignOut} color="primary">
            Yes
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
           {/* <Grid item xs={12} md={8} lg={9}> */}
             {/*  <Paper className={fixedHeightPaper}>
               {/* <Chart />*/}
            {/*   </Paper>
         {/*    </Grid>
            {/* Recent Deposits */}
         {/*    <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
              <>
              {props.componentToPassDown}  
              </>
                {/*<Orders />*/}
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}