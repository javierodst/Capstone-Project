import React from 'react';

import VideoCard from '../Footage/VideoCard.js';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import SavedFootageList from './SavedFootage-list.js';

import DashboardMaterial from '../Dashboard/DashboardMaterial.js';

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

class SavedFootage extends React.Component {

    state = { videos: [] };

    url = "https://nameless-ravine-22066.herokuapp.com/api/videos";

    componentDidMount() {
        fetch(this.url)
            .then(response => {
                this.setState({ httpStatusCode: response.status, httpStatusOk: response.ok });
                if (response.ok) {

                    return response.json();

                }

                else if (response.status === 404) {
                    throw Error("HTTP 404, Not found");
                }

                else {
                    throw Error(`HTTP ${response.status}, ${response.statusText}`);
                }
            })
            .then(responseData => {
                this.setState({ videos: responseData });
            })
            .catch(error => {
                console.log(error);
            })
    }


    handleClick1 = () => {
        var els = document.getElementsByClassName("savebtn");
        for (var i = 0; i < els.length; i++) {
            els[i].addEventListener('click', function () {
                this.parentNode.remove();
            });
        }

    }

    
    vids(){
        var videosArr = new Array();
        console.log("video");
        this.state.videos.map((video, { _id, title, date, keep, path }) => {
            console.log(video);
            videosArr.push(

                    <VideoCard video={video} />

            );
        });
        return videosArr;
    }

    render() {
        return (
            <div>
                <DashboardMaterial name="Saved Footage" componentToPassDown={<SavedFootageList videos={this.state.videos} />} />
            </div>




            /*
            <div>
                <Album />
            </div>
            */
            /*  <div>
              <AccountHeader />
              <div class = "main">
                  
                  <h1>Saved Footage</h1>
                  <div class="footage">
                  <h2>October 14th 2020</h2>
  
                   <div class="date-1">
                   <div class="hour">
                   <video width="325"  height = "200" controls="controls" preload="metadata">
                      <source src="/Videos/practice_1.mp4" type="video/MP4" />
                  </video>
                <button id="mybtn1" class="savebtn" type="button" onClick={this.handleClick1}>Remove</button>
                  </div>
  
                  <video width="325" height = "200" controls="controls" preload="metadata">
                      <source src="/Videos/practice_3.mp4" type="video/MP4" />
                  </video>
                  <video width="325" height = "200" controls="controls" preload="metadata">
                      <source src="/Videos/practice_5.mp4" type="video/MP4" />
                  </video>
                  <video width="325" height = "200" controls="controls" preload="metadata">
                      <source src="/Videos/practice_8.mp4" type="video/MP4" />
                  </video>
                   </div>
  
                  <h2>August 27th 2020</h2>
                   <div class="date-2">
                   <video width="325" height = "200" controls="controls" preload="metadata">
                      <source src="/Videos/practice_9.mp4" type="video/MP4" />
                  </video>
                  <video width="325"  height = "200" controls="controls" preload="metadata">
                      <source src="/Videos/practice_10.mp4" type="video/MP4" />
                  </video>
                  </div>
  
                   <h2>August 3rd 2020</h2>
                   <div class="date-3">
                   <video width="325"  height = "200" controls="controls" preload="metadata">
                      <source src="/Videos/practice_11.mp4" type="video/MP4" />
                  </video>
                  <video width="325" height = "200" controls="controls" preload="metadata">
                      <source src="/Videos/practice_12.mp4" type="video/MP4" />
                  </video>
                  <video width="325" height = "200" controls="controls" preload="metadata">
                      <source src="/Videos/practice_10.mp4" type="video/MP4" />
                  </video>
                  <video width="325" height = "200" controls="controls" preload="metadata">
                      <source src="/Videos/practice_14.mp4" type="video/MP4" />
                  </video>
                   </div>
                   
                   </div>
  
               </div>
               </div>*/

        )
    }
}

export default SavedFootage;