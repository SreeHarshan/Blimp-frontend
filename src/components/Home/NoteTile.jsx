import "./NoteTile.css";
import { useState, useRef } from "react";
import { MdDeleteForever } from "react-icons/md";

function NoteTile({ id, text = "", onChange, onDel }) {

    const [isDel, setDel] = useState(false);
    const maxLength = 300;
    const noteRef = useRef(null);


    const handleChange = (e) => {
        const newText = e.target.value;
        if (newText.length <= maxLength) {
            onChange(newText);
        }
    };

    const handleDelete = () => {
        // Trigger animation then delete
        console.log("Triggering animation for :"+id);
        setDel(true);
        if (noteRef.current) {
            noteRef.current.classList.add("animate-shatter");
        }
    };

    const handleAnimationEnd = (e) => {
        if (isDel && e.animationName === 'shatter') {
            onDel();
        }
    };

    return (<>
            <div ref={noteRef} id={`note-${id}`}
                class='bg-yellow-200 p-3 rounded-2xl shadow-md flex-col min-h-40 m-5 hover:rounded-none 
        transition-all duration-300 ease-in-out hover:scale-105' onAnimationEnd={handleAnimationEnd}>
                <textarea class="border-none resize-none bg-yellow-200 font-semibold w-full focus-within:outline-none"
                    rows={8} value={text} onChange={handleChange} disabled={isDel}></textarea>
                <div class="flex justify-between">
                    <small className={`${text.length >= maxLength ? 'text-red-500' : 'text-gray-600'}`}>
                        {maxLength - text.length} remaining
                    </small>
                    <button onClick={handleDelete} disabled={isDel}><MdDeleteForever /></button>
                </div>
            </div>
    </>);
}

export default NoteTile;