import React from "react";

const Video = ({ video, onSelectedVideo }) => {
  // console.log("video.js video: ", video);

  //   const thumbnail = video.snippet.thumbnails.default.url;
  //   const title = video.snippet.title;
  //   const description = video.snippet.description

  const { thumbnails, title, description, channelTitle } = video.snippet;

  return (
    <div
      className="video-container"
      onClick={() => {
        onSelectedVideo(video);
      }}
    >
      <img src={thumbnails.medium.url} alt={title} />
      <div className="video-text">
        <h4>{title}</h4>
        <h5>{channelTitle}</h5>
        {/* <h4>{description}</h4> */}
      </div>
    </div>
  );
};

export default Video;
