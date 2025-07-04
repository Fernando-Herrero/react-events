import "./App.css";
import { CountClicks } from "./components/CountClicks/CountClicks";
import { DoubleClickCounter } from "./components/DoubleClickCounter/DoubleClickCounter";
import { ErrorImage } from "./components/ErrorImage/ErrorImage";
import { Form } from "./components/Form/Form";
import { HoverBox } from "./components/HoverBox/HoverBox";
import { InputFocus } from "./components/InputFocus/InputFocus";
import { KeyCounter } from "./components/KeyCounter/KeyCountr";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { MirrorInput } from "./components/MirrorInput/MirrorInput";
import { ScrollLogger } from "./components/ScrollLogger/ScrollLogger";
import { StateCheckbox } from "./components/StateCheckbox/StateCheckbox";
import { ToggleText } from "./components/ToggleText/ToggleText";
import { Select } from "./components/Select/Select";
import { EditableText } from "./components/EditableText/EditableText";
import { NamesList } from "./components/NamesList/NamesList";

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
			<InputFocus />
			<Form />
			<ErrorImage />
			<ScrollLogger />
			<StateCheckbox />
			<Select />
			<EditableText />
			<NamesList />
		</>
	);
}

export default App;
