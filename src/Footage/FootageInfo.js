import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import VideoCard from './VideoCard.js'
import { RoomSharp } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1,
  },
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

//function for dynamic date tabs
function TabsDay(past) {
  var today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - past);

  var dayOfWeek = yesterday.getDay();
  var numberMonth = yesterday.getMonth();
  var month;
  var label;
  switch (numberMonth) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
    default:
      label = "Today";
  }

  switch (dayOfWeek) {
    case 0:
      label = "Sunday, " + month + " " + yesterday.getDate();
      break;
    case 1:
      label = "Monday, " + month + " " + yesterday.getDate();;
      break;
    case 2:
      label = "Tuesday, " + month + " " + yesterday.getDate();;
      break;
    case 3:
      label = "Wednesday, " + month + " " + yesterday.getDate();;
      break;
    case 4:
      label = "Thursday, " + month + " " + yesterday.getDate();;
      break;
    case 5:
      label = "Friday, " + month + " " + yesterday.getDate();;
      break;
    case 6:
      label = "Saturday, " + month + " " + yesterday.getDate();;
      break;
    default:
      label = "Today";
  }

  return label;
}

class FootageInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true, value: "Hi" };


  }


  //classes = useStyles();

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

  url = "https://nameless-ravine-22066.herokuapp.com/api/video/keep/";



  render() {
    var todayArray = new Array();
    var daysOfWeekArr = new Array();

    for (let i = 0; i < 7; i++) {
      if (i === 0) {
        daysOfWeekArr.push(<Tab label="Today" {...a11yProps(i)} />);
      }
      else if (i === 1) {
        daysOfWeekArr.push(<Tab label="Yesterday" {...a11yProps(i)} />);
      }

      else {
        daysOfWeekArr.push(<Tab label={TabsDay(i)} {...a11yProps(i)} />);
      }

    }


    this.props.videos.map((video, { _id, title, date, keep, path }) => {
      const videoDate = new Date(video.date);

      var today = new Date();

      if (videoDate.getDate() == today.getDate() && videoDate.getMonth() == today.getMonth() && videoDate.getFullYear() == today.getFullYear()) {
        todayArray.push(video);
        console.log("ADDED " + video.title);
      }

    });

    const vids = (dayIndex) => {
      var videosArr = new Array();

      this.props.videos.map((video, { _id, title, date, keep, path }) => {
        var today = new Date();
        const videoDate = new Date(video.date);
        console.log(dayIndex);
        if ((videoDate.getDate()) == (today.getDate() - dayIndex) && videoDate.getMonth() == today.getMonth() && videoDate.getFullYear() == today.getFullYear()) {
          videosArr.push(<VideoCard video={video} />);
          console.log("ADDED " + video.title);
        }
      });

      return videosArr;


    }

    const todayVideos = todayArray.map((video) => {

      return (
        <div>
          <VideoCard video={video} />
        </div>
      );
    });

    const days = daysOfWeekArr.map((day) => {
      return (
        day
      );
    });


    return (

      // <div className={classes.root}>
      <div>

        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {days}
          </Tabs>
        </AppBar>
        <TabPanel value={this.state.value} index={0}>
          {vids(0)}
        </TabPanel>
        <TabPanel value={this.state.value} index={1}>
          {vids(1)}
        </TabPanel>
        <TabPanel value={this.state.value} index={2}>
          {vids(2)}
        </TabPanel>
        <TabPanel value={this.state.value} index={3}>
          {vids(3)}
        </TabPanel>
        <TabPanel value={this.state.value} index={4}>
          {vids(4)}
        </TabPanel>
        <TabPanel value={this.state.value} index={5}>
          {vids(5)}
        </TabPanel>
        <TabPanel value={this.state.value} index={6}>
          {vids(6)}
        </TabPanel>
      </div >
    );
  }
}
/*
export default function FootageInfo() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
            setValue(newValue);
  };

  return (
    <div className={classes.root}>
            <AppBar position="static" color="default">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Today" {...a11yProps(0)} />
                <Tab label="Yesterday" {...a11yProps(1)} />
                <Tab label={TabsDay(2)} {...a11yProps(2)} />
                <Tab label={TabsDay(3)} {...a11yProps(3)} />
                <Tab label={TabsDay(4)} {...a11yProps(4)} />
                <Tab label={TabsDay(5)} {...a11yProps(5)} />
                <Tab label={TabsDay(6)} {...a11yProps(6)} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <VideoCard />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <VideoCard />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <VideoCard />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <VideoCard />
            </TabPanel>
            <TabPanel value={value} index={5}>
              <VideoCard />
            </TabPanel>
            <TabPanel value={value} index={6}>
              <VideoCard />
            </TabPanel>
          </div>
  );
}
*/
export default FootageInfo;