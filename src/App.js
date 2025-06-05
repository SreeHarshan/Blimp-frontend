import HomePage from "./pages/Home";
import SplashPage from "./pages/Splash";
import { useEffect, useState } from "react";
import { getAllNotes } from "./Core/api/notes";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(null);

  const fetchNotes = async () => {
    try {
      setShowSplash(true);
      const notesData = await getAllNotes();
      setNotes(notesData);
      setError(null);
    } catch (err) {
      setError(err.message || "Failed to load notes. Please try again later.");
    } finally {
      setShowSplash(false);
    }
  };

  useEffect(() => {

    fetchNotes();
  }, []);

  return <>
    {showSplash && <SplashPage />}
    {error && <h1>Unable to load notes. {error}</h1>}
    {!error && <HomePage notes={notes} setNotes={setNotes}/>}
  </>;
}

export default App;