import React, { useState, useEffect } from "react";
import { Container, Grid } from "semantic-ui-react";
import useVideos from "../hooks/useVideos";
import VideoDetail from "./VideoDetail";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("reactjs");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <Container style={{ marginTop: 10 }}>
      <SearchBar onFormSumbit={search} />
      <Grid>
        <Grid.Row>
          <Grid.Column width="11">
            <VideoDetail video={selectedVideo} />
          </Grid.Column>
          <Grid.Column width="5">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};
export default App;
