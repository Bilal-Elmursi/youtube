import React from "react";
import { Segment, Header, Embed } from "semantic-ui-react";

const VideoDetail = ({ video }) => {
  if (!video) return <>Loading!</>;

  const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;
  return (
    <>
      <Embed>
        <iframe title={video.snippet.title} src={videoSrc}></iframe>
      </Embed>
      <Segment>
        <Header>{video.snippet.title}</Header>
        <p>{video.snippet.description}</p>
      </Segment>
    </>
  );
};
export default VideoDetail;
