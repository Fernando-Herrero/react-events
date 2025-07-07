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
import { ToDoList } from "./components/TodoList/TodoList";
import { PersonalizedCounter } from "./components/PersonalizedCounter/PersonalizedCounter";
import { PersonCard } from "./components/PersonCard/PersonCard";

function App() {
	const people = [
		{ id: 1, name: "Ana", age: 25, initialPoints: 0 },
		{ id: 2, name: "Luis", age: 30, initialPoints: 5 },
		{ id: 3, name: "Clara", age: 22, initialPoints: 3 },
	];

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
			<ToDoList list={"Tareas de domingo"} />
			<PersonalizedCounter initialValue={0} />
			<PersonalizedCounter initialValue={5} />
			<PersonalizedCounter initialValue={2} />
			{people.map((person) => (
				<PersonCard key={person.id} name={person.name} age={person.age} initialPoints={person.initialPoints} />
			))}
		</>
	);
}

export default App;
