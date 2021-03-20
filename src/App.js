import { AppProvider } from "./context/useAppContext";
import Display from "./components/DisplayComponent/DisplayComponent";
import Controls from "./components/ControlsComponent/ControlsComponent";
import "./App.css";
import "fontsource-roboto";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <NavBar />
        <Controls />
        <Display />
      </AppProvider>
    </div>
  );
}

export default App;
