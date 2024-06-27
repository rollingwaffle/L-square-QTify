import NavBar from "./components/NavBar/NavBar";
import { StyledEngineProvider } from "@mui/material/styles";
import HomePage from "./pages/HomePage/HomePage";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  fecthNewAlbums,
  fecthSongs,
  fecthTopAlbums,
  fetchGenres,
} from "./api/api";

function App() {
  const [data, setData] = useState({});

  const generateCardData = (key, fn) => {
    fn().then((data) => {
      setData((prevState) => {
        return { ...prevState, [key]: data };
      });
    });
  };

  useEffect(() => {
    generateCardData("topAlbums", fecthTopAlbums);
    generateCardData("newAlbums", fecthNewAlbums);
    generateCardData("songs", fecthSongs);
    generateCardData("genres", fetchGenres);
  }, []);

  // useEffect(() => console.log("data from generateCardData", data), [data]);

  const { topAlbums = [], newAlbums = [], songs = [], genres = [] } = data;

  return (
    <>
      <StyledEngineProvider>
        <NavBar />
        {/* <HomePage /> */}
        <Outlet context={{ data: { topAlbums, newAlbums, songs, genres } }} />
      </StyledEngineProvider>
    </>
  );
}

export default App;
