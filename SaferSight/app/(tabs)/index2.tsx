// import { Image, StyleSheet, Platform } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">hello123!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">helloo djsd: Try it</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//         <ThemedText>
//           Tap the Explore tab to learn more about what's included in this starter app.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           When you're ready, run{' '}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });


















// import React, { useState } from 'react';
// import { TextInput, Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { API_BASE_URL } from '../../constants/api'; // Adjust path based on your structure
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const index = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigation = useNavigation();

//   const handleLogin = async () => {
//     try {
//       const response = await fetch(`${API_BASE_URL}/users/auth`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();
//       console.log(data);

//       if (response.ok) {
//         // Save token and user data in AsyncStorage
//         await AsyncStorage.setItem('username', data.name);
//         await AsyncStorage.setItem('email', data.email);
//         await AsyncStorage.setItem('userID', data.userId);
//         await AsyncStorage.setItem('organizationName', data.organizationName);
//         await AsyncStorage.setItem('createdAt', data.createdAt);

//         console.log('login successful');
//         navigation.navigate('Log_videos'); // Navigate to Log_videos screen
//       } else {
//         setErrorMessage(data.message || 'Login failed');
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//       setErrorMessage('Network error. Please try again later.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.formContainer}>
//         <Text style={styles.heading}>Login</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           placeholderTextColor="#aaa"
//           value={email}
//           onChangeText={setEmail}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           placeholderTextColor="#aaa"
//           secureTextEntry
//           value={password}
//           onChangeText={setPassword}
//         />
//         {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
//         <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//           <Text style={styles.loginButtonText}>Login</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(28, 30, 48, 1.00)',
//   },
//   formContainer: {
//     width: '90%',
//     maxWidth: 400,
//     padding: 20,
//     borderRadius: 10,
//     backgroundColor: 'rgba(39, 41, 61, 1.00)',
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   heading: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: 'white',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     height: 50,
//     borderColor: '#ddd',
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 15,
//     paddingLeft: 10,
//     color: 'white',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//   },
//   loginButton: {
//     backgroundColor: 'rgba(7, 67, 143, 0.38)', // Corrected to use 'rgba' for transparency
//     paddingVertical: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop: 10,
//     borderWidth: 1, // Added border width
//     borderColor: 'white', // White border color
//   },

//   loginButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   errorText: {
//     color: 'red',
//     marginBottom: 15,
//     textAlign: 'center',
//   },
// });

// export default index;

