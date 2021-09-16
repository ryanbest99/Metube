import React from "react";
import Video from "./Video";

const VideoList = ({ videos, onSelectedVideo }) => {
  const results = videos.map((video) => {
    return (
      <Video key={video.etag} video={video} onSelectedVideo={onSelectedVideo} />
    );
  });

  return <div>{results}</div>;
};

export default VideoList;
