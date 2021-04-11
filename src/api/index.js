import axios from "axios";

const fetchFeedXml = url => {
  return axios.get(url, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/xml",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  });
};
export default fetchFeedXml;
