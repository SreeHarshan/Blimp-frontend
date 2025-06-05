import NoteTile from "./NoteTile";
import { useState } from "react";

import { deleteNote, updateNote } from "../../Core/api/notes";

function NoteList({ list, setList }) {

    const [isLoading, setLoading] = useState(false);
    
    const _updateNoteServer = (id,content)=>{
        try {
            setLoading(true);
            const noteId = updateNote(id, content);
            if (!noteId) {
                // TODO handle when the note is not updated
                console.log("note is not updated");
            }
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    const _updateNote = (id, content) => {
        const updatedNotes = [...list];
        const index = updatedNotes.findIndex(item => item.id === id);
        updatedNotes[index].content = content;
        setList(updatedNotes);
        _updateNoteServer(id,content);
    };

    const delNote = async (id) => {
        var updatedNotes = [...list];
        console.log("Deleting note:" + id);
        updatedNotes = updatedNotes.filter(item => item.id !== id);
        try {
            const Id = await deleteNote(id);
            if (Id) {
                setList(updatedNotes);
                console.log(updatedNotes);
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    return (<>
        <div class="flex-4 m-5 grid grid-cols-1 md:grid-cols-3">
            {list.length > 0 &&
                list.map((item, index) => (
                    <NoteTile key={item.id} id={item.id} text={item.content}
                     onChange={(newText) => _updateNote(item.id, newText)}
                        onDel={() => delNote(item.id)} />
                ))}
        </div>
        {list.length === 0 &&
            <h1 class="text-center">No notes are present :( </h1>
        }
    </>);
}



export default NoteList;