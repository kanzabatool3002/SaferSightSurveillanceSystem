import { useAtom } from "jotai";
import './mygemini.css';

import Sidebar from './sidebar';
import Gemini from './components-VLM/Gemini.tsx';
import TimestampText from './components-VLM/TimestampText.tsx';
import Annotations from './components-VLM/Annotations.tsx';
import ClickableTimestamps from './components-VLM/ClickableTimestamps.tsx';
import Timelines from './components-VLM/Timelines.tsx';
import Controls from './components-VLM/Controls.tsx';
import VideoState from './components-VLM/VideoState.tsx';
import Video from './components-VLM/Video.tsx';
import VideoInput from './components-VLM/VideoInput.tsx';
import VideoList from "./components-VideoWall/VideoList.jsx";
import { videoElAtom } from './components-VLM/atoms.tsx';
import vlmHeader from "./components-VLM/vlmHeader.jsx";
import WallHeader from "./components-VideoWall/WallHeader.jsx"
import VideoHeader from "./components-VideoUpload/VideoHeader.jsx";

function Mygemini() {
  const [videoEl] = useAtom(videoElAtom);


  return (
    <div>

      <div className="relative h-screen bg-cover bg-center bg-opacity-30 pl-[18rem]" style={{ backgroundImage: 'url("new5.jpeg")' }}>
        <Sidebar />
        <VideoHeader />
        <Video />
        {videoEl ? (
          <>
            <Annotations />
            <Controls />
            <Timelines />
            <ClickableTimestamps />
            <VideoState />
            <Gemini />
            <TimestampText />
          </>
        ) : (
          <VideoInput />
        )}
      </div>
    </div>
  );
}

export default Mygemini;
