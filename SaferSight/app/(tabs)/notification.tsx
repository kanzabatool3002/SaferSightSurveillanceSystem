// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { io } from 'socket.io-client';
// import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

// const socket = io('http://localhost:5000', { withCredentials: true });

// const UnreadPage = () => {
//   const [unreadNotifications, setUnreadNotifications] = useState([]);

//   useEffect(() => {
//     // Fetch unread logs from backend


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



//       // axios.get('http://localhost:5000/logs')
//       .then(response => {
//         const data = response.data || {};
//         setUnreadNotifications(data.unread || []);
//       })
//       .catch(err => console.error('Failed to fetch unread logs', err));

//     // Listen for new log events via socket
//     socket.on('new-log', (log) => {
//       setUnreadNotifications(prev => [log, ...prev]);
//     });

//     // Cleanup socket listener when the component is unmounted
//     return () => {
//       socket.off('new-log');
//     };
//   }, []);

//   const markAllAsRead = () => {
//     axios.post('http://localhost:5000/mark-all-read')
//       .then(() => {
//         setUnreadNotifications([]);
//       })
//       .catch(err => console.error('Failed to mark all as read', err));
//   };

//   const renderItem = ({ item }) => (
//     <View style={styles.notificationItem}>
//       <Text style={styles.notificationText}>
//         <Text style={styles.boldText}>{item.detectionType}</Text> detected at {item.date} {item.time}.
//       </Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Notifications</Text>

//       {/* <TouchableOpacity onPress={markAllAsRead} style={styles.button}>
//         <Text style={styles.buttonText}>Read All</Text>
//       </TouchableOpacity> */}

      


//       {/* <FlatList
//         data={unreadNotifications}
//         renderItem={renderItem}
//         keyExtractor={(item, index) => index.toString()}
//       /> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: 'rgba(28, 30, 48, 1.00)',
//     color: 'white',

//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: 'white',
//   },
//   button: {
//     backgroundColor: '#007BFF',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 20,
//   },
//   buttonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontSize: 16,
//   },
//   notificationItem: {
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     color: 'white',
//   },
//   notificationText: {
//     fontSize: 16,
//     color: 'white',
//   },
//   boldText: {
//     fontWeight: 'bold',
//   },
// });

// export default UnreadPage;





























import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const socket = io('http://localhost:5000', { withCredentials: true });

const UnreadPage = () => {
  const [unreadNotifications, setUnreadNotifications] = useState([]);

  useEffect(() => {
    // Fetch unread logs from backend
    const token = localStorage.getItem('userID'); // Or sessionStorage.getItem('userJwt')
    console.log("token", token)
    axios
      .get('http://localhost:5000/moblogs', {
        withCredentials: true,
        headers: {
          'Authorization': `Bearer ${token}`, // Include token in Authorization header
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        const data = response.data || {};
        setUnreadNotifications(data.unread || []);
      })
      .catch(err => console.error('Failed to fetch unread logs', err));

    // Listen for new log events via socket
    socket.on('new-log', (log) => {
      setUnreadNotifications(prev => [log, ...prev]);
    });

    // Cleanup socket listener when the component is unmounted
    return () => {
      socket.off('new-log');
    };
  }, []);

  const markAllAsRead = () => {
    axios.post('http://localhost:5000/mark-all-read')
      .then(() => {
        setUnreadNotifications([]);
      })
      .catch(err => console.error('Failed to mark all as read', err));
  };

  const renderItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <Text style={styles.notificationText}>
        <Text style={styles.boldText}>{item.detectionType}</Text> detected at {item.date} {item.time}.
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>

      {/* Optionally, add a "Mark All as Read" button */}
      {/* <TouchableOpacity onPress={markAllAsRead} style={styles.button}>
        <Text style={styles.buttonText}>Read All</Text>
      </TouchableOpacity> */}

      {/* Conditionally render notifications or "No notifications yet" */}
      {unreadNotifications.length === 0 ? (
        <Text style={styles.noNotificationsText}>No notifications yet.</Text>
      ) : (
        <FlatList
          data={unreadNotifications}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(28, 30, 48, 1.00)',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  noNotificationsText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
  notificationItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    color: 'white',
  },
  notificationText: {
    fontSize: 16,
    color: 'white',
  },
  boldText: {
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default UnreadPage;
