import { useState } from "react";
import {
  promptAtom,
  videoFileAtom,
  uploadResultAtom,
  timestampTextAtom,
  processedVideoAtom
} from "./atoms";
import { FileMetadataResponse } from "@google/generative-ai/files";
import { useAtom } from "jotai";
//import "./styles.css";

// const post = async (url: string, body: string | FormData) => {
//   const opts: RequestInit = {
//     method: "POST",
//     body,
//   };
//   if (typeof body === "string") {
//     opts.headers = {
//       "Content-Type": "application/json",
//     };
//   }
//   const f = await fetch(url, opts);
//   return await f.json();
// };

const API_BASE_URL = "http://localhost:5000"; // or wherever your backend is hosted
const post = async (url: string, body: string | FormData) => {
  const opts: RequestInit = {
    method: "POST",
    body,
  };
  if (typeof body === "string") {
    opts.headers = {
      "Content-Type": "application/json",
    };
  }
  const f = await fetch(`${API_BASE_URL}${url}`, opts);
  if (!f.ok) {
    throw new Error(`Failed to fetch ${url}: ${f.statusText}`);
  }
  return await f.json();
};

function Gemini() {
  const [videoFile, setVideoFile] = useAtom(videoFileAtom);
  const [prompt, setPrompt] = useAtom(promptAtom);
  const [uploadResult, setUploadResult] = useAtom(uploadResultAtom);
  const [, setTimestampText] = useAtom(timestampTextAtom);
  const [processedVideos, setProcessedVideos] = useAtom(processedVideoAtom);

  const enum UploadState {
    Waiting = "",
    Uploading = "Uploading...",
    Processing = "Processing...",
    Processed = "Processed!",
    Failure = "Upload failed, please try again.",
  }
  const [state, setState] = useState<UploadState>(UploadState.Waiting);

  const enum MODEL {
    Gemini = "gemini-1.5-pro-latest",
    Flash = "gemini-1.5-flash-latest"
  }
  const [model] = useState(MODEL.Gemini);

  const CONCISE_PROMPT = "Give appropriate details about everything and give timestamps only when asked!";
  const [sendingPrompt, setSendingPrompt] = useState(false);

  const [conversation, setConversation] = useState<{ sender: "user" | "ai"; message: string }[]>([]);

  const handleUploadClick = async () => {
    try {
      if (videoFile) {
        setState(UploadState.Uploading);
        const formData = new FormData();
        formData.set("video", videoFile);
        const resp = await post("/api/upload", formData);
        setUploadResult(resp.data);
        setState(UploadState.Processing);
        checkProcessing(resp.data);
      }
    } catch (err) {
      console.error("Error Uploading Video", err);
      setState(UploadState.Failure);
    }
  };


  // Handle file selection
  const handleFileSelect = (e) => {
    const files = e.target.files;
    if (files) {
      const newVideos = Array.from(files).filter((file) => file.type.startsWith("video/"));
      setVideoList((prevList) => [...prevList, ...newVideos]);
    }
  };


  const checkProcessing = async (result: FileMetadataResponse) => {
    setTimeout(async () => {
      const progressResult = await post(
        "/api/progress",
        JSON.stringify({ result }),
      );
      const progressState = progressResult.progress.state;
      if (progressState === "ACTIVE") {
        setState(UploadState.Processed);
      } else if (progressState === "FAILED") {
        setState(UploadState.Failure);
      } else {
        setState(UploadState.Processing);
        checkProcessing(result);
      }
    }, 5000);
  };

  const sendPrompt = async () => {
    if (state === UploadState.Processed && !sendingPrompt) {
      setSendingPrompt(true);

      let p = `${prompt}\n${CONCISE_PROMPT}`;

      setConversation((prev) => [...prev, { sender: "user", message: prompt }]);

      const response = await post(
        "/api/prompt",
        JSON.stringify({
          uploadResult,
          prompt: p,
          model
        }),
      );
      setSendingPrompt(false);

      const modelResponse = response.text;
      setConversation((prev) => [...prev, { sender: "ai", message: modelResponse.trim() }]);
      setTimestampText(modelResponse.trim());
    }
  };

  // Handle drag and drop
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setVideoFile(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  // Simulated list of videos (replace with actual file fetching)
  const videoList = [
    { name: "Video 1.mp4" },
    { name: "Video 2.mp4" },
    { name: "Video 3.mp4" },
  ];

  return (
    <div className="flex mt-4">
      {/* Left side - Video input area */}
      <div className="flex-1">
        <button
          disabled={state === UploadState.Uploading || state === UploadState.Processing}
          className="bg-gray-500 enabled:hover:bg-gray-800 disabled:opacity-25 mr-4 font-bold py-2 px-4 rounded mb-4"
          onClick={handleUploadClick}
        >
          Click here to start new Conversation!
        </button>

        {/* Show motivational quote during Uploading or Processing */}
        {(state === UploadState.Uploading || state === UploadState.Processing) && (
          <div className="flex justify-center items-center mt-4">
            <div className="quote-container text-center px-4 py-6 bg-neutral-700 rounded-md shadow-md">
              <p className="quote-text text-2xl italic font-light text-white">
                "Great things take time. Stay patient and keep believing!"
              </p>
            </div>
          </div>
        )}

        {/* Display conversation history */}
        <div className="mb-4 max-h-96 overflow-y-auto">
          {conversation.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 p-2 rounded ${msg.sender === "user" ? "bg-blue-100 text-black" : "bg-gray-200 text-black"}`}
            >
              <strong>{msg.sender === "user" ? "You:" : "AI:"}</strong> {msg.message}
            </div>
          ))}
        </div>

        {/* Prompt input area */}
        <div className="flex mb-4">
          <div className="w-full relative mr-4">
            <textarea
              disabled={sendingPrompt}
              className="w-full h-24 bg-neutral-800 p-2 pr-32 focus:outline-none flex-auto mr-4"
              name="prompt"
              placeholder="Prompt your video here, then cmd+enter to send once video is 'Processed!'"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button
              className="absolute top-2 right-2 bg-gray-500 enabled:hover:bg-gray-800 disabled:opacity-25 font-bold py-2 px-4 rounded"
              disabled={state !== UploadState.Processed || sendingPrompt}
              onClick={sendPrompt}
            >
              Send Question
            </button>
          </div>
        </div>
      </div>

      {/* Right side - List of videos */}
      {/*<div className="w-1/4 p-4 border-l">
        <h2 className="font-bold mb-4 text-lg">Available Videos</h2>
        <div
          className="h-full border-dashed border-2 border-gray-300 p-4"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <p className="text-center mb-4">Drag a video here</p>
          <ul className="space-y-2">
            {videoList.map((video, index) => (
              <li
                key={index}
                draggable
                onDragStart={(e) => e.dataTransfer.setData("file", video.name)}
                className="p-2 bg-gray-100 rounded cursor-pointer"
              >
                {video.name}
              </li>
            ))}
          </ul>
        </div>
      </div>*/}


    </div>
  );
}
export default Gemini;