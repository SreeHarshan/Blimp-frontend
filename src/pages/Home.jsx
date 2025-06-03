import { useEffect, useState } from "react";
import { Header, NoteList, NewNote } from "../components/Home/index";

function HomePage() {
    const [notes, setNotes] = useState([
        { id:"1",text: "Lorem ipsum" },
        { id:"2",text: "Lorem ipsum" },
        { id:"3",text: "Lorem ipsum" },
        { id:"4",text: "Lorem ipsum" },
        { id:"5",text: "Lorem ipsum" },
    ]);
    const [showModal, setShowModal] = useState(false);


    const handleSave = (newNote) => {
        console.log(notes);
        setNotes([...notes, {
            id: "6",  // temp id
            text: newNote
        }]);
        console.log(notes);
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