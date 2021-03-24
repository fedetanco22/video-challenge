import { AppProvider } from "./components/context/useAppContext";
import DisplayComponent from "./components/DisplayComponent/DisplayComponent";
import ControlsComponent from "./components/ControlsComponent/ControlsComponent";
import NavBar from "./components/NavBar/NavBar";
import Container from "@material-ui/core/Container";
import "./App.css";
import "fontsource-roboto";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <NavBar />
        <Container>
          <ControlsComponent />
          <DisplayComponent />
        </Container>
      </div>
    </AppProvider>
  );
}

export default App;
