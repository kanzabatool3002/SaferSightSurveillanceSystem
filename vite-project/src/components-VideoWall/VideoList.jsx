
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './VideoList.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { useSelector, useDispatch } from 'react-redux';

const VideoList = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [userId, setUserId] = useState("");
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedVideo, setSelectedVideo] = useState(null); // State to track the selected video
    const [filteredVideos, setFilteredVideos] = useState([]); // For filtered data
    const [searchTerm, setSearchTerm] = useState(''); // To hold the search query
    useEffect(() => {
      axios
        .get('http://localhost:5000/api/videos',{
          withCredentials: true,
        })
        .then((response) => {
          setVideos(response.data);
          setFilteredVideos(response.data); // Initialize filteredVideos
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching videos:', error);
          setLoading(false);
        });
    }, []);


    const handleSearch = (e) => {
      const term = e.target.value.toLowerCase();
      setSearchTerm(term);
  
      // Filter videos by detectionType or date
      const filtered = videos.filter(
        (video) =>
          video.detectionType.toLowerCase().includes(term) ||
          video.date.toLowerCase().includes(term) ||
          video.time.toLowerCase().includes(term)
      );
      setFilteredVideos(filtered);
    };


    if (loading) {
        return <p>Loading videos...</p>;
    }

    if (videos.length === 0) {
        return <p>No videos logged yet.</p>;
    }

    return (
        <div>
          <div className="search">
                  <div className="search-box">
                    <input
                      type="text"
                      placeholder="Search by type, date, or time"
                      value={searchTerm}
                      onChange={handleSearch}
                    />
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                  </div>
                </div>
      <div className="grid-container">
        {filteredVideos.map((video, index) => (
          <div
            key={index}
            className="video-log"
            onClick={() => setSelectedVideo(video.videoPath)} // Pass selected video to parent
            style={{ cursor: "pointer" }}
          >
            <div className="video-log-text">
              <p>
                <strong>{video.detectionType}</strong>
              </p>
              <p>
                <strong>Date:</strong> {video.date}
              </p>
              <p>
                <strong>Time:</strong> {video.time}
              </p>
            </div>

            <video width="100%" height="200px" controls preload="auto">
              <source
                src={`http://localhost:5001/log_videos/${video.videoPath.split("/").pop()}`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
    );
};

export default VideoList;
