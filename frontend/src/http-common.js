import axios from "axios";

export default axios.create({
  baseURL: "http://70.12.107.86:3000/",
  headers: {
    "Content-type": "application/json"
  }
});
