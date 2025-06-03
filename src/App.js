import HomePage from "./pages/Home";
import SplashPage from "./pages/Splash";
import { useState } from "react";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return <>
    {showSplash && <SplashPage duration={1200} />}

      <HomePage />
  </>;
}

export default App;