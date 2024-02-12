import React from "react";

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video" style={{ height: "100%", width: "100%" }}>
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      preload="metadata"
      // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      style={{ height: "100%", width: "100%" }}
    />
  </div>
);

export default Video;
