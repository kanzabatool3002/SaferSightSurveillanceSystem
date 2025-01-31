// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { useRouter, useSegments } from 'expo-router';

// export const CustomBottomTab = () => {
//   const router = useRouter();
//   const segments = useSegments();

//   const isActive = (route: string) => segments.includes(route);

//   return (
//     <View style={styles.tabBar}>
//       <TouchableOpacity
//         style={styles.tabButton}
//         onPress={() => router.push('/Home')}>
//         <Text style={[styles.tabText, isActive('Home') && styles.activeTab]}>
//           Home
//         </Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.tabButton}
//         onPress={() => router.push('/Support')}>
//         <Text style={[styles.tabText, isActive('Support') && styles.activeTab]}>
//           Support
//         </Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.tabButton}
//         onPress={() => router.push('/Log_videos')}>
//         <Text style={[styles.tabText, isActive('Log_videos') && styles.activeTab]}>
//           Log Videos
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.tabButton}
//         onPress={() => router.push('/notification')}>
//         <Text style={[styles.tabText, isActive('notification') && styles.activeTab]}>
//           Notification
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   tabBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     paddingVertical: 10,
//     backgroundColor: '#1c1c1e',
//     borderTopWidth: 1,
//     borderTopColor: '#333',
//   },
//   tabButton: {
//     alignItems: 'center',
//   },
//   tabText: {
//     color: '#8e8e8e',
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   activeTab: {
//     color: '#fff',
//   },
// });






















// correct 

// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { useRouter, useSegments } from 'expo-router';
// import ProtectedRoute from '@/components/ProtectedRoute';
// import axios from 'axios';

// export const CustomBottomTab = () => {
//   const router = useRouter();
//   const segments = useSegments();

//   // const [notificationCount, setNotificationCount] = useState(0);
  
//   const [unreadNotifications, setUnreadNotifications] = useState([]);

//   // Example: Simulate fetching notifications or a real-time update
//   useEffect(() => {
//     // Fetch unread logs from backend
//     // axios.get('http://localhost:5000/logs')
//     const token = localStorage.getItem('userID'); // Or sessionStorage.getItem('userJwt')
//     console.log("token", token)
//     axios
//       .get('http://localhost:5000/moblogs', {
//         withCredentials: true,
//         headers: {
//           'Authorization': `Bearer ${token}`, // Include token in Authorization header
//           'Content-Type': 'application/json',
//         },
//       })
//       .then(response => {
//         const data = response.data || {};
//         setUnreadNotifications(data.unread || []);
//       })
//       .catch(err => console.error('Failed to fetch unread logs', err));
//  // Cleanup on component unmount
//   }, []);

//   const isActive = (route: string) => segments.includes(route);

//   return (
//     <View style={styles.tabBar}>
//       <TouchableOpacity
//         style={styles.tabButton}
//         onPress={() => router.push('/Home')}>
//         <Text style={[styles.tabText, isActive('Home') && styles.activeTab]}>
//           Home
//         </Text>
//       </TouchableOpacity>

//       {/* <TouchableOpacity
//         style={styles.tabButton}
//         onPress={() => router.push('/Support')}>
//         <Text style={[styles.tabText, isActive('Support') && styles.activeTab]}>
//           Support
//         </Text>
//       </TouchableOpacity> */}

//       <TouchableOpacity
//         style={styles.tabButton}
//         onPress={() => router.push('/Log_videos')}>
//         <Text style={[styles.tabText, isActive('Log_videos') && styles.activeTab]}>
//           Log Videos
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.tabButton}
//         onPress={() => router.push('/Profile')}>
//         <Text style={[styles.tabText, isActive('Profile') && styles.activeTab]}>
//         Profile
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.tabButton}
//         onPress={() => router.push('/Support')}>
//         <Text style={[styles.tabText, isActive('Support') && styles.activeTab]}>
//           Support
//         </Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.tabButton}
//         onPress={() => router.push('/notification')}>
//         <Text style={[styles.tabText, isActive('notification') && styles.activeTab]}>
//           Notification
//         </Text>

//         {/* Badge for Notification Count */}
//         {/* {unreadNotifications.length && ( */}
//         <View style={styles.badgeContainer}>
//         <Text style={styles.badgeText}>{unreadNotifications.length}</Text>
//       </View>
//       {/* )} */}
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   tabBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     paddingVertical: 10,
//     backgroundColor: '#1c1c1e',
//     borderTopWidth: 1,
//     borderTopColor: '#333',
//   },
//   tabButton: {
//     alignItems: 'center',
//     position: 'relative', // Make sure the badge is positioned relative to the button
//   },
//   badgeContainer: {
//     position: 'absolute',
//     top: -5,
//     right: -5,
//     backgroundColor: 'red',
//     borderRadius: 12,
//     paddingHorizontal: 6,
//     paddingVertical: 2,
//   },
//   tabText: {
//     color: '#8e8e8e',
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   activeTab: {
//     color: '#fff',
//   },
//   badge: {
//     position: 'absolute',
//     top: -5,
//     right: -5,
//     backgroundColor: '#f00', // Red background for the badge
//     borderRadius: 10,
//     paddingHorizontal: 6,
//     paddingVertical: 2,
//   },
//   badgeText: {
//     color: '#fff',
//     fontSize: 12,
//     fontWeight: 'bold',
//   },
// });























// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { useRouter, useSegments } from 'expo-router';
// import Icon from 'react-native-vector-icons/Ionicons'; // Example: Ionicons
// import axios from 'axios';

// export const CustomBottomTab = () => {
//   const router = useRouter();
//   const segments = useSegments();

  
//   const [unreadNotifications, setUnreadNotifications] = useState([]);

//   // Example: Simulate fetching notifications or a real-time update
//   useEffect(() => {
//     const token = localStorage.getItem('userID'); // Or sessionStorage.getItem('userJwt')
//     console.log("token", token)
//     axios
//       .get('http://localhost:5000/moblogs', {
//         withCredentials: true,
//         headers: {
//           'Authorization': `Bearer ${token}`, // Include token in Authorization header
//           'Content-Type': 'application/json',
//         },
//       })
//       .then(response => {
//         const data = response.data || {};
//         setUnreadNotifications(data.unread || []);
//       })
//       .catch(err => console.error('Failed to fetch unread logs', err));
//  // Cleanup on component unmount
//   }, []);

//   const isActive = (route: string) => segments.includes(route);

//   return (
//     <View style={styles.tabBar}>
//       <TouchableOpacity
//         style={styles.tabButton}
//         onPress={() => router.push('/Home')}>
//         <Text style={[styles.tabText, isActive('Home') && styles.activeTab]}>
//           Home
//         </Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.tabButton}
//         onPress={() => router.push('/Log_videos')}>
//         <Text style={[styles.tabText, isActive('Log_videos') && styles.activeTab]}>
//           Log Videos
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.tabButton}
//         onPress={() => router.push('/Profile')}>
//         <Text style={[styles.tabText, isActive('Profile') && styles.activeTab]}>
//         Profile
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.tabButton}
//         onPress={() => router.push('/Support')}>
//         <Text style={[styles.tabText, isActive('Support') && styles.activeTab]}>
//           Support
//         </Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.tabButton}
//         onPress={() => router.push('/notification')}>
//         <Text style={[styles.tabText, isActive('notification') && styles.activeTab]}>
//           Notification
//         </Text>
//         <View style={styles.badgeContainer}>
//         <Text style={styles.badgeText}>{unreadNotifications.length}</Text>
//       </View>
//       {/* )} */}
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   tabBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     paddingVertical: 10,
//     backgroundColor: '#1c1c1e',
//     borderTopWidth: 1,
//     borderTopColor: '#333',
//   },
//   tabButton: {
//     alignItems: 'center',
//     position: 'relative', // Make sure the badge is positioned relative to the button
//   },
//   badgeContainer: {
//     position: 'absolute',
//     top: -5,
//     right: -5,
//     backgroundColor: 'red',
//     borderRadius: 12,
//     paddingHorizontal: 6,
//     paddingVertical: 2,
//   },
//   tabText: {
//     color: '#8e8e8e',
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   activeTab: {
//     color: '#fff',
//   },
//   badge: {
//     position: 'absolute',
//     top: -5,
//     right: -5,
//     backgroundColor: '#f00', // Red background for the badge
//     borderRadius: 10,
//     paddingHorizontal: 6,
//     paddingVertical: 2,
//   },
//   badgeText: {
//     color: '#fff',
//     fontSize: 12,
//     fontWeight: 'bold',
//   },
// });


























import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter, useSegments } from 'expo-router';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons or another icon set

export const CustomBottomTab = () => {
  const router = useRouter();
  const segments = useSegments();

  const [unreadNotifications, setUnreadNotifications] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('userID');
    axios
      .get('http://localhost:5000/moblogs', {
        withCredentials: true,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        const data = response.data || {};
        setUnreadNotifications(data.unread || []);
      })
      .catch(err => console.error('Failed to fetch unread logs', err));
  }, []);

  const isActive = (route: string) => segments.includes(route);

  return (
    <View style={styles.tabBar}>
      {/* <TouchableOpacity
        style={styles.tabButton}
        onPress={() => router.push('/Home')}>
        <Icon name="home" size={24} color={isActive('Home') ? '#fff' : '#8e8e8e'} />
        <Text style={[styles.tabText, isActive('Home') && styles.activeTab]}>Home</Text>
      </TouchableOpacity> */}

      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => router.push('/Log_videos')}>
        <Icon name="videocam" size={24} color={isActive('Log_videos') ? '#fff' : '#8e8e8e'} />
        <Text style={[styles.tabText, isActive('Log_videos') && styles.activeTab]}>Log Videos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => router.push('/Profile')}>
        <Icon name="person" size={24} color={isActive('Profile') ? '#fff' : '#8e8e8e'} />
        <Text style={[styles.tabText, isActive('Profile') && styles.activeTab]}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => router.push('/Support')}>
        <Icon name="help-circle" size={24} color={isActive('Support') ? '#fff' : '#8e8e8e'} />
        <Text style={[styles.tabText, isActive('Support') && styles.activeTab]}>Support</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => router.push('/notification')}>
        <Icon name="notifications" size={24} color={isActive('notification') ? '#fff' : '#8e8e8e'} />
        <Text style={[styles.tabText, isActive('notification') && styles.activeTab]}>Notification</Text>
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{unreadNotifications.length}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#1c1c1e',
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  tabButton: {
    alignItems: 'center',
    position: 'relative',
  },
  badgeContainer: {
    position: 'absolute',
    top: -5,
    right: 19,
    backgroundColor: 'red',
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  tabText: {
    color: '#8e8e8e',
    fontSize: 14,
    fontWeight: '600',
  },
  activeTab: {
    color: '#fff',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});



































// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// const NotificationButton = ({ unreadNotifications }) => {
//   const handleNotificationClick = () => {
//     // Handle the notification button click, e.g., navigate to the notifications screen
//     console.log("Notification clicked");
//   };

//   return (
//     <View style={styles.notificationButton}>
//       {/* Bell Icon (You can use a third-party icon library like react-native-vector-icons) */}
//       <TouchableOpacity onPress={handleNotificationClick}>
//         <Text style={styles.icon}>🔔</Text>
//       </TouchableOpacity>

//       {/* Badge displaying unread notification count */}
//       {unreadNotifications.length > 0 && (
//         <View style={styles.badge}>
//           <Text style={styles.badgeText}>{unreadNotifications.length}</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   notificationButton: {
//     position: 'relative',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   icon: {
//     fontSize: 30, // Set the size of the bell icon
//   },
//   badge: {
//     position: 'absolute',
//     top: -5,
//     right: -5,
//     backgroundColor: 'red',
//     borderRadius: 10,
//     width: 20,
//     height: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   badgeText: {
//     color: 'white',
//     fontSize: 12,
//     fontWeight: 'bold',
//   },
// });

// export default NotificationButton;
