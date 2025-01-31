import React from 'react';
import Sidebar from './sidebar';
import WallHeader from './components-VideoWall/WallHeader';
import VideoPlayer from './components-VideoWall/VideoPlayer';
import EventsCaptured from './components-VideoWall/EventsCaptured';
import './VideoWall.css';
import CameraInfo from './components-VideoWall/CameraInfo';
import VideoList from './components-VideoWall/VideoList';
import LogsHeader from './components-VideoWall/LogsHeader.jsx';

const VideoWall = () => {
     return (
    <div className="video-wall">
      <Sidebar />
      <div className="main-content">
        <LogsHeader />
        <CameraInfo />
        {/* <VideoPlayer /> */}
        {/* <EventsCaptured /> */}
        <VideoList/>
        
      </div> 
    </div>
  );
}

export default VideoWall;


  
