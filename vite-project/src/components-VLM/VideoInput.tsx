import { useAtom } from "jotai";
import { videoSrcAtom, videoFileAtom, processedVideoAtom } from "./atoms";

function VideoInput() {
  const [, setVideoSrc] = useAtom(videoSrcAtom);
  const [, setVideoFile] = useAtom(videoFileAtom);
  const [processedVideos] = useAtom(processedVideoAtom);

  return (
    <div>
      {/* <input
        className="bg-neutral-700 p-4 pl-4 pr-8 mb-4"
        type="file"
        accept="video/*"
        onChange={(e) => {
          if (e.target.files) {
            const file = e.target.files[0];
            const src = URL.createObjectURL(file);
            console.log(src, file)
            setVideoFile(file)
            setVideoSrc(src);
          }
        }} /> */}
      <input
        className="bg-neutral-700 p-4 pl-4 pr-8 mb-4 h-full"
        type="file"
        accept="video/*"
        onChange={(e) => {
          if (e.target.files) {
            const file = e.target.files[0];
            const src = URL.createObjectURL(file);
            console.log(src, file);
            setVideoFile(file);
            setVideoSrc(src);
          }
        }}
      />
      


      {/* {processedVideos.length > 0 ||
        <>
          <h2 className="text-xl">Previously used videos:</h2>
          <div />
        </>
      } */}
    </div >
  );
}

export default VideoInput;















// import { useAtom } from "jotai";
// import { videoSrcAtom, videoFileAtom, processedVideoAtom } from "./atoms";

// function VideoInput() {
//   const [, setVideoSrc] = useAtom(videoSrcAtom);
//   const [, setVideoFile] = useAtom(videoFileAtom);
//   const [processedVideos, setProcessedVideos] = useAtom(processedVideoAtom);

//   // Handle video selection from the grid
//   const handleVideoSelection = (video) => {
//     setVideoFile(video.file);
//     setVideoSrc(video.src);
//   };

//   // Handle file upload
//   const handleFileUpload = (e) => {
//     if (e.target.files) {
//       const file = e.target.files[0];
//       const src = URL.createObjectURL(file);
//       const newVideo = { name: file.name, src: src, file: file };

//       // Save new video in the processed videos state (persistent across reloads)
//       setProcessedVideos((prevVideos) => [...prevVideos, newVideo]);

//       // Optionally set the current video as the selected video
//       setVideoFile(file);
//       setVideoSrc(src);
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-900 text-white min-h-screen">
//       <h2 className="text-2xl font-bold mb-4">Upload and Choose Videos</h2>

//       {/* ✅ File Input */}
//       <input
//         className="bg-neutral-700 p-4 pl-4 pr-8 mb-4"
//         type="file"
//         accept="video/*"
//         onChange={handleFileUpload}
//       />

//       {/* ✅ Grid to Display Processed Videos */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//         {processedVideos.length === 0 ? (
//           <p className="text-gray-400">No videos uploaded yet.</p>
//         ) : (
//           processedVideos.map((video, index) => (
//             <div
//               key={index}
//               className="border border-neutral-600 hover:border-neutral-400 p-2 rounded-md cursor-pointer"
//               onClick={() => handleVideoSelection(video)} // Set the clicked video
//             >
//               <video
//                 src={video.src}
//                 className="w-full h-auto rounded-md"
//                 controls={false}
//                 muted
//                 onMouseEnter={(e) => e.target.play()}
//                 onMouseLeave={(e) => e.target.pause()}
//               />
//               <p className="text-sm text-gray-400 mt-1 truncate">{video.name}</p>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }
// export default VideoInput;













// import { useState, useEffect } from "react";
// import { useAtom } from "jotai";
// import { videoSrcAtom, videoFileAtom } from "./atoms";

// function VideoInput() {
//   const [, setVideoSrc] = useAtom(videoSrcAtom);
//   const [, setVideoFile] = useAtom(videoFileAtom);
//   const [videoFiles, setVideoFiles] = useState([
//     // List video files directly from the public/videos folder
//     "snatching_2024-12-21_19-42-17_converted.mp4",
//     "snatching_2024-12-21_19-42-17_converted.mp4",
//   ]);

//   return (
//     <div>
//       {videoFiles.length > 0 ? (
//         <>
//           <h2 className="text-xl mb-4">Videos:</h2>
//           <div className="grid grid-cols-3 gap-4">
//             {videoFiles.map((video, index) => (
//               <div key={index} className="video-item">
//                 <div className="video-thumbnail relative">
//                   <button
//                     onClick={() => {
//                       const src = `/videos/${video}`; // Use relative path from public folder
//                       const file = { name: `Video ${index + 1}`, src };
//                       console.log(src, file);
//                       setVideoFile(file);
//                       setVideoSrc(src);
//                     }}
//                     className="w-full h-full bg-neutral-700 p-4 pl-4 pr-8 mb-4"
//                   >
//                     <video width="100%" controls>
//                       <source src={`/videos/${video}`} type="video/mp4" />
//                       Your browser does not support the video tag.
//                     </video>
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </>
//       ) : (
//         <p>No videos available.</p>
//       )}
//     </div>
//   );
// }


// export default VideoInput;