import React from "react";
import VideoCall from ".";

import "story.css";

const VideoCallInfo = {
  title: "页面组件/VideoCall",
  component: VideoCall,
};

export const Default = () => (
  <div style={{ height: "100vh" }}>
    <VideoCall />
  </div>
);

export default VideoCallInfo;
