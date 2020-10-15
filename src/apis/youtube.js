import axios from "axios";

const API_KEY = "AIzaSyBr2ekXEOXL9N_0KqYIkGNBELC9eYEmeN0";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    key: API_KEY,
    maxResults: 5
  },
});
