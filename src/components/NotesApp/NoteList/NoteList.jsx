import { Note } from "./Note/note";
import "./NoteList.css";

export const NoteList = ({ notes }) => {
	return (
		<div className="note-list">
			{notes.length === 0 ? (
				<p>There isnt any note yet</p>
			) : (
				notes.map((note, index) => <Note key={index} title={note.title} content={note.content} />)
			)}
		</div>
	);
};
