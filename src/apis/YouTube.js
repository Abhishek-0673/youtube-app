import axios from "axios";

const KEY = "AIzaSyDG-dwO0fuNOXvnwoe1BDL5nSB1XpZ1DAY";

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
    type:'video'
  }
});
