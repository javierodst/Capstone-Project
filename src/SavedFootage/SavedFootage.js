import React from 'react';
import './SavedFootage.css';


class SavedFootage extends React.Component {

    render(){
        return(
            <div class = "main">
                <h1>Saved Footage</h1>
                <div class="footage">
                <h2>October 14th 2020</h2>

                 <div class="date-1">
                 <video width="325"  height = "200" controls="controls" preload="metadata">
                    <source src="/Videos/practice_1.mp4" type="video/MP4" />
                </video>
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
        )
    }
}

export default SavedFootage;