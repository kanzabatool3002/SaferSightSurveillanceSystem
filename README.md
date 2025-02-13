# Safer Sight Surveillance System
Final Year project

# Overview

Safer Sight is an AI-powered surveillance system designed to detect suspicious activities such as snatching and fighting in real-time. The system utilizes computer vision and deep learning models to enhance security monitoring and alert relevant authorities.
[Project Video](https://drive.google.com/file/d/1ZLCH-KWMsFnQ87P_WvW_gI66gRCVyKYw/view?usp=sharing)

## Features
- **Human Activity Recognition**: Detects snatching, fighting, and normal roadside activities using ConvLSTM.
- **Real-time Object Detection**: Identifies and classifies objects within the surveillance footage using YOLO v11.
- **Video Insights**: Leverages Gemini 1.5 API and Gemini Flash API for advanced video analysis and intelligent summarization.
- **Automated Alerts**: Sends notifications to a mobile app and web dashboard when suspicious activity is detected.
- **User Management System**: Allows administrators to view users, update their info, and delete users.
- **Authentication & Security**: Includes login, forgot password, update password, and reset functionality.
- **Log Storage & Retrieval**: Stores detected videos in a local database.
- **Mobile App Integration**: Logs videos and alerts are also displayed on the mobile application.

## Tech Stack
- **Frontend**: React.js (MERN Stack)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **AI Models**:
  - **Activity Recognition**: ConvLSTM (80.95% accuracy) trained with TensorFlow, OpenCV, and MoviePy.
  - **Object Detection**: YOLO v11, optimized with Adam optimizer and mean average precision (mAP) evaluation.
  - **Video Insights**: Gemini 1.5 API and Gemini Flash API for structured video analysis.
- **API**: Flask (to communicate between AI and web app)


### Prerequisites
- Node.js (20.16.0)
- Python (3.x)
- MongoDB
- Flask
- React.js

### Setup
#### 1. Clone the Repository
```sh
git clone https://github.com/kanzabatool3002/SaferSightSurveillanceSystem.git
cd safer-sight
```
#### 2. Install Backend Dependencies
```sh
cd backend
npm install
```
#### 3. Install Frontend Dependencies
```sh
cd ../vite-project
npm install
```
#### 4.Install Mobile App Dependencies
```sh
cd ../SaferSight
npm install
```
#### 5. Run the Project
Start the backend server:
```sh
cd backend
nodemon server.js (in first terminal)
python app.py (in second terminal to run AI models)
```
Start the frontend:
```sh
cd vite-project
npm run start
```
Start The Mobile App:
```sh
cd SaferSight
npm start
```
 
 for more detailed information about the project check project report.
 [Project Report](https://drive.google.com/file/d/1OMsRRpNnwhPjpUvW9STy12eS4ZDN-uwK/view?usp=sharing)
 
