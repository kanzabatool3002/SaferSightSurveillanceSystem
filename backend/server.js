

// ===================== Importing necessary modules =====================
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import mongoose from "mongoose";
import cors from "cors";
import path from "path";
dotenv.config();

import { Log } from './models/log_model.js';

// ===================== Importing necessary files =====================
import userRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import { notFoundErrorHandler, errorHandler } from './middlewares/errorMiddleware.js';

import authenticateUser from './middlewares/userAuthMiddleware.js';

import locationRoutes from "./routes/location_route.js"
import cameraRoutes from "./routes/camera_route.js"
import logRoutes from "./routes/log_route.js"
import profileRoutes from "./routes/profile_route.js"
import vlmRoutes from "./routes/vlm_route.js"

import multer from "multer";
import { checkProgress, promptVideo, uploadVideo } from "./gemini.js";

// Server port configuration
const PORT = process.env.PORT || 5000;

import http from 'http';

import { Server as socketIo } from 'socket.io'; // Import socket.io

const app = express();
const server = http.Server(app);

const io = new socketIo(server, {
  cors: {
    origin: ["http://localhost:5173", "http://localhost:8081"], // Correctly separated origins
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    // methods: ["GET", "POST"], // Allow these HTTP methods
    allowedHeaders: ['Authorization', 'Content-Type', 'User-ID'], // Allow specific headers
    credentials: true, // Allow cookies or credentials if needed
  }
});

// Middleware
app.use(express.json());

app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:8081',
    'https://5659-111-88-218-230.ngrok-free.app',
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Authorization', 'Content-Type', 'User-ID'],
}));


// Socket.io
io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

app.get('/logs', async (req, res) => {
  try {
    console.log('Request Headers:', req.headers);

    // Extract the token from the Authorization header
    const token = req.headers.authorization?.split(' ')[1]; // Extract the token after 'Bearer'
    console.log('Received Token:', token);

    // Check if the token is provided
    if (!token) {
      return res.status(401).json({ error: 'Authorization token is missing' });
    }

    // Convert the token to an ObjectId
    const userId = new mongoose.Types.ObjectId(token);
    console.log(userId)
    const unreadLogs = await Log.find({ userId: userId, isRead: false }); // Mongoose returns an array directly
    const readLogs = await Log.find({ userId: userId, isRead: true });
    console.log('UserID:', userId);
    console.log('Unread Logs Query:', await Log.find({ userId: userId, isRead: false }));
    console.log('Read Logs Query:', await Log.find({ userId: userId, isRead: true }));

    res.json({ unread: unreadLogs, read: readLogs });
  } catch (err) {
    console.error('Failed to fetch logs', err);
    res.status(500).json({ error: 'Failed to fetch logs' });
  }
});


app.get('/moblogs', async (req, res) => {
  try {
    console.log('Request Headers:', req.headers);

    // Extract the token from the Authorization header
    const token = req.headers.authorization?.split(' ')[1]; // Extract the token after 'Bearer'
    console.log('Received Token:', token);

    // Check if the token is provided
    if (!token) {
      return res.status(401).json({ error: 'Authorization token is missing' });
    }

    // Convert the token to an ObjectId
    const userId = new mongoose.Types.ObjectId(token);
    console.log(userId)
    const unreadLogs = await Log.find({ userId: userId, isRead: false }); // Mongoose returns an array directly
    const readLogs = await Log.find({ userId: userId, isRead: true });
    console.log('UserID:', userId);
    console.log('Unread Logs Query:', await Log.find({ userId: userId, isRead: false }));
    console.log('Read Logs Query:', await Log.find({ userId: userId, isRead: true }));

    res.json({ unread: unreadLogs, read: readLogs });
  } catch (err) {
    console.error('Failed to fetch logs', err);
    res.status(500).json({ error: 'Failed to fetch logs' });
  }
});

app.post('/mark-all-read', async (req, res) => {
  try {
    console.log('mark Request Headers:', req.headers);
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ error: 'Authorization header is missing' });
    }
    // Extract the token from the Authorization header
    const token = req.headers.authorization?.split(' ')[1]; // Extract the token after 'Bearer'
    console.log('mark Received Token:', token);

    // Check if the token is provided
    if (!token) {
      return res.status(401).json({ error: 'Authorization token is missing' });
    }

    // Convert the token to an ObjectId
    const userId = new mongoose.Types.ObjectId(token);
    console.log(userId)

    await Log.updateMany({ userId: userId, isRead: false }, { $set: { isRead: true } });
    res.status(200).json({ message: 'Marked all logs as read' });
  } catch (err) {
    console.error('Failed to mark logs as read:', err);
    res.status(500).json({ error: 'Failed to mark logs as read' });
  }
});

// Set io object globally for use in routes
app.set('io', io);  // Ensure that io is available for routes

app.options('*', cors()); // Handle preflight requests

// ===================== Database Configuration =====================
import connectDB from './config/db.js';

connectDB();

// ===================== Setting Static Folder =====================
app.use(express.static('backend/Public'));


// ========================================== Middleware's ==========================================

app.use(cookieParser()); // CookieParser Middleware

app.use(express.json()); // Body parser Middleware from Express

app.use(express.urlencoded({ extended: true })); // Form Data parser Middleware from Express



//? ===================== Application Home Route =====================
app.get('/', (req, res) => {

  res.status(200).json(`${process.env.APPLICATION_NAME} Server and Systems are Up & Running.`);

});

app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);

app.use('/api', locationRoutes);
app.use('/api', cameraRoutes);

// app.use('/api/logs', logRoutes);
app.use('/api', logRoutes); // Prefix routes with /api
app.use('/api', profileRoutes); // Prefix routes with /api
app.use('/api', vlmRoutes); // Prefix routes with /api




const upload = multer({ dest: "/tmp/" })

app.use(notFoundErrorHandler);
app.use(errorHandler);

server.listen(PORT, () => {

  console.log(`${process.env.APPLICATION_NAME} SERVER is LIVE & Listening on PORT ${PORT}.........`);

});

