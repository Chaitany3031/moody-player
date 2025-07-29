import React, { useState } from "react";
import FacialExpression from "./components/FacialExpression";
import MoodSongs from "./components/MoodSongs";

function App() {
  const [songs, setSongs] = useState([]); // ✅ Define state

  return (
    <>
      <FacialExpression setSongs={setSongs} />
      <MoodSongs Songs={songs} />
    </>
  );
}

export default App;
