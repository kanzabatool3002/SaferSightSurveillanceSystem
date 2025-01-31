// import React, { useState, useEffect } from 'react';
// import { FlatList, View, Text, Image, StyleSheet } from 'react-native';

// const Logvideos = () => {
//   const [logs, setLogs] = useState([]);

//   useEffect(() => {
//     // Fetch logs from your backend or API
//     fetch('videos')
//       .then(response => response.json())
//       .then(data => setLogs(data))
//       .catch(error => console.error(error));
//   }, []);

//   const renderItem = ({ item }) => (
//     <View style={styles.logItem}>
//       <Text style={styles.timestamp}>{item.timestamp}</Text>
//       <Text style={styles.event}>Humanoid detection at...</Text>
//       <Image style={styles.thumbnail} source={{ uri: item.thumbnailUrl }} />
//     </View>
//   );

//   return (
//     <FlatList
//       data={logs}
//       renderItem={renderItem}
//       keyExtractor={item => item.id}
//       style={styles.container}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor:   
//  '#fff',
//     paddingHorizontal: 16,
//   },
//   logItem: {
//     marginBottom: 16,
//   },
//   timestamp: {
//     fontSize: 12,
//     color: '#888',
//   },
//   event: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   thumbnail: {
//     width: '100%',
//     height: 200,
//     borderRadius: 8,
//   },
// });

// export default Logvideos;




























// import React, { useState, useEffect } from 'react';
// import { FlatList, View, Text, Image, StyleSheet } from 'react-native';

// const Logvideos = () => {
//   const [logs, setLogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch logs from your backend or API
//     // fetch('D:/project/Frontend/android app/SaferSight/videos') // Use full URL if needed
//     fetch('videos') // Use full URL if needed
//       .then(response => response.json())
//       .then(data => {
//         console.log(data); // Log the response for debugging
//         setLogs(data); // Assuming `data` is an array of log objects
//         setLoading(false); // Set loading to false once data is fetched
//       })
//       .catch(error => {
//         console.error(error);
//         setError('Failed to load logs');
//         setLoading(false); // Set loading to false if error occurs
//       });
//   }, []);

//   const renderItem = ({ item }) => (
//     <View style={styles.logItem}>
//       <Text style={styles.timestamp}>{item.timestamp}</Text>
//       <Text style={styles.event}>Humanoid detection at...</Text>
//       <Image style={styles.thumbnail} source={{ uri: item.thumbnailUrl }} />
//     </View>
//   );

//   // Show loading state while fetching data
//   if (loading) {
//     return (
//       <View style={styles.container}>
//         <Text>Loading logs...</Text>
//       </View>
//     );
//   }

//   // Show error message if fetching failed
//   if (error) {
//     return (
//       <View style={styles.container}>
//         <Text>{error}</Text>
//       </View>
//     );
//   }

//   return (
//     <FlatList
//       data={logs}
//       renderItem={renderItem}
//       keyExtractor={item => item.id.toString()} // Ensure `id` is unique and is a string
//       style={styles.container}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingHorizontal: 16,
//   },
//   logItem: {
//     marginBottom: 16,
//     padding: 8,
//     backgroundColor: '#f9f9f9',
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   timestamp: {
//     fontSize: 12,
//     color: '#888',
//   },
//   event: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginVertical: 8,
//   },
//   thumbnail: {
//     width: '100%',
//     height: 200,
//     borderRadius: 8,
//   },
// });

// export default Logvideos;



















// import React, { useState } from 'react';
// import { View, StyleSheet, FlatList, Dimensions, Text, TouchableOpacity } from 'react-native';
// import Video from 'react-native-video';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const { width } = Dimensions.get('window');

// const videos = [
//     { id: '1', uri: 'videos/Mobile_snatching.mp4' },
//     { id: '2', uri: 'videos/snatching.mp4' },
// ];

// const Logvideos = () => {
//     const [hoveredItem, setHoveredItem] = useState(null);

//     const renderVideo = ({ item }) => (
//         <View style={styles.videoContainer}>
//             <Video
//                 source={{ uri: item.uri }}
//                 style={styles.video}
//                 resizeMode="cover"
//                 repeat
//             />
//         </View>
//     );

//     return (
//         <View style={styles.container}>

//             <FlatList
//                 data={videos}
//                 renderItem={renderVideo}
//                 keyExtractor={(item) => item.id}
//                 numColumns={1} // Single column for vertical layout
//                 contentContainerStyle={styles.list}
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#1c1e30',
//     },
//     header: {
//         backgroundColor: '#27293d',
//         paddingVertical: 15,
//         alignItems: 'center',
//         borderBottomLeftRadius: 10,
//         borderBottomRightRadius: 10,
//     },
//     headerTitle: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         color: '#fff',
//     },
//     subHeader: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         paddingHorizontal: 20,
//         paddingVertical: 10,
//         backgroundColor: '#27293d',
//         marginHorizontal: 15,
//         marginTop: 10,
//         borderRadius: 8,
//         elevation: 3,
//     },
//     subHeaderText: {
//         fontSize: 16,
//         fontWeight: '600',
//         color: '#bbb',
//     },
//     hoverEffect: {
//         padding: 10,
//         borderRadius: 5,
//     },
//     hovered: {
//         backgroundColor: '#444',
//     },
//     hoveredText: {
//         fontSize: 18,
//         fontWeight: '700',
//         color: '#fff',
//     },
//     menuIcon: {
//         marginLeft: 10,
//         color: '#bbb',
//     },
//     list: {
//         padding: 10,
//     },
//     videoContainer: {
//         width: '100%', // Full width for vertical layout
//         height: 200, // Adjust height as needed
//         marginBottom: 10,
//         borderRadius: 10,
//         overflow: 'hidden',
//         backgroundColor: '#444',
//         elevation: 3,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.2,
//         shadowRadius: 4,
//     },
//     video: {
//         width: '100%',
//         height: '100%',
//     },
// });

// export default Logvideos;





















// import React, { useState } from 'react';
// import { View, StyleSheet, FlatList, Text } from 'react-native';
// import Video from 'react-native-video';

// const videos = [
//     { 
//         id: '1', 
//         uri: 'videos/Mobile_snatching.mp4', 
//         date: '2024-11-27', 
//         time: '10:00 AM', 
//         action: 'Snatching' 
//     },
//     { 
//         id: '2', 
//         uri: 'videos/snatching.mp4', 
//         date: '2024-11-27', 
//         time: '11:30 AM', 
//         action: 'Fighting' 
//     },
// ];

// const LogVideos = () => {
//     const renderVideo = ({ item }) => (
//         <View style={styles.videoContainer}>
//             <Video
//                 source={{ uri: item.uri }}
//                 style={styles.video}
//                 resizeMode="cover"
//                 repeat
//             />
//             <View style={styles.infoContainer}>
//                 <Text style={styles.infoText}>Date: {item.date}</Text>
//                 <Text style={styles.infoText}>Time: {item.time}</Text>
//                 <Text style={styles.infoText}>Action: {item.action}</Text>
//             </View>
//         </View>
//     );

//     return (
//         <View style={styles.container}>
//             <FlatList
//                 data={videos}
//                 renderItem={renderVideo}
//                 keyExtractor={(item) => item.id}
//                 numColumns={1} // Single column for vertical layout
//                 contentContainerStyle={styles.list}
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#1c1e30',
//     },
//     list: {
//         padding: 10,
//     },
//     videoContainer: {
//         width: '100%', // Full width for vertical layout
//         marginBottom: 10,
//         borderRadius: 10,
//         overflow: 'hidden',
//         backgroundColor: '#444',
//         elevation: 3,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.2,
//         shadowRadius: 4,
//     },
//     video: {
//         width: '100%',
//         height: 200, // Adjust height as needed
//     },
//     infoContainer: {
//         padding: 10,
//         backgroundColor: '#27293d',
//         borderBottomLeftRadius: 10,
//         borderBottomRightRadius: 10,
//     },
//     infoText: {
//         fontSize: 14,
//         color: '#bbb',
//         marginBottom: 5,
//     },
// });

// export default LogVideos;






















// import React, { useState } from 'react';
// import { View, StyleSheet, FlatList, Text } from 'react-native';
// import Video from 'react-native-video';

// const videos = [
//     { 
//         id: '1', 
//         uri: 'videos/Mobile_snatching.mp4', // Use require for local files
//         date: '2024-11-27', 
//         time: '10:00 AM', 
//         action: 'Snatching' 
//     },
//     { 
//         id: '2', 
//         uri: 'videos/snatching.mp4', // Use require for local files
//         date: '2024-11-27', 
//         time: '11:30 AM', 
//         action: 'Fighting' 
//     },
// ];

// const LogVideos = () => {
//     const renderVideo = ({ item }) => (
//         <View style={styles.videoContainer}>
//             {/* <Video
//                 source={item.uri} // Local video file using require
//                 style={styles.video}
//                 resizeMode="cover"
//                 repeat
//                 controls // Adds playback controls for better usability
//             /> */}
//             <Video
//                 source={{ uri: item.uri }}
//                 style={styles.video}
//                 resizeMode="cover"
//                 repeat
//             />
//             <View style={styles.infoContainer}>
//                 <Text style={styles.infoText}>Date: {item.date}</Text>
//                 <Text style={styles.infoText}>Time: {item.time}</Text>
//                 <Text style={styles.infoText}>Action: {item.action}</Text>
//             </View>
//         </View>
//     );

//     return (
//         <View style={styles.container}>
//             <FlatList
//                 data={videos}
//                 renderItem={renderVideo}
//                 keyExtractor={(item) => item.id}
//                 numColumns={1} // Single column for vertical layout
//                 contentContainerStyle={styles.list}
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#1c1e30',
//     },
//     list: {
//         padding: 10,
//     },
//     videoContainer: {
//         width: '100%', // Full width for vertical layout
//         marginBottom: 10,
//         borderRadius: 10,
//         overflow: 'hidden',
//         backgroundColor: '#444',
//         elevation: 3,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.2,
//         shadowRadius: 4,
//     },
//     video: {
//         width: '100%',
//         height: 200, // Adjust height as needed
//     },
//     infoContainer: {
//         padding: 10,
//         backgroundColor: '#27293d',
//         borderBottomLeftRadius: 10,
//         borderBottomRightRadius: 10,
//     },
//     infoText: {
//         fontSize: 14,
//         color: '#bbb',
//         marginBottom: 5,
//     },
// });

// export default LogVideos;






















// currect 


// import React from 'react';
// import { View, StyleSheet, FlatList, Text } from 'react-native';
// import Video from 'react-native-video';

// const videos = [
//     { 
//         id: '1', 
//         uri: 'videos/Mobile_snatching.mp4', // Use require for local files
//         date: '2024-11-27', 
//         time: '10:00 AM', 
//         action: 'Snatching' 
//     },
//     { 
//         id: '2', 
//         uri: 'videos/snatching.mp4', // Use require for local files
//         date: '2024-11-27', 
//         time: '11:30 AM', 
//         action: 'Fighting' 
//     },
// ];



// // const videos = [
// //   { id: '1', uri: 'videos/Mobile_snatching.mp4' },
// //   { id: '2', uri: 'videos/snatching.mp4' },
// // ];


// const LogVideos = () => {
//   const renderVideo = ({ item }) => (
//     <View style={styles.videoContainer}>
//       {/* <Video
//                 source={item.uri}
//                 style={styles.video}
//                 resizeMode="cover"
//                 controls // Adds playback controls for better usability
//             /> */}

//       <Video
//         source={{ uri: item.uri }}
//         style={styles.video}
//         resizeMode="cover"
//         repeat
//       />

//       <View style={styles.infoContainer}>
//                 <Text style={styles.infoText}>Date: {item.date}</Text>
//                 <Text style={styles.infoText}>Time: {item.time}</Text>
//                 <Text style={styles.infoText}>Action: {item.action}</Text>
//             </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={videos}
//         renderItem={renderVideo}
//         keyExtractor={(item) => item.id}
//         numColumns={1} // Single column for vertical layout
//         contentContainerStyle={styles.list}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1c1e30',
//   },
//   list: {
//     padding: 10,
//   },
//   videoContainer: {
//     width: '100%', // Full width for vertical layout
//     marginBottom: 10,
//     borderRadius: 10,
//     overflow: 'hidden',
//     backgroundColor: '#444',
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//   },
//   video: {
//     width: '100%',
//     height: 200, // Adjust height as needed
//   },
//   infoContainer: {
//     padding: 10,
//     backgroundColor: '#27293d',
//     borderBottomLeftRadius: 10,
//     borderBottomRightRadius: 10,
//   },
//   infoText: {
//     fontSize: 14,
//     color: '#bbb',
//     marginBottom: 5,
//   },
// });

// export default LogVideos;


























// import React, { useState } from 'react';
// import { View, StyleSheet, FlatList, Dimensions, Text, TouchableOpacity } from 'react-native';
// import Video from 'react-native-video';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const { width } = Dimensions.get('window');

// const videos = [
//     { id: '1', uri: 'videos/Mobile_snatching.mp4' ,date: '2024-11-27',time: '10:00 AM',action: 'Snatching'},
//     { id: '2', uri: 'videos/snatching.mp4' ,date: '2024-11-27', time: '11:30 AM', action: 'Fighting'},
//     // { 
//     //   id: '1', 
//     //   uri: 'videos/Mobile_snatching.mp4', // Use require for local files
//     //   date: '2024-11-27', 
//       // //         // time: '10:00 AM', 
//       // //         // action: 'Snatching' 
//       // //     },
//       // //     { 
//       // //         id: '2', 
//       // //         uri: 'videos/snatching.mp4', // Use require for local files
//       // //         // date: '2024-11-27', 
//       // //         // time: '11:30 AM', 
//       // //         // action: 'Fighting' 
//       // //     },
// ];

// const Logvideos = () => {
//     const [hoveredItem, setHoveredItem] = useState(null);

//     const renderVideo = ({ item }) => (

//         <View style={styles.videoContainer}>
//             <Video
//                 source={{ uri: item.uri }}
//                 style={styles.video}
//                 resizeMode="cover"
//                 repeat
//             />
//         </View>
//     );

//     return (
//         <View style={styles.container}>

//             <FlatList
//                 data={videos}
//                 renderItem={renderVideo}
//                 keyExtractor={(item) => item.id}
//                 numColumns={1} // Single column for vertical layout
//                 contentContainerStyle={styles.list}
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#1c1e30',
//     },
//     header: {
//         backgroundColor: '#27293d',
//         paddingVertical: 15,
//         alignItems: 'center',
//         borderBottomLeftRadius: 10,
//         borderBottomRightRadius: 10,
//     },
//     headerTitle: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         color: '#fff',
//     },
//     subHeader: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         paddingHorizontal: 20,
//         paddingVertical: 10,
//         backgroundColor: '#27293d',
//         marginHorizontal: 15,
//         marginTop: 10,
//         borderRadius: 8,
//         elevation: 3,
//     },
//     subHeaderText: {
//         fontSize: 16,
//         fontWeight: '600',
//         color: '#bbb',
//     },
//     hoverEffect: {
//         padding: 10,
//         borderRadius: 5,
//     },
//     hovered: {
//         backgroundColor: '#444',
//     },
//     hoveredText: {
//         fontSize: 18,
//         fontWeight: '700',
//         color: '#fff',
//     },
//     menuIcon: {
//         marginLeft: 10,
//         color: '#bbb',
//     },
//     list: {
//         padding: 10,
//     },
//     videoContainer: {
//         width: '100%', // Full width for vertical layout
//         height: 200, // Adjust height as needed
//         marginBottom: 10,
//         borderRadius: 10,
//         overflow: 'hidden',
//         backgroundColor: '#444',
//         elevation: 3,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.2,
//         shadowRadius: 4,
//     },
//     video: {
//         width: '100%',
//         height: '100%',
//     },
// });

// export default Logvideos;













// import React, { useEffect, useState } from 'react';
// import { View, StyleSheet, FlatList, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
// import Video from 'react-native-video';
// import { API_BASE_URL } from '../../constants/api'; // Adjust the import path as needed

// const LogVideos = () => {
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Function to fetch video data from the backend
//     const fetchVideos = async () => {
//       try {
//         const response = await fetch(`${API_BASE_URL}/videos`);
//         const contentType = response.headers.get('Content-Type');

//         if (contentType && contentType.includes('application/json')) {
//           const data = await response.json();
//           console.log('Response data:', data);
//           if (response.ok) {
//             setVideos(data);
//           } else {
//             setError('Failed to fetch videos');
//           }
//         } else {
//           const text = await response.text();
//           console.error('Expected JSON, but received HTML:', text);
//           setError('Unexpected response from server');
//         }
//       } catch (err) {
//         console.error('Error fetching videos:', err);
//         setError('An error occurred while fetching videos');
//       } finally {
//         setLoading(false);
//       }
//     };




//     fetchVideos();
//   }, []);

//   const renderVideo = ({ item }) => (
//     <View style={styles.videoContainer}>
//       <TouchableOpacity onPress={() => alert(`Selected Video: ${item.videoPath}`)}>
//         <Video
//           source={{ uri: `${API_BASE_URL}/log_videos/${item.videoPath.split('/').pop()}` }} // Using the path to load the video
//           style={styles.video}
//           resizeMode="cover"
//           repeat
//           controls
//         />
//       </TouchableOpacity>

//       <View style={styles.infoContainer}>
//         <Text style={styles.infoText}>Action: {item.detectionType}</Text>
//         <Text style={styles.infoText}>Date: {item.date}</Text>
//         <Text style={styles.infoText}>Time: {item.time}</Text>
//       </View>
//     </View>
//   );

//   if (loading) {
//     return (
//       <View style={styles.container}>
//         <ActivityIndicator size="large" color="#fff" />
//       </View>
//     );
//   }

//   if (error) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.errorText}>{error}</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={videos}
//         renderItem={renderVideo}
//         keyExtractor={(item) => item.id.toString()}
//         numColumns={1}
//         contentContainerStyle={styles.list}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1c1e30',
//   },
//   list: {
//     padding: 10,
//   },
//   videoContainer: {
//     width: '100%',
//     marginBottom: 10,
//     borderRadius: 10,
//     overflow: 'hidden',
//     backgroundColor: '#444',
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//   },
//   video: {
//     width: '100%',
//     height: 200, // Adjust the height as needed
//   },
//   infoContainer: {
//     padding: 10,
//     backgroundColor: '#27293d',
//     borderBottomLeftRadius: 10,
//     borderBottomRightRadius: 10,
//   },
//   infoText: {
//     fontSize: 14,
//     color: '#bbb',
//     marginBottom: 5,
//   },
//   errorText: {
//     color: 'red',
//     textAlign: 'center',
//     fontSize: 16,
//   },
// });

// export default LogVideos;

















// import React, { useState, useEffect } from 'react';
// import { View, FlatList, Text, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
// import Video from 'react-native-video';  // Or any other video player library you're using
// import axios from 'axios';
// const API_BASE_URL = 'https://51ef-111-88-210-95.ngrok-free.app/api';  // Your Ngrok URL

// const LogVideos = () => {
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         axios.get('https://51ef-111-88-210-95.ngrok-free.app/api/videos')
//     .then(response => {
//         console.log(response.data);
//     })
//     .catch(error => {
//         console.error('Error fetching videos:', error);
//     });
//       } catch (err) {
//         setError('An error occurred while fetching videos');
//       } finally {
//         setLoading(false);
//       }
//     };


//     fetchVideos();
//   }, []);

//   const renderVideo = ({ item }) => (
//     <View style={styles.videoContainer}>
//       {/* <TouchableOpacity onPress={() => alert(`Selected Video: ${item.videoPath}`)}>
//         <Video
//           source={{ uri: `${API_BASE_URL}/log_videos/${item.videoPath.split('/').pop()}` }}  // Construct the video URL
//           style={styles.video}
//           resizeMode="cover"
//           repeat
//           controls
//         />
//       </TouchableOpacity> */}

//       <View style={styles.infoContainer}>
//         <Text style={styles.infoText}>Action: {item.detectionType}</Text>
//         <Text style={styles.infoText}>Date: {item.date}</Text>
//         <Text style={styles.infoText}>Time: {item.time}</Text>
//       </View>
//     </View>
//   );

//   if (loading) {
//     return (
//       <View style={styles.container}>
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }

//   if (error) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.errorText}>{error}</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={videos}
//         renderItem={renderVideo}
//         keyExtractor={(item) => item._id}  // Use '_id' as the key
//         numColumns={1}
//         contentContainerStyle={styles.list}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f8f8',
//   },
//   list: {
//     padding: 10,
//   },
//   videoContainer: {
//     width: '100%',
//     marginBottom: 10,
//     borderRadius: 10,
//     overflow: 'hidden',
//     backgroundColor: '#444',
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//   },
//   video: {
//     width: '100%',
//     height: 200, // Adjust as needed
//   },
//   infoContainer: {
//     padding: 10,
//     backgroundColor: '#27293d',
//     borderBottomLeftRadius: 10,
//     borderBottomRightRadius: 10,
//   },
//   infoText: {
//     fontSize: 14,
//     color: '#bbb',
//     marginBottom: 5,
//   },
//   errorText: {
//     color: 'red',
//     textAlign: 'center',
//     fontSize: 16,
//   },
// });

// export default LogVideos;



























// import React, { useState, useEffect } from 'react';
// import { View, FlatList, Text, ActivityIndicator, StyleSheet, Alert } from 'react-native';
// import axios from 'axios';

// const API_BASE_URL = 'https://51ef-111-88-210-95.ngrok-free.app/api'; // Your Ngrok URL

// const LogVideos = () => {
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const response = await axios.get(`${API_BASE_URL}/videos`);
//         setVideos(response.data); // Update the videos state with the fetched data
//         console.log('Videos fetched successfully:', response.data);
//       } catch (err) {
//         console.error('Error fetching videos:', err.message);
//         setError('Failed to load videos. Please try again later.');
//         Alert.alert('Error', 'Failed to load videos. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchVideos();
//   }, []);

//   const renderVideo = ({ item }) => (
//     <View style={styles.videoContainer}>
//       <View style={styles.infoContainer}>
//         <Text style={styles.infoText}>Action: {item.detectionType}</Text>
//         <Text style={styles.infoText}>Date: {item.date}</Text>
//         <Text style={styles.infoText}>Time: {item.time}</Text>
//       </View>
//     </View>
//   );

//   if (loading) {
//     return (
//       <View style={styles.container}>
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }

//   if (error) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.errorText}>{error}</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={videos}
//         renderItem={renderVideo}
//         keyExtractor={(item, index) => item._id || index.toString()} // Ensures a unique key
//         numColumns={1}
//         contentContainerStyle={styles.list}
//       />

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f8f8',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   list: {
//     padding: 10,
//   },
//   videoContainer: {
//     width: '100%',
//     marginBottom: 10,
//     borderRadius: 10,
//     overflow: 'hidden',
//     backgroundColor: '#444',
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//   },
//   infoContainer: {
//     padding: 10,
//     backgroundColor: '#27293d',
//     borderBottomLeftRadius: 10,
//     borderBottomRightRadius: 10,
//   },
//   infoText: {
//     fontSize: 14,
//     color: '#bbb',
//     marginBottom: 5,
//   },
//   errorText: {
//     color: 'red',
//     textAlign: 'center',
//     fontSize: 16,
//   },
// });

// export default LogVideos;























// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
// import axios from 'axios';
// import Video from 'react-native-video';

// const VideosList = () => {
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const response = await axios.get('https://51ef-111-88-210-95.ngrok-free.app/api/videos');
//         setVideos(response.data); // Set fetched videos to state
//         setLoading(false); // Stop loading once data is fetched
//       } catch (err) {
//         setError('Failed to fetch videos');
//         setLoading(false);
//       }
//     };

//     fetchVideos();
//   }, []);

//   if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
//   if (error) return <Text>{error}</Text>;

//   const renderItem = ({ item }) => (
//     <View style={styles.videoItem}>
//       <Text>{item.detectionType} - {item.date} {item.time}</Text>
//       <Video
//         source={{ uri: `https://51ef-111-88-210-95.ngrok-free.app/${item.videoPath}` }} // Adjust URL based on your setup
//         style={styles.videoPlayer}
//         controls={true}
//         resizeMode="contain"
//       />
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Videos</Text>
//       <FlatList
//         data={videos}
//         keyExtractor={(item) => item._id}
//         renderItem={renderItem}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   videoItem: {
//     marginBottom: 20,
//     borderWidth: 1,
//     borderRadius: 8,
//     padding: 10,
//     borderColor: '#ddd',
//   },
//   videoPlayer: {
//     height: 200,
//     width: '100%',
//   },
// });

// export default VideosList;



















// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
// import axios from 'axios';
// import Video from 'react-native-video';
// // import React from 'react';
// import { TouchableOpacity } from 'react-native';
// // import Video from 'react-native-video';


// const LogVideos = () => {
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//         try {
//               const response = await fetch(`https://a356-111-88-210-95.ngrok-free.app/api/videos`, {
//                 method: 'GET',
//                 headers: {
//                   'Content-Type': 'application/json',
//                 }
//               });

//               const data = await response.json();

//     }, []);

//     if (loading) {
//         return <p>Loading videos...</p>;
//     }

//     if (videos.length === 0) {
//         return <p>No videos logged yet.</p>;
//     }

//     return (
//       <View style={styles.container}>
//         <Text style={styles.header}>Logged Videos</Text>
//         <FlatList
//           data={videos}
//           renderItem={({ item, index }) => (
//             <View key={index} style={styles.videoLog}>
//               <View style={styles.videoLogText}>
//                 <Text style={styles.boldText}>Detection Type: {item.detectionType}</Text>
//                 <Text style={styles.text}>Date: {item.date}</Text>
//                 <Text style={styles.text}>Time: {item.time}</Text>
//               </View>

//               {/* <Video
//                 source={{
//                   uri: `https://51ef-111-88-210-95.ngrok-free.app/api/log_videos/${item.videoPath.split('/').pop()}`,
//                 }} // Video source
//                 style={styles.videoPlayer}
//                 controls={true}
//                 resizeMode="contain"
//               /> */}
//               {/* Log the filename to the console */}
//               {/* {console.log(item.videoPath.split('/').pop())} */}
//             </View>
//           )}
//           keyExtractor={(item, index) => index.toString()}
//         />
//       </View>
//     );
//   };

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       padding: 16,
//     },
//     header: {
//       fontSize: 30,
//       fontWeight: 'bold',
//       paddingBottom: 20,
//     },
//     videoLog: {
//       marginBottom: 20,
//       borderWidth: 1,
//       borderRadius: 8,
//       padding: 10,
//       borderColor: '#ddd',
//     },
//     videoLogText: {
//       marginBottom: 10,
//     },
//     text: {
//       fontSize: 14,
//       marginVertical: 2,
//     },
//     boldText: {
//       fontWeight: 'bold',
//       fontSize: 16,
//     },
//     videoPlayer: {
//       height: 200,
//       width: '100%',
//       marginVertical: 10,
//     },
//   });

//   export default LogVideos;
















// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// import axios from 'axios';

// import Video from 'react-native-video';

// const LogVideos = () => {
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch videos from API
//     axios.get("http://localhost:5000/api/videos")
//       .then(response => {
//         setVideos(response.data); // Use response.data directly as it's already an array
//         console.log(response.data)
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching videos:', error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <Text>Loading videos...</Text>;
//   }

//   if (videos.length === 0) {
//     return <Text>No videos logged yet.</Text>;
//   }

//   const sortData = (columnKey, sortOrder) => {
//     const sortedData = [...videos].sort((a, b) => {
//       if (a[columnKey] < b[columnKey]) {
//         return sortOrder === 'asc' ? -1 : 1;
//       }
//       if (a[columnKey] > b[columnKey]) {
//         return sortOrder === 'asc' ? 1 : -1;
//       }
//       return 0;
//     });
//     setVideos(sortedData);
//   };

//   const renderRow = (video, index) => (
//     <View key={index} style={styles.row}>
//       <Text style={styles.cell}>{index + 1}</Text> {/* Display the index starting from 1 */}
//       <Text style={styles.cell}>Camera 1</Text> {/* Event source */}
//       <Text style={styles.cell}>{video.detectionType}</Text> {/* Event type */}
//       <Text style={styles.cell}>{video.date}</Text> {/* Event date */}
//       <Text style={styles.cell}>{video.time}</Text> {/* Event time */}
//       <Text style={styles.cell}>
//         {video.detectionType === 'snatching'
//           ? 'High'
//           : video.detectionType === 'fighting'
//           ? 'Alert'
//           : 'Normal'}
//       </Text> {/* Set priority dynamically */}
//       <Text style={styles.cell}><Video
//         source={{
//           uri: `http://localhost:5001/log_videos/${video.videoPath.split('/').pop()}`,
//         }} // Video source URL
//         style={styles.video}
//         controls={true} // Enable video controls
//         resizeMode="contain" // Adjust video scaling
//         paused={false} // Auto-play the video
//       />
//       </Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => sortData('index', 'asc')}>
//           <Text style={styles.headerText}>Index</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => sortData('source', 'asc')}>
//           <Text style={styles.headerText}>Event Source</Text>
//         </TouchableOpacity>
//         <Text style={styles.headerText}>Event Type</Text>
//         <Text style={styles.headerText}>Event Date</Text>
//         <Text style={styles.headerText}>Event Time</Text>
//         <Text style={styles.headerText}>Priority</Text>
//         <Text style={styles.headerText}>Video</Text>
//       </View>
//       <FlatList
//         data={videos}
//         renderItem={({ item, index }) => renderRow(item, index)}
//         keyExtractor={(item, index) => index.toString()}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   header: {
//     flexDirection: 'row',
//     paddingBottom: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     marginBottom: 10,
//   },
//   headerText: {
//     fontWeight: 'bold',
//     marginRight: 20,
//     flex: 1,
//   },
//   row: {
//     flexDirection: 'row',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     alignItems: 'center',
//   },
//   checkbox: {
//     marginRight: 10,
//   },
//   cell: {
//     flex: 1,
//     fontSize: 14,
//     marginRight: 10,
//   },

//   video: {
//     width: '15%',
//     height: '150%',
//     margin: 30
//   },
// });

// export default LogVideos;


















// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet } from 'react-native';
// import axios from 'axios';
// import Video from 'react-native-video';

// const LogVideos = () => {
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch videos from API
//     axios
//       .get('http://localhost:5000/api/videos')
//       .then((response) => {
//         setVideos(response.data); // Use response.data directly as it's already an array
//         console.log(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching videos:', error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <Text>Loading videos...</Text>;
//   }

//   if (videos.length === 0) {
//     return <Text>No videos logged yet.</Text>;
//   }

//   const renderItem = ({ item, index }) => (
//     <View key={index} style={styles.gridItem}>
//       <Text style={styles.infoText}>Index: {index + 1}</Text>
//       <Text style={styles.infoText}>Source: Camera 1</Text>
//       <Text style={styles.infoText}>Type: {item.detectionType}</Text>
//       <Text style={styles.infoText}>Date: {item.date}</Text>
//       <Text style={styles.infoText}>Time: {item.time}</Text>
//       <Text style={styles.infoText}>
//         Priority: 
//         {item.detectionType === 'snatching'
//           ? ' High'
//           : item.detectionType === 'fighting'
//           ? ' Alert'
//           : ' Normal'}
//       </Text>
//       <Video
//         source={{
//           uri: `http://localhost:5001/log_videos/${item.videoPath.split('/').pop()}`,
//         }}
//         style={styles.video}
//         controls={true} // Enable video controls
//         resizeMode="contain" // Adjust video scaling
//         paused={false} // Auto-play the video
//       />
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={videos}
//         renderItem={renderItem}
//         keyExtractor={(item, index) => index.toString()}
//         numColumns={2} // Set the grid to 2 columns
//         contentContainerStyle={styles.grid}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#f9f9f9',
//     height:'100%',
//   },
//   grid: {
//     justifyContent: 'space-between',
//   },
//   gridItem: {
//     flex: 1,
//     backgroundColor: '#fff',
//     margin: 8,
//     padding: 8,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 3,
//     alignItems: 'center',
//   },
//   infoText: {
//     fontSize: 14,
//     marginBottom: 4,
//     textAlign: 'center',
//   },
//   video: {
//     width: '100%',
//     height: '100%', // Adjust height for 100% in proportion to the grid item
//     borderRadius: 8,
//     marginTop: 100,
//   },
// });

// export default LogVideos;















// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet } from 'react-native';
// import axios from 'axios';
// import Video from 'react-native-video';

// const LogVideos = () => {
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch videos from API
//     axios
//       .get('http://localhost:5000/api/videos')
//       .then((response) => {
//         setVideos(response.data); // Use response.data directly as it's already an array
//         console.log(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching videos:', error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <Text>Loading videos...</Text>;
//   }

//   if (videos.length === 0) {
//     return <Text>No videos logged yet.</Text>;
//   }

//   const renderItem = ({ item, index }) => (
//     <View key={index} style={styles.gridItem}>
//       {/* Video Container */}
//       <View style={styles.videoContainer}>
//         <Video
//           source={{
//             uri: `http://localhost:5001/log_videos/${item.videoPath.split('/').pop()}`,
//           }}
//           style={styles.video}
//           controls={true} // Enable video controls
//           resizeMode="contain" // Adjust video scaling
//           paused={false} // Auto-play the video
//         />
//       </View>
//       {/* Text Details Container */}
//       <View style={styles.textContainer}>
//         <Text style={styles.infoText}>Index: {index + 1}</Text>
//         <Text style={styles.infoText}>Source: Camera 1</Text>
//         <Text style={styles.infoText}>Type: {item.detectionType}</Text>
//         <Text style={styles.infoText}>Date: {item.date}</Text>
//         <Text style={styles.infoText}>Time: {item.time}</Text>
//         <Text style={styles.infoText}>
//           Priority: 
//           {item.detectionType === 'snatching'
//             ? ' High'
//             : item.detectionType === 'fighting'
//             ? ' Alert'
//             : ' Normal'}
//         </Text>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={videos}
//         renderItem={renderItem}
//         keyExtractor={(item, index) => index.toString()}
//         numColumns={2} // Set the grid to 2 columns
//         contentContainerStyle={styles.grid}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#f9f9f9',
//   },
//   grid: {
//     justifyContent: 'space-between',
//   },
//   gridItem: {
//     flex: 2,
//     backgroundColor: '#fff',
//     margin: 8,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 3,
//     flexDirection: 'row', // Arrange containers side by side
//   },
//   videoContainer: {
//     flex: 2,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 8,
//   },
//   textContainer: {
//     flex: 3,
//     padding: 8,
//     justifyContent: 'center',
//   },
//   infoText: {
//     fontSize: 14,
//     marginBottom: 4,
//   },
//   video: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 8,
//   },
// });

// export default LogVideos;





















// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet } from 'react-native';
// import axios from 'axios';
// import Video from 'react-native-video';


// const LogVideos = () => {
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch videos from API
//     axios
//       .get('http://localhost:5000/api/videos')
//       .then((response) => {
//         setVideos(response.data); // Use response.data directly as it's already an array
//         console.log(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching videos:', error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <Text>Loading videos...</Text>;
//   }

//   if (videos.length === 0) {
//     return <Text>No videos logged yet.</Text>;
//   }

//   const renderItem = ({ item, index }) => (
//     <View key={index} style={styles.itemContainer}>
//       {/* Video Container */}
//       <View style={styles.videoContainer}>
//         <Video
//           source={{
//             uri: `http://localhost:5001/log_videos/${item.videoPath.split('/').pop()}`,
//           }}
//           style={styles.video}
//           controls={true} // Enable video controls
//           resizeMode="contain" // Adjust video scaling
//           paused={false} // Auto-play the video
//         />
//       </View>
//       {/* Text Details Container */}
//       <View style={styles.textContainer}>
//         {/* <Text style={styles.infoText}>Index: {index + 1}</Text> */}
//         <Text style={styles.infoText}>Source: Camera 1</Text>
//         <Text style={styles.infoText}>Type: {item.detectionType}</Text>
//         <Text style={styles.infoText}>Date: {item.date}</Text>
//         <Text style={styles.infoText}>Time: {item.time}</Text>
//         {/* <Text style={styles.infoText}>
//           Priority: 
//           {item.detectionType === 'snatching'
//             ? ' High'
//             : item.detectionType === 'fighting'
//             ? ' Alert'
//             : ' Normal'}
//         </Text> */}
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={videos}
//         renderItem={renderItem}
//         keyExtractor={(item, index) => index.toString()}
//         contentContainerStyle={styles.list}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#f9f9f9',
//   },  
//   list: {
//     flexGrow: 1,
//     paddingBottom: 16, // Prevent last item from being cut off
//   },  
//   itemContainer: {
//     backgroundColor: '#fff',
//     marginBottom: 16,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 3,
//     flexDirection: 'row', // Arrange video and text side by side
//   },
//   videoContainer: {
//     flex: 2,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 8,
//   },
//   textContainer: {
//     flex: 3,
//     padding: 8,
//     justifyContent: 'center',
//     marginLeft:30,
//   },
//   infoText: {
//     fontSize: 14,
//     marginBottom: 4,
//   },
//   video: {
//     width: '100%',
//     height: 150, // Adjust the height of the video container
//     borderRadius: 8,
//   },
// });

// export default LogVideos;

















import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import axios from 'axios';
import Video from 'react-native-video';

const LogVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('userID'); // Or sessionStorage.getItem('userJwt')
    console.log("token", token)
    axios
      .get('http://localhost:5000/api/video', {
        withCredentials: true,
        headers: {
          'Authorization': `Bearer ${token}`, // Include token in Authorization header
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setVideos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching videos:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Text>Loading videos...</Text>;
  }

  if (videos.length === 0) {
    return <Text>No videos logged yet.</Text>;
  }

  const renderItem = ({ item, index }) => (
    <View key={index} style={styles.itemContainer}>
      <View style={styles.videoContainer}>
        <Video
          source={{
            uri: `http://localhost:5001/log_videos/${item.videoPath.split('/').pop()}`,
          }}
          style={styles.video}
          controls={true}
          resizeMode="contain"
          paused={false}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.infoText}>Source: Camera 1</Text>
        <Text style={styles.infoText}>Type: {item.detectionType}</Text>
        <Text style={styles.infoText}>Date: {item.date}</Text>
        <Text style={styles.infoText}>Time: {item.time}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={videos}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.list}
          scrollEnabled={true}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'rgba(28, 30, 48, 1.00)',
    color: 'white',
  },
  list: {
    flexGrow: 1,
    paddingBottom: 16,
  },
  itemContainer: {
    // backgroundColor: '#fff',
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    flexDirection: 'row', backgroundColor: 'rgba(39, 41, 61, 1.00)',
    borderRadius: 10,
    color: 'white',
  },
  videoContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,

  },
  textContainer: {
    flex: 3,
    padding: 8,
    justifyContent: 'center',
    marginLeft: 30,
    backgroundColor: 'rgba(39, 41, 61, 1.00)',
    color: 'white',
    borderRadius: 10,

  },
  infoText: {
    fontSize: 14,
    marginBottom: 4,
    // backgroundColor: 'rgba(28, 30, 48, 1.00)',
    color: 'white',
    borderRadius: 10,
  },
  video: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
});

export default LogVideos;
