import FacialExpression from "./components/FacialExpression";
import MoodSongs from "./components/MoodSongs";

function App() {
  return (
    <>
      <FacialExpression setSongs={setSongs} />
      <MoodSongs Songs={songs} />
    </>
  );
}

export default App;
