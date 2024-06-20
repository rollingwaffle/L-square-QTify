import NavBar from "./components/NavBar/NavBar";
import { StyledEngineProvider } from "@mui/material/styles";

function App() {
  return (
    <>
      <StyledEngineProvider>
        <NavBar />
      </StyledEngineProvider>
    </>
  );
}

export default App;
