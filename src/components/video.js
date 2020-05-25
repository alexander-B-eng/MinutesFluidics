import React from "react"

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="embed-responsive embed-responsive-16by9 col-12 col-sm-10 col-md-8 col-lg-6 col-x-2">
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