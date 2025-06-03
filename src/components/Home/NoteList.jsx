import NoteTile from "./NoteTile";

function NoteList({list,setList}) {

    const updateNote = (index, newText) => {
        const updatedNotes = [...list];
        updatedNotes[index].text = newText;
        setList(updatedNotes);
    };

    const delNote = (id) => {
        var updatedNotes = [...list];
        console.log("Deleting note:"+id);
        updatedNotes = updatedNotes.filter(item => item.id !== id);
        setList(updatedNotes);
        console.log(updatedNotes);
    }

    return (<>
        <div class="flex-4 m-5 grid grid-cols-1 md:grid-cols-3">
            {list.length > 0 &&
                list.map((item, index) => (
                    <NoteTile key={item.id} id={item.id} text={item.text} onChange={(newText) => updateNote(index, newText)} 
                    onDel={() => delNote(item.id)} />
                ))}
        </div>
        {list.length === 0 &&
            <h1 class="text-center">No notes are present :( </h1>
        }
    </>);
}



export default NoteList;