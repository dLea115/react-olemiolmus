// src/BackgroundVideo.js
import React, { useRef } from 'react';
import './BackgroundVideo.css';

const BackgroundVideo = () => {
  const videoRef = useRef(null);

  const handleButtonClick = () => {
    const video = videoRef.current;
    video.muted = !video.muted; // Toggle the mute status
  };

  return (
    <div className="background-video-container">
      <video ref={videoRef} className="background-video" autoPlay loop muted>
        <source src="/olemiolmus.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Transparent Button */}
      <button className="transparent-button" onClick={handleButtonClick}>
        ÖYLE Mİ OLMUŞ KANKA
      </button>
      <div className="button-text">AYNEN AYNEN AYNENNN</div>
    </div>
  );
};

export default BackgroundVideo;
