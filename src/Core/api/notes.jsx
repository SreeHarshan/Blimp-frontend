import axios from 'axios';

// Axios
const api = axios.create({
  baseURL: 'http://0.0.0.0:5000', 
  timeout: 5000, 
});

// Get all the notes
export const getAllNotes = async () => {
  try {
    const response = await api.get('/notes/getall');
    return response.data.Value; 
  } catch (error) {
    if (error.response) {
      throw new Error(`Server error: ${error.response.status}`);
    } else if (error.request) {
      throw new Error('Network error - no response from server');
    } else {
      throw new Error(`Request setup error: ${error.message}`);
    }
  }
};

// Add a new note
export const addNote = async (content) => {
  try {
    const formData = new FormData();
    formData.append('note', content);
    
    const response = await api.post('/notes/add', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    
    if (response.data.Value === "Success") {
      return response.data.ID; 
    } else {
      throw new Error(response.data.Value || "Failed to add note");
    }
  } catch (error) {
    throw error; 
  }
};

// Delete a note by ID
export const deleteNote = async (noteId) => {
  try {
    const formData = new FormData();
    formData.append('id', noteId);
    
    const response = await api.post('/notes/delete', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    
    if (response.data.Value === "Success") {
      return noteId; 
    } else {
      throw new Error(response.data.Value || "Failed to delete note");
    }
  } catch (error) {
    throw error; 
  }
};

// Delete a note by ID
export const updateNote = async (noteId,content) => {
  try {
    const formData = new FormData();
    formData.append('id', noteId);
    formData.append('content', content);
    
    const response = await api.post('/notes/update', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    
    if (response.data.Value === "Success") {
      return noteId; 
    } else {
      throw new Error(response.data.Value || "Failed to update note");
    }
  } catch (error) {
    throw error; 
  }
};