import { useState } from "react";

function NewNote({ isOpen, onClose, onSave }) {
  const [text, setText] = useState("");
  const maxLength = 300;
  
  if (!isOpen) return null;

  const handleChange = (e) => {
    const newText = e.target.value;
    if (newText.length <= maxLength) {
      setText(newText);
    }
  };

  const handleSubmit = () => {
    if (text.trim()) {
      onSave(text);
      setText("");
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div 
        className="bg-yellow-200 p-6 rounded-2xl shadow-xl w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4 text-gray-700">Create New Note</h2>
        
        <textarea
          className="border-none resize-none bg-yellow-200 font-semibold w-full 
            focus:outline-none p-3 mb-3 rounded-lg"
          rows={8}
          value={text}
          onChange={handleChange}
          placeholder="Start typing your note here..."
          autoFocus
        />
        
        <div className="flex justify-between items-center">
          <small className={`${text.length >= maxLength ? 'text-red-500' : 'text-gray-600'}`}>
            {maxLength - text.length} remaining
          </small>
          
          <div className="space-x-3">
            <button 
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={handleSubmit}
              disabled={!text.trim()}
              className={`px-4 py-2 rounded-lg transition-colors ${
                text.trim() 
                  ? 'bg-green-500 hover:bg-green-600 text-white' 
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewNote;