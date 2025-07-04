import "./App.css";
import { CountClicks } from "./components/CountClicks/CountClicks";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { MirrorInput } from "./components/MirrorInput/MirrorInput";
import { ToggleText } from "./components/ToggleText/ToggleText";

function App() {
	return (
		<>
			<CountClicks /> 
      <MirrorInput /> 
      <LoginForm /> 
      <ToggleText />
		</>
	);
}

export default App;
