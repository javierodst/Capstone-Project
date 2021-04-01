import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Slideshow.css';

const slideImages = [
  '/Images/porch.jpg',
  '/Images/spotlight.jpg',
  '/Images/camera.jpg',
  '/Images/phone.jpg'
];

const Slideshow = () => {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>&nbsp; We Are Here<span style={{'display': `block`}}>&nbsp;For Your</span>&nbsp;&nbsp;Peace Of Mind.</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>&nbsp;Secure <span style={{'display': `block`}}>Surveillance</span>&nbsp;24/7.</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>&nbsp;Leading-Edge  <span style={{'display': `block`}}>Security</span>&nbsp;Cameras.</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
              <span>&nbsp;Streams <span style={{'display': `block`}}>Straight to </span>&nbsp;Your Smartphone.</span>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;