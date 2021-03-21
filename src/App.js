import { AppProvider } from "./context/useAppContext";
import DisplayComponent from "./components/DisplayComponent/DisplayComponent";
import ControlsComponent from "./components/ControlsComponent/ControlsComponent";
import "./App.css";
import "fontsource-roboto";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <NavBar />
        <ControlsComponent />
        <DisplayComponent />
      </div>
    </AppProvider>
  );
}

export default App;
