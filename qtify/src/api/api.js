import axios from "axios";

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

export const fecthTopAlbums = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const fecthNewAlbums = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const fecthSongs = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}/songs`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchGenres = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}/genres`);
    console.log("fetchGenres", res);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};
