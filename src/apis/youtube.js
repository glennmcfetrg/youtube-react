import axios from "axios";

const KEY = "AIzaSyA2Ry-pzx265DrCZAaEczOOqQCMtgHKPTc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
