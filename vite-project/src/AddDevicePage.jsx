
import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';
import AddCamera from './components-Camera/AddCamera';

import CompWatching from './components-Watch/comp-Watching';
import WatchingHeader from './components-Watch/watchingHeader';

const AddDevicePage = () => {
    const [cameras, setCameras] = useState([]);
    const fetchCameras = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/cameras');
            if (response.ok) {
                const data = await response.json();
                setCameras(data);
            } else {
                console.error('Failed to fetch Camera');
            }
        } catch (error) {
            console.error('Error fetching cameras:', error);
        }
    };

    useEffect(() => {
        fetchCameras();
    }, []);


    return (
        <div className="my-location">
            <Sidebar />
            <div className="main-content">
                <WatchingHeader/>
            </div>
            <div className="main-location">
                <AddCamera onCameraAdded={fetchCameras} />
            </div>

        </div>
    );
};

export default AddDevicePage;
