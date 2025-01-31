
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AlertTable.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const AlertTable = () => {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/videos',{
        withCredentials: true,
      })
      .then((response) => {
        setVideos(response.data);
        setFilteredVideos(response.data);
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

  const sortData = (columnKey, sortOrder) => {
    const sortedData = [...filteredVideos].sort((a, b) => {
      if (a[columnKey] < b[columnKey]) {
        return sortOrder === 'asc' ? -1 : 1;
      }
      if (a[columnKey] > b[columnKey]) {
        return sortOrder === 'asc' ? 1 : -1;
      }
      return 0;
    });
    setFilteredVideos(sortedData);
  };

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
      <div className="alert-table-container">
        <table className="alert-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th onClick={() => sortData('index', 'asc')}>Index</th>
              <th onClick={() => sortData('source', 'asc')}>Event Source</th>
              <th>Event Type</th>
              <th>Event Date</th>
              <th>Event Time</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {filteredVideos.map((video, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{index + 1}</td>
                <td>Camera 1</td>
                <td>{video.detectionType}</td>
                <td>{video.date}</td>
                <td>{video.time}</td>
                <td
                  style={{
                    color:
                      video.detectionType === 'snatching'
                        ? 'red'
                        : video.detectionType === 'fighting'
                          ? 'green'
                          : 'black',
                  }}
                >
                  {video.detectionType === 'snatching'
                    ? 'High'
                    : video.detectionType === 'fighting'
                      ? 'Alert'
                      : 'Normal'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AlertTable;
