import React, { useState } from "react";
// import VideoList from "./VideoList";
import VideoList from "./components-VideoWall/VideoList.jsx";
// import Gemini from "./Gemini";
import Gemini from "./components-VLM/Gemini.jsx";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div>
      <VideoList setSelectedVideo={setSelectedVideo} />
      <Gemini selectedVideo={selectedVideo} />
    </div>
  );
}

export default App;
