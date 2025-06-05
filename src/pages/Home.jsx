import { useState } from "react";
import { Header, NoteList, NewNote } from "../components/Home/index";
import { addNote } from "../Core/api/notes";

function HomePage({notes,setNotes}) {
    const [showModal, setShowModal] = useState(false);
    const [isLoading,setLoading] = useState(false);

    const _addNote = async (newNote) => {
        try {
          setLoading(true);
          const noteId = await addNote(newNote);
          return noteId;
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
      };

    const handleSave = (newNote) => {
        const id = _addNote(newNote);
        setNotes([...notes, {
            id: id,  
            content: newNote
        }]);
    };

    return (<>
        <div class='flex flex-col'>
            <Header class="flex-shrink-0" />
            <NoteList list={notes} setList={setNotes} />
            <div class="fixed bottom-4 right-4">
                <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold text-3xl py-2 px-4 rounded-full shadow-lg"
                    onClick={() => setShowModal(true)}>
                    +
                </button>
            </div>
            <NewNote
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onSave={handleSave}
            />
        </div></>);
};

export default HomePage;