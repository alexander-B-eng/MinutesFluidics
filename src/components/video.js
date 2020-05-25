import React from "react"

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="embed-responsive embed-responsive-16by9 col-6 col-md-6 mb-1">
    <iframe
      class="embed-responsive-item"
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    //   width="498"
    //   height="280"
    />
  </div>
)

export default Video