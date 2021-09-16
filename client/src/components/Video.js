import React from "react";

const Video = ({ video, onSelectedVideo }) => {
  // console.log("video.js video: ", video);

  //   const thumbnail = video.snippet.thumbnails.default.url;
  //   const title = video.snippet.title;
  //   const description = video.snippet.description

  const { thumbnails, title, description } = video.snippet;

  return (
    <div
      onClick={() => {
        onSelectedVideo(video);
      }}
      style={{
        display: "flex",
        border: "1px solid red",
        marginBottom: "1rem",
        cursor: "pointer",
      }}
    >
      <img src={thumbnails.medium.url} alt={title} />
      <div>
        <h3>{title}</h3>
        <h4>{description}</h4>
      </div>
    </div>
  );
};

export default Video;
