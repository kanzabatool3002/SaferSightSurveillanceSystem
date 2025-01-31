import React, { useRef, useEffect, useState } from 'react';
import './VideoPlayer.css';
import Webcam from 'react-webcam';

const VideoPlayer = () => {

    const [stream, setStream] = useState(null); // To store the webcam stream
    const [captureIntervalId, setCaptureIntervalId] = useState(null); // To store the frame capture interval ID
    const videoRef = useRef(null);
    const [prediction, setPrediction] = useState(''); // To store the prediction text

    // Function to start the webcam and begin prediction
    const startPrediction = () => {
        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices
                .getUserMedia({ video: true })
                .then((stream) => {
                    videoRef.current.srcObject = stream;
                    setStream(stream); // Save the stream to state
                    captureAndSendFrames(); // Automatically start capturing frames for prediction
                })
                .catch((error) => {
                    console.error('Error accessing webcam:', error);
                });
        }
    };

    // Continuously capture and send frames to backend for prediction
    const captureAndSendFrames = () => {
        const canvas = document.createElement('canvas');
        const intervalId = setInterval(async () => {
            // Ensure the video element is ready and streaming
            if (videoRef.current && videoRef.current.readyState === 4) {
                const videoWidth = videoRef.current.videoWidth;
                const videoHeight = videoRef.current.videoHeight;

                // Check if the video dimensions are valid
                if (videoWidth > 0 && videoHeight > 0) {
                    canvas.width = videoWidth;
                    canvas.height = videoHeight;
                    const context = canvas.getContext('2d');

                    // Draw the video frame to the canvas
                    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

                    // Convert the canvas to a data URL
                    const frameData = canvas.toDataURL('image/jpeg');

                    try {
                        const blobData = dataURLToBlob(frameData);

                        // Append the Blob to form data
                        const formData = new FormData();
                        formData.append('frame', blobData, 'frame.jpg');

                        // Send the frame to the Flask backend
                        const response = await fetch('http://localhost:5001/predict', {
                            method: 'POST',
                            body: formData,
                        });

                        if (!response.ok) {
                            throw new Error(`Server error: ${response.status}`);
                        }
                        const data = await response.json();
                        setPrediction(data.prediction); // Update prediction state
                    } catch (error) {
                        console.error('Error in prediction:', error);
                        stopPrediction(); // Stop capturing frames if error occurs
                    }
                }
            }
        }, 1000 / 20); // Capture frames at 20 FPS

        setCaptureIntervalId(intervalId); // Store the interval ID so we can stop it later
    };

    // Helper function to convert data URL to Blob
    const dataURLToBlob = (dataURL) => {
        if (!dataURL || typeof dataURL !== 'string' || !dataURL.includes(',')) {
            console.error('Invalid data URL:', dataURL);
            throw new Error('Invalid data URL format');
        }

        const arr = dataURL.split(',');

        if (arr.length !== 2) {
            throw new Error('Invalid data URL format');
        }

        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        const n = bstr.length;
        const u8arr = new Uint8Array(n);

        for (let i = 0; i < n; i++) {
            u8arr[i] = bstr.charCodeAt(i);
        }

        return new Blob([u8arr], { type: mime });
    };

    const stopPrediction = async () => {
        setPrediction(''); // Clear the prediction text
        if (captureIntervalId) {
            clearInterval(captureIntervalId); // Stop the frame capturing immediately
            setCaptureIntervalId(null); // Reset the interval ID
        }

        if (stream) {
            const tracks = stream.getTracks();
            tracks.forEach((track) => track.stop()); // Stop each track in the stream (e.g., video)
            setStream(null); // Clear the stream reference
        }

        // Reset the video element
        if (videoRef.current) {
            videoRef.current.srcObject = null;
        }

        // Stop the alarm sound in the backend
        try {
            const response = await fetch('http://localhost:5001/stop-alarm', {
                method: 'POST',
            });

            if (!response.ok) {
                throw new Error('Failed to stop the alarm');
            }
        } catch (error) {
            console.error('Error stopping the alarm:', error);
        }
    };

    // Handle key press to stop prediction when 'q' is pressed
    const handleKeyPress = (event) => {
        if (event.key === 'q') {
            stopPrediction(); // Stop prediction and camera when 'q' is pressed
        }
    };

    // Add event listener for key press
    React.useEffect(() => {
        window.addEventListener('keypress', handleKeyPress);
        return () => {
            window.removeEventListener('keypress', handleKeyPress); // Cleanup event listener
        };
    }, []);

    return (
        <div>
            {/* <h2>Real-Time Action Detection</h2> */}
            <video
                ref={videoRef}
                autoPlay
                muted
                style={{
                    height: '33rem',
                    width: '100%',
                    border: '3px solid #3498db',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                }}
            ></video>
            <div style={{ marginTop: '20px' }}>
                <button
                    onClick={startPrediction}
                    style={{
                        padding: '10px 20px',
                        border: 'none',
                        backgroundColor: '#2ecc71',
                        color: 'white',
                        borderRadius: '5px',
                        marginRight: '10px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    }}
                >
                    Start Prediction
                </button>
                <button
                    type="button"
                    onClick={stopPrediction}
                    style={{
                        padding: '10px 20px',
                        border: 'none',
                        backgroundColor: '#e74c3c',
                        color: 'white',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    }}
                >
                    Stop Prediction
                </button>
            </div>
            <h3 style={{ marginTop: '20px', fontSize: '2rem', paddingBottom: '20px' }}>Prediction: {prediction}</h3>

        </div>
    );
};

export default VideoPlayer;

