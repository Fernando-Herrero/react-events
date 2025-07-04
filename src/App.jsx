import "./App.css";
import { CountClicks } from "./components/CountClicks/CountClicks";
import { DoubleClickCounter } from "./components/DoubleClickCounter/DoubleClickCounter";
import { HoverBox } from "./components/HoverBox/HoverBox";
import { KeyCounter } from "./components/KeyCounter/KeyCountr";
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
			<DoubleClickCounter />
			<HoverBox />
			<KeyCounter />
		</>
	);
}

export default App;
