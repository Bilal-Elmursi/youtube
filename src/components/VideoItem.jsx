import React from "react";
import { Image, List } from "semantic-ui-react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <List.Item onClick={() => onVideoSelect(video)} className="video-item">
      <Image src={video.snippet.thumbnails.medium.url} />
      <List.Content>
        <List.Header>{video.snippet.description}</List.Header>
      </List.Content>
    </List.Item>
  );
};
export default VideoItem;
