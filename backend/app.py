from flask import send_from_directory
from flask import Flask, request, jsonify
import cv2
import numpy as np
from tensorflow.keras.models import load_model
from collections import deque
from datetime import datetime
import os
import requests
from flask_cors import CORS
from flask import Flask, send_file, Response
import os
from ultralytics import YOLO
from PIL import Image
from io import BytesIO
import subprocess
from flask_socketio import SocketIO, emit
import winsound
import threading
import winsound
import time

app = Flask(__name__)
CORS(app, supports_credentials=True, origins=["http://localhost:5173", "https://9384-111-88-218-230.ngrok-free.app"])
from flask_socketio import SocketIO
# from flask_cors import CORS

socketio = SocketIO(app, cors_allowed_origins="http://localhost:5173")


alarm_active = False
# Path to your YOLO model
MODEL_PATH = 'best.pt'
try:
    # Load the YOLO model
    model = YOLO(MODEL_PATH)
    print("YOLO model loaded successfully.")
except Exception as e:
    print(f"Error loading the YOLO model: {e}")
    model = None


# Load pre-trained ConvLSTM model
AD_model = load_model('improve_convlstm_model___Date_Time_2024_10_12__20_42_24___Loss_0.41087716817855835___Accuracy_0.8095238208770752.keras')
LRCN= load_model('LRCN_model___Date_Time_2024_08_10__10_38_06___Loss_0.6774061322212219___Accuracy_0.5476190447807312.keras')

SEQUENCE_LENGTH = 30
IMAGE_HEIGHT, IMAGE_WIDTH = 64, 64
CLASSES_LIST = ["normal", "fighting", "snatching"]
FPS = 10
frame_sequence = deque(maxlen=SEQUENCE_LENGTH)

log_folder = 'log_videos'
if not os.path.exists(log_folder):
    os.makedirs(log_folder)

recording = False
video_writer = None

def predict_action(sequence):
    sequence_array = np.expand_dims(sequence, axis=0)
    prediction = AD_model.predict(sequence_array)
    predicted_class = np.argmax(prediction[0])
    return CLASSES_LIST[predicted_class]





# Path to the folder containing video files
VIDEO_FOLDER = os.path.join(os.getcwd(), "log_videos")

@app.route('/log_videos/<filename>')
def serve_video(filename):
    return send_from_directory('log_videos', filename)







@app.route('/detect', methods=['POST'])
def detect():
    if not model:
        return jsonify({'error': 'Model not loaded successfully'}), 500

    if 'frame' not in request.files:
        return jsonify({'error': 'No frame uploaded'}), 400

    try:
        # Read the uploaded image
        file = request.files['frame']
        img = Image.open(BytesIO(file.read())).convert('RGB')

        # Perform inference with the YOLO model
        results = model.predict(source=img)

        # Process the results
        predictions = []
        for result in results[0].boxes.data.tolist():  # Extract data from boxes
            x1, y1, x2, y2, confidence, class_id = result
            predictions.append({
                'bbox': [x1, y1, x2 - x1, y2 - y1],  # Convert to [x, y, width, height]
                'confidence': confidence,
                'class': model.names[int(class_id)]  # Convert class ID to class name
            })

        return jsonify({'predictions': predictions})

    except Exception as e:
        return jsonify({'error': f"Error during prediction: {str(e)}"}), 500



def convert_video(input_file):
    """Convert a video to a specific format using ffmpeg."""
    try:
        output_file = input_file.replace(".mp4", "_converted.mp4")
        command = [
            "ffmpeg",
            "-i", input_file,
            "-c:v", "libx264",
            "-c:a", "aac",
            "-strict", "experimental",
            output_file
        ]
        subprocess.run(command, check=True)
        print(f"Converted video saved as {output_file}")
        return output_file
    except subprocess.CalledProcessError as e:
        print(f"Error during video conversion: {e}")
        return None
    




# Global flag for alarm state




def continuous_alarm():
    """
    Continuously sounds the alarm if the global alarm_active flag is True.
    Stops when the flag is False.
    """
    global alarm_active
    while alarm_active:
        winsound.Beep(3000, 1000)  # 3000 Hz frequency for 1 second
        # time.sleep(1)  

@app.route('/predict', methods=['POST'])
def predict():
    global recording, video_writer, frame_sequence, video_filename, date, time, recording_start_time, recording_detection_type, alarm_active,user_id

    try:
        # # Retrieve userId from the request headers
        user_id = request.headers.get('User-ID')

        if not user_id:
            return jsonify({"error": "User ID is required"}), 400
        print("Request Headers:", request.headers)


        frame_data = request.files['frame'].read()
        if not frame_data:
            return jsonify({"error": "No frame data received"}), 400

        nparr = np.frombuffer(frame_data, np.uint8)
        frame = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
        if frame is None:
            return jsonify({"error": "Failed to decode frame"}), 400

        resized_frame = cv2.resize(frame, (IMAGE_WIDTH, IMAGE_HEIGHT))
        normalized_frame = resized_frame / 255.0
        frame_sequence.append(normalized_frame)

        if len(frame_sequence) == SEQUENCE_LENGTH:
            ADprediction = predict_action(list(frame_sequence))
            print(f"Predicted Action: {ADprediction}")

            # if ADprediction in ["snatching", "fighting"]:
            #     if not alarm_active:
            #         alarm_active = True
            #         threading.Thread(target=continuous_alarm, daemon=True).start()

            # else:
            #     alarm_active = False  # Stop the alarm when action is normal

            if ADprediction in ["snatching", "fighting"] and not recording:
                # Start recording
                now = datetime.now()
                date = now.strftime("%Y-%m-%d")
                time = now.strftime("%H:%M:%S")
                recording_detection_type = ADprediction  # Store the detection type
                video_filename = f"{log_folder}/{recording_detection_type}_{date}_{time.replace(':', '-')}.mp4"
                fourcc = cv2.VideoWriter_fourcc(*'mp4v')
                video_writer = cv2.VideoWriter(video_filename, fourcc, FPS, (frame.shape[1], frame.shape[0]))
                recording = True
                recording_start_time = datetime.now()

            if recording:
                video_writer.write(frame)
                elapsed_time = (datetime.now() - recording_start_time).total_seconds()

                # Stop recording only if it has been at least 1 second
                if ADprediction == "normal" and elapsed_time >= 1:
                    video_writer.release()
                    video_writer = None
                    recording = False
                    alarm_active = False
                    print(f"Recording stopped, current action: {ADprediction}")

                    # Convert the recorded video using ffmpeg
                    converted_filename = convert_video(video_filename)
                    print(f"Video converted and saved as {converted_filename}")

                    # Log the data using the stored detection type
                    print("Logging data:", {
                        'videoPath': converted_filename,
                        'detectionType': recording_detection_type,
                        'date': date,
                        'time': time,
                        "userId": user_id
                    })
                    if converted_filename:
                        response = requests.post('http://localhost:5000/api/log', json={
                            'videoPath': converted_filename,
                            'detectionType': recording_detection_type,
                            'date': date,
                            'time': time,
                            'isRead': False,
                            "userId": user_id
                        })
                        if response.status_code == 200:
                            print(f"Logged to MongoDB: {response.json()}")
                        else:
                            print(f"Failed to log to MongoDB: {response.status_code}")
                    else:
                        print("Skipping MongoDB logging due to invalid video path.")

            return jsonify({"ADprediction": ADprediction})  # Return ADprediction instead of prediction

        return jsonify({"ADprediction": "Not enough frames"}), 200  # Ensure the response is consistent with ADprediction
    except Exception as e:
        print(f"Error during prediction: {e}")
        return jsonify({"error": str(e)}), 500

























# @app.route('/predict', methods=['POST'])
# def predict():
#     global recording, video_writer, frame_sequence, video_filename, date, time, recording_start_time, recording_detection_type, alarm_active

#     try:
#         # Assuming 'userID' is passed in the request headers (as a token or in the request body)
#         # req.user._id;  # Or use request.json.get('userID') if it's part of the request body
#         user_id = request.headers.get('userID')  # Or use request.json.get('userID') if it's part of the request body

#         if not user_id:
#             return jsonify({"error": "User ID is required"}), 400
        
#         frame_data = request.files['frame'].read()
#         if not frame_data:
#             return jsonify({"error": "No frame data received"}), 400

#         nparr = np.frombuffer(frame_data, np.uint8)
#         frame = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
#         if frame is None:
#             return jsonify({"error": "Failed to decode frame"}), 400

#         resized_frame = cv2.resize(frame, (IMAGE_WIDTH, IMAGE_HEIGHT))
#         normalized_frame = resized_frame / 255.0
#         frame_sequence.append(normalized_frame)

#         if len(frame_sequence) == SEQUENCE_LENGTH:
#             ADprediction = predict_action(list(frame_sequence))
#             print(f"Predicted Action: {ADprediction}")

#             if ADprediction in ["snatching", "fighting"]:
#                 if not alarm_active:
#                     alarm_active = True
#                     threading.Thread(target=continuous_alarm, daemon=True).start()

#             else:
#                 alarm_active = False  # Stop the alarm when action is normal

#             if ADprediction in ["snatching", "fighting"] and not recording:
#                 # Start recording
#                 now = datetime.now()
#                 date = now.strftime("%Y-%m-%d")
#                 time = now.strftime("%H:%M:%S")
#                 recording_detection_type = ADprediction  # Store the detection type
#                 video_filename = f"{log_folder}/{recording_detection_type}_{date}_{time.replace(':', '-')}.mp4"
#                 fourcc = cv2.VideoWriter_fourcc(*'mp4v')
#                 video_writer = cv2.VideoWriter(video_filename, fourcc, FPS, (frame.shape[1], frame.shape[0]))
#                 recording = True
#                 recording_start_time = datetime.now()

#             if recording:
#                 video_writer.write(frame)
#                 elapsed_time = (datetime.now() - recording_start_time).total_seconds()

#                 # Stop recording only if it has been at least 1 second
#                 if ADprediction == "normal" and elapsed_time >= 1:
#                     video_writer.release()
#                     video_writer = None
#                     recording = False
#                     alarm_active = False
#                     print(f"Recording stopped, current action: {ADprediction}")

#                     # Convert the recorded video using ffmpeg
#                     converted_filename = convert_video(video_filename)
#                     print(f"Video converted and saved as {converted_filename}")

#                     # Log the data with userID
#                     print("Logging data:", {
#                         'videoPath': converted_filename,
#                         'detectionType': recording_detection_type,
#                         'date': date,
#                         'time': time,
#                         'userID': user_id  # Include the userID in the log
#                     })
#                     if converted_filename:
#                         response = requests.post('http://localhost:5000/api/log', json={
#                             'videoPath': converted_filename,
#                             'detectionType': recording_detection_type,
#                             'date': date,
#                             'time': time,
#                             'userID': user_id,  # Pass the userID to MongoDB
#                             'isRead': False,
#                         })
#                         if response.status_code == 200:
#                             print(f"Logged to MongoDB: {response.json()}")
#                         else:
#                             print(f"Failed to log to MongoDB: {response.status_code}")
#                     else:
#                         print("Skipping MongoDB logging due to invalid video path.")

#             return jsonify({"ADprediction": ADprediction})  # Return ADprediction instead of prediction

#         return jsonify({"ADprediction": "Not enough frames"}), 200  # Ensure the response is consistent with ADprediction

#     except Exception as e:
#         print(f"Error during prediction: {e}")
#         return jsonify({"error": str(e)}), 500

































# def continuous_alarm():
#     """
#     Continuously sounds the alarm if the global alarm_active flag is True.
#     Stops when the flag is False.
#     """
#     global alarm_active
#     while alarm_active:
#         winsound.Beep(3000, 1000)  # 3000 Hz frequency for 1 second
#         time.sleep(1)  # Small delay to avoid overlapping sounds




# # currect


# @app.route('/predict', methods=['POST'])
# def predict():
#     global recording, video_writer, frame_sequence, video_filename, date, time, recording_start_time, recording_detection_type
#     try:
#         frame_data = request.files['frame'].read()
#         if not frame_data:
#             return jsonify({"error": "No frame data received"}), 400

#         nparr = np.frombuffer(frame_data, np.uint8)
#         frame = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
#         if frame is None:
#             return jsonify({"error": "Failed to decode frame"}), 400

#         resized_frame = cv2.resize(frame, (IMAGE_WIDTH, IMAGE_HEIGHT))
#         normalized_frame = resized_frame / 255.0
#         frame_sequence.append(normalized_frame)

#         if len(frame_sequence) == SEQUENCE_LENGTH:
#             ADprediction = predict_action(list(frame_sequence))
#             print(f"Predicted Action: {ADprediction}")


            
#             if ADprediction in ["snatching", "fighting"]:
#                 if not alarm_active:
#                     alarm_active = True
#                     threading.Thread(target=continuous_alarm, daemon=True).start()

#             else:
#                 alarm_active = False  # Stop the alarm when action is normal


#             if ADprediction in ["snatching", "fighting"] and not recording:
#                 # Start recording
#                 now = datetime.now()
#                 date = now.strftime("%Y-%m-%d")
#                 time = now.strftime("%H:%M:%S")
#                 recording_detection_type = ADprediction  # Store the detection type
#                 video_filename = f"{log_folder}/{recording_detection_type}_{date}_{time.replace(':', '-')}.mp4"
#                 fourcc = cv2.VideoWriter_fourcc(*'mp4v')
#                 # winsound.Beep(3000, 1000)
#                 video_writer = cv2.VideoWriter(video_filename, fourcc, FPS, (frame.shape[1], frame.shape[0]))
#                 recording = True
#                 recording_start_time = datetime.now()

#             if recording:
#                 video_writer.write(frame)
#                 elapsed_time = (datetime.now() - recording_start_time).total_seconds()

#                 # Stop recording only if it has been at least 1 second
#                 if ADprediction == "normal" and elapsed_time >= 1:
#                     video_writer.release()
#                     video_writer = None
#                     recording = False
#                     print(f"Recording stopped, current action: {ADprediction}")

#                     # Convert the recorded video using ffmpeg
#                     converted_filename = convert_video(video_filename)
#                     print(f"Video converted and saved as {converted_filename}")

#                     # Log the data using the stored detection type
#                     print("Logging data:", {
#                         'videoPath': converted_filename,
#                         'detectionType': recording_detection_type,
#                         'date': date,
#                         'time': time
#                     })
#                     if converted_filename:
#                         response = requests.post('http://localhost:5000/api/log', json={
#                         # response = requests.post('http://localhost:5000/log', json={
#                             'videoPath': converted_filename,
#                             'detectionType': recording_detection_type,
#                             'date': date,
#                             'time': time,
#                             'isRead': False,
#                         })
#                         if response.status_code == 200:
#                             print(f"Logged to MongoDB: {response.json()}")
#                         else:
#                             print(f"Failed to log to MongoDB: {response.status_code}")
#                     else:
#                         print("Skipping MongoDB logging due to invalid video path.")

#             return jsonify({"ADprediction": ADprediction})  # Return ADprediction instead of prediction

#         return jsonify({"ADprediction": "Not enough frames"}), 200  # Ensure the response is consistent with ADprediction
#     except Exception as e:
#         print(f"Error during prediction: {e}")
#         return jsonify({"error": str(e)}), 500





# socketio = SocketIO(app)

# @app.route('/predict', methods=['POST'])
# def predict():
#     global recording, video_writer, frame_sequence, video_filename, date, time, recording_start_time, recording_detection_type
#     try:
#         frame_data = request.files['frame'].read()
#         if not frame_data:
#             return jsonify({"error": "No frame data received"}), 400

#         nparr = np.frombuffer(frame_data, np.uint8)
#         frame = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
#         if frame is None:
#             return jsonify({"error": "Failed to decode frame"}), 400

#         resized_frame = cv2.resize(frame, (IMAGE_WIDTH, IMAGE_HEIGHT))
#         normalized_frame = resized_frame / 255.0
#         frame_sequence.append(normalized_frame)

#         if len(frame_sequence) == SEQUENCE_LENGTH:
#             ADprediction = predict_action(list(frame_sequence))
#             print(f"Predicted Action: {ADprediction}")

#             if ADprediction in ["snatching", "fighting"] and not recording:
#                 # Start recording
#                 now = datetime.now()
#                 date = now.strftime("%Y-%m-%d")
#                 time = now.strftime("%H:%M:%S")
#                 recording_detection_type = ADprediction
#                 video_filename = f"{log_folder}/{recording_detection_type}_{date}_{time.replace(':', '-')}.mp4"
#                 fourcc = cv2.VideoWriter_fourcc(*'mp4v')
#                 video_writer = cv2.VideoWriter(video_filename, fourcc, FPS, (frame.shape[1], frame.shape[0]))
#                 recording = True
#                 recording_start_time = datetime.now()

#             if recording:
#                 video_writer.write(frame)
#                 elapsed_time = (datetime.now() - recording_start_time).total_seconds()

#                 if ADprediction == "normal" and elapsed_time >= 1:
#                     video_writer.release()
#                     video_writer = None
#                     recording = False
#                     print(f"Recording stopped, current action: {ADprediction}")

#                     converted_filename = convert_video(video_filename)
#                     print(f"Video converted and saved as {converted_filename}")

#                     print("Logging data:", {
#                         'videoPath': converted_filename,
#                         'detectionType': recording_detection_type,
#                         'date': date,
#                         'time': time
#                     })
#                     if converted_filename:
#                         response = requests.post('http://localhost:5000/api/log', json={
#                             'videoPath': converted_filename,
#                             'detectionType': recording_detection_type,
#                             'date': date,
#                             'time': time
#                         })
#                         if response.status_code == 200:
#                             print(f"Logged to MongoDB: {response.json()}")

#                             # Emit a notification to the frontend
#                             socketio.emit('new_notification', {'message': f'New {recording_detection_type} logged!', 'date': datetime.now().strftime('%Y-%m-%d %H:%M:%S')})
#                         else:
#                             print(f"Failed to log to MongoDB: {response.status_code}")
#                     else:
#                         print("Skipping MongoDB logging due to invalid video path.")

#             return jsonify({"ADprediction": ADprediction})

#         return jsonify({"ADprediction": "Not enough frames"}), 200
#     except Exception as e:
#         print(f"Error during prediction: {e}")
#         return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(port=5001)

