import React from 'react';
import VideocamIcon from '@material-ui/icons/Videocam';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TheatersIcon from '@material-ui/icons/Theaters';

export const mainListItems = (
  <div>
    <a href="/dashboard" style={{textDecoration:"none"}}>
    <ListItem button >
      <ListItemIcon>
        <DashboardIcon style={{color:"rgb(13, 45, 62)"}}/>
      </ListItemIcon>
      <ListItemText style={{color:"rgb(13, 45, 62)"}} primary="Dashboard" />
    </ListItem>
    </a>
    
    <a href="/stream" style={{textDecoration:"none"}}>
    <ListItem button>
      <ListItemIcon>
        <VideocamIcon style={{color:"rgb(13, 45, 62)"}}/>
      </ListItemIcon>
      <ListItemText style={{color:"rgb(13, 45, 62)"}} primary="View Camera" />
    </ListItem>
    </a>

    <a href="/footage1" style={{textDecoration:"none"}}>
    <ListItem button>
      <ListItemIcon>
        <TheatersIcon style={{color:"rgb(13, 45, 62)"}}/>
      </ListItemIcon>
      <ListItemText style={{color:"rgb(13, 45, 62)"}} primary="View Footage" />
    </ListItem>
    </a>

    <a href="/account" style={{textDecoration:"none"}}>
    <ListItem button>
      <ListItemIcon>
        <AccountCircleIcon style={{color:"rgb(13, 45, 62)"}}/>
      </ListItemIcon>
      <ListItemText  style={{color:"rgb(13, 45, 62)"}} primary="Account" />
    </ListItem>
    </a>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader style={{color:"black", fontWeight:"bold", fontSize: "40"}} inset>Saved Footage</ListSubheader>

    <a href="/currentweek" style={{textDecoration:"none"}}>
    <ListItem button>
      <ListItemIcon>
        <VideoLibraryIcon style={{color:"rgb(13, 45, 62)"}}/>
      </ListItemIcon>
      <ListItemText  style={{color:"rgb(13, 45, 62)"}} primary="Current Week" />
    </ListItem>
    </a>

    <a href="/lastweek" style={{textDecoration:"none"}}>
    <ListItem button>
      <ListItemIcon>
        <VideoLibraryIcon style={{color:"rgb(13, 45, 62)"}}/>
      </ListItemIcon>
      <ListItemText  style={{color:"rgb(13, 45, 62)"}} primary="Last Week" />
    </ListItem>
    </a>
    
    <a href="/footage" style={{textDecoration:"none"}}>
    <ListItem button>
      <ListItemIcon>
        <VideoLibraryIcon style={{color:"rgb(13, 45, 62)"}}/>
      </ListItemIcon>
      <ListItemText style={{color:"rgb(13, 45, 62)"}} primary="All" />
    </ListItem>
    </a>
  </div>
);