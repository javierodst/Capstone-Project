import React from 'react';
import VideocamIcon from '@material-ui/icons/Videocam';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export const mainListItems = (
  <div>
    <a href="/dashboard">
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    </a>
    
    <a href="/stream">
    <ListItem button>
      <ListItemIcon>
        <VideocamIcon />
      </ListItemIcon>
      <ListItemText primary="View Camera" />
    </ListItem>
    </a>

    <a href="/account">
    <ListItem button>
      <ListItemIcon>
        <AccountCircleIcon />
      </ListItemIcon>
      <ListItemText primary="Account" />
    </ListItem>
    </a>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved Footage</ListSubheader>

    <a href="/currentweek">
    <ListItem button>
      <ListItemIcon>
        <VideoLibraryIcon />
      </ListItemIcon>
      <ListItemText primary="Current Week" />
    </ListItem>
    </a>

    <a href="/lastweek">
    <ListItem button>
      <ListItemIcon>
        <VideoLibraryIcon />
      </ListItemIcon>
      <ListItemText primary="Last Week" />
    </ListItem>
    </a>
    
    <a href="/footage">
    <ListItem button>
      <ListItemIcon>
        <VideoLibraryIcon />
      </ListItemIcon>
      <ListItemText primary="All" />
    </ListItem>
    </a>
  </div>
);