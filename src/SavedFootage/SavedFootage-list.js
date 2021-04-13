import React from 'react';
import VideoCard from '../Footage/VideoCard.js';

class SavedFootageList extends React.Component {

    constructor(props){
        super(props);
        
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
        this.props.videos.map((video, { _id, title, date, keep, path }) => {
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
            {this.vids()}
        </div>
        )
    }
}

export default SavedFootageList;