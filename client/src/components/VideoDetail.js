import React from "react";

const VideoDetail = ({ selectedVideo }) => {
  console.log("selectedVideo in VideoDetail.js: ", selectedVideo);

  const title = selectedVideo.snippet.title;
  const description = selectedVideo.snippet.description;

  return (
    <div className="video-detail">
      <iframe
        width="100%"
        src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h3>{title}</h3>
      <h5>{description}</h5>
    </div>
  );
};

export default VideoDetail;
