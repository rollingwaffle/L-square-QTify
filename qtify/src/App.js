import NavBar from "./components/NavBar/NavBar";
import { StyledEngineProvider } from "@mui/material/styles";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <>
      <StyledEngineProvider>
        <NavBar />
        <HomePage />
      </StyledEngineProvider>
    </>
  );
}

export default App;
