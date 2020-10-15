import { useState, useEffect, useCallback } from "react";
import youtube from "../apis/youtube";

export default (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  const search = useCallback(async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
  }, []);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm, search]);

  return [videos, search];
};
