import { AppProvider } from "./context/useAppContext";
import Display from "./components/DisplayComponent/DisplayComponents";
import Controls from "./components/ControlsComponent/ControlsComponent";

import "./App.css";
import "fontsource-roboto";

function App() {
	return (
		<AppProvider>
			<Display />
			<Controls />
		</AppProvider>
	);
}

export default App;
