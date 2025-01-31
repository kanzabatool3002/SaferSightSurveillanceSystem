

import React, { useRef, useEffect, useState } from 'react';
import './VideoPlayer.css';
import Webcam from 'react-webcam';
import Sidebar from '../sidebar';
import WallHeader from './WallHeader';
import CameraInfo from './CameraInfo';

import { useSelector, useDispatch } from 'react-redux';

const VideoPlayer = () => {
    
  const [userId, setUserId] = useState("");
    const [stream, setStream] = useState(null);
    const [captureIntervalId, setCaptureIntervalId] = useState(null);
    const videoRef = useRef(null);
    const [ADprediction, setADprediction] = useState('');
    const [predictions, setPredictions] = useState([]);
    const [detectionInterval, setDetectionInterval] = useState(null);
    
  const { userInfo } = useSelector((state) => state.auth);
  
  const dispatch = useDispatch();

    const startPrediction = () => {
        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices
                .getUserMedia({ video: true })
                .then((stream) => {
                    if (videoRef.current) {
                        videoRef.current.srcObject = stream;
                        setStream(stream);
                        captureAndSendFrames();
                        // Start predictions every 500 ms after webcam has started
                        const intervalId = setInterval(predictObject, 500);
                        setCaptureIntervalId(intervalId);
                    }
                })
                .catch((error) => {
                    console.error('Error accessing webcam:', error);
                });
        }
    };

    const predictObject = async () => {
        const video = videoRef.current;

        if (!video || video.readyState < 2) {
            console.error("Video is not ready for processing.");
            return;
        }

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        // Draw the current video frame on canvas
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Create image blob from canvas for prediction
        canvas.toBlob(async (blob) => {
            if (!blob) {
                console.error("Failed to create a Blob from the canvas");
                return;
            }

            const formData = new FormData();
            formData.append('frame', blob, 'frame.jpg');  // Append the blob as frame.jpg

            try {

                const response = await fetch('http://127.0.0.1:5001/detect', {
                    method: 'POST',
                    body: formData,
                });
                const data = await response.json();
                setPredictions(data.predictions || []);  // Set predictions from response
            } catch (err) {
                console.error('Error during object detection:', err);
            }
        }, 'image/jpeg');
    };

    const captureAndSendFrames = () => {
        const canvas = document.createElement('canvas');
        const intervalId = setInterval(async () => {
            if (videoRef.current && videoRef.current.readyState === 4) {
                const videoWidth = videoRef.current.videoWidth;
                const videoHeight = videoRef.current.videoHeight;
                if (videoWidth > 0 && videoHeight > 0) {
                    canvas.width = videoWidth;
                    canvas.height = videoHeight;
                    const context = canvas.getContext('2d');
                    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
                    const frameData = canvas.toDataURL('image/jpeg');
                    try {
                        // const userId = localStorage.getItem('userId'); // Retrieve userId from localStorage
                        // console.log('User ID from localStorage:', userId);

                        // const userId = localStorage.getItem('userId');
                        console.log('Retrieved userId from localStorage:', userId); // Debugging log

                        // if (!userId) {
                        //     console.error('User ID is missing in localStorage!');
                        //     return; // Stop further execution
                        // }


                        const blobData = dataURLToBlob(frameData);
                        const formData = new FormData();
                        formData.append('frame', blobData, 'frame.jpg');
                        const response = await fetch('http://localhost:5001/predict', {
                            method: 'POST',
                            headers: {
                                'User-ID': userId, // Include userId in the headers
                            },
                            body: formData,
                        });
                        if (!response.ok) {
                            throw new Error(`Server error: ${response.status}`);
                        }

                        // Parse the response as JSON
                        const data = await response.json();
                        // Log the response to see the full data object
                        console.log("Backend Response:", data);  // Check the structure of the response

                        // Ensure you're accessing 'ADprediction'
                        setADprediction(data.ADprediction);  // Use 'ADprediction' here

                    } catch (error) {
                        console.error('Error in ADprediction:', error);
                        stopPrediction();
                    }
                }
            }
        }, 1000 / 20);

        setCaptureIntervalId(intervalId);
    };
    const dataURLToBlob = (dataURL) => {
        const arr = dataURL.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        const n = bstr.length;
        const u8arr = new Uint8Array(n);

        for (let i = 0; i < n; i++) {
            u8arr[i] = bstr.charCodeAt(i);
        }

        return new Blob([u8arr], { type: mime });
    };

    const stopPrediction = () => {
        setADprediction('');
        if (captureIntervalId) {
            clearInterval(captureIntervalId);
            setCaptureIntervalId(null);
        }

        if (stream) {
            const tracks = stream.getTracks();
            tracks.forEach((track) => track.stop());
            setStream(null);
        }

        if (videoRef.current) {
            videoRef.current.srcObject = null;
        }

    };
    const stopWebcam = () => {
        setADprediction('');
        if (captureIntervalId) {
            clearInterval(captureIntervalId);
            setCaptureIntervalId(null);
        }

        if (stream) {
            const tracks = stream.getTracks();
            tracks.forEach((track) => track.stop());
            setStream(null);
        }

        if (videoRef.current) {
            videoRef.current.srcObject = null;
        }

        const video = videoRef.current;
        if (video) {
            const stream = video.srcObject;
            const tracks = stream.getTracks();
            tracks.forEach((track) => track.stop());
            video.srcObject = null;
            setPredictions([]);
            setStream(false);
        }
    }
    const startWebcam = async () => {

        try {
            if (navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices
                    .getUserMedia({ video: true })
                    .then((stream) => {
                        if (videoRef.current) {
                            videoRef.current.srcObject = stream;
                            setStream(stream);
                            captureAndSendFrames();
                            // Start predictions every 500 ms after webcam has started
                            const intervalId = setInterval(predictObject, 500);
                            setCaptureIntervalId(intervalId);
                        }
                    })
                    .catch((error) => {
                        console.error('Error accessing webcam:', error);
                    });
            }
            setStream(true);

            // Access webcam stream
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        } catch (error) {
            setStream(false);
            console.error('Error accessing webcam:', error);
        }
    };

    useEffect(() => {
        if (stream) {
            // Start predictions every 500 ms after webcam has started
            const intervalId = setInterval(predictObject, 500);
            setCaptureIntervalId(intervalId);
        } else {
            // Clear detection interval when webcam is stopped
            if (captureIntervalId) {
                clearInterval(captureIntervalId);
                setCaptureIntervalId(null);
            }
        }
    }, [stream]);
    useEffect(() => {
        setUserId(userInfo.userId);
      }, [userInfo]);

    return (
        <div className="object-detection">
            <Sidebar />

            <div className='live-camera'>
                <WallHeader />
                <CameraInfo />
                <div className="feed">
                    <h2 style={{ marginTop: '20px', fontSize: '2rem', paddingBottom: '20px' }}>WEBCAM</h2>
                    <p className="text-gray-300">Name: {userInfo.userId}</p>
                    {stream ? <video ref={videoRef} autoPlay muted /> : <div />}
                    <h3 style={{ marginTop: '20px', fontSize: '2rem', paddingBottom: '20px' }}>
                        ACTION: {ADprediction}
                    </h3>
                    {predictions.length > 0 ? (
                        predictions.map((prediction, index) => (
                            <React.Fragment key={index}>
                                <p
                                    style={{
                                        position: 'absolute',
                                        left: `${prediction.bbox[0]}px`,
                                        top: `${prediction.bbox[1]}px`,
                                        marginTop: '14rem',
                                        marginLeft: '16rem',
                                        background: 'rgba(255, 255, 255, 0.5)',
                                        // padding: '2px',
                                    }}
                                >
                                    {`${prediction.class} (${(prediction.confidence * 100).toFixed(2)}%)`}
                                </p>
                                <div
                                    className="marker"
                                    style={{
                                        position: 'absolute',
                                        border: '2.5px solid red',
                                        marginTop: '15.5rem',
                                        marginLeft: '19rem',
                                        left: `${prediction.bbox[0]}px`,
                                        top: `${prediction.bbox[1]}px`,
                                        width: `${prediction.bbox[2]}px`,
                                        height: `${prediction.bbox[3]}px`,
                                    }}
                                />
                            </React.Fragment>
                        ))
                    ) : (
                        <p style={{ color: 'white', marginBottom: '20px' }}>No predictions available</p>
                    )}
                </div>
                <div className="buttons">
                    <button onClick={stream ? stopWebcam : startWebcam}>
                        {stream ? 'Stop' : 'Start'} Webcam
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;