// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
// import { Mail, Lock } from "lucide-react-native"; // Use this import for React Native
// // import Icon from 'react-native-vector-icons/FontAwesome';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   // Placeholder for isLoading and error states
//   const isLoading = false; // Set to true when loading
//   const error = ''; // Set to error message if applicable

//   const handleLogin = async () => {
//     // Remove authentication logic
//     console.log("Login button pressed");
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.loginBox}>
//         <Text style={styles.title}>Welcome Back</Text>

//         <View style={styles.inputGroup}>
//           <Mail style={styles.inputIcon} />
//           <TextInput
//             style={styles.input}
//             placeholder='Email Address'
//             value={email}
//             onChangeText={setEmail}
//             keyboardType='email-address'
//             autoCapitalize='none'
//             placeholderTextColor="#888" // Change this color as needed
//           />
//         </View>

//         <View style={styles.inputGroup}>
//           <Lock style={styles.inputIcon} />
//           <TextInput
//             style={styles.input}
//             placeholder='Password'
//             value={password}
//             onChangeText={setPassword}
//             secureTextEntry
//             placeholderTextColor="#888" // Change this color as needed
//           />
//         </View>

//         {error ? <Text style={styles.errorText}>{error}</Text> : null}

//         <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={isLoading}>
//           {isLoading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Login</Text>}
//         </TouchableOpacity>

//         <TouchableOpacity>
//           <Text style={styles.forgotPassword}>Forgot password?</Text>
//         </TouchableOpacity>

//         <View style={styles.footer}>
//           <Text style={styles.footerText}>
//             Don't have an account? 
//             <TouchableOpacity>
//               <Text style={styles.signUpLink}> Sign up</Text>
//             </TouchableOpacity>
//           </Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1c1e30',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loginBox: {
//     width: '80%',
//     backgroundColor: '#1f2235',
//     padding: 30,
//     borderRadius: 10,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#fff',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   inputGroup: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   input: {
//     flex: 1,
//     padding: 10,
//     borderRadius: 5,
//     backgroundColor: '#fff',
//     marginLeft: 10,
//     fontSize: 16,
//     color: '#000',
//   },
//   inputIcon: {
//     fontSize: 25,
//     color: '#888', // Change this color as needed
//   },
//   button: {
//     backgroundColor: '#1f2235',
//     borderRadius: 5,
//     paddingVertical: 10,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   errorText: {
//     color: '#ff4d4d',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   forgotPassword: {
//     color: '#fff',
//     textAlign: 'right',
//     marginBottom: 10,
//   },
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 20,
//   },
//   footerText: {
//     color: '#fff',
//   },
//   signUpLink: {
//     color: '#1e90ff',
//     textDecorationLine: 'underline',
//   },
// });

// export default Login;




// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const Login = () => {
//   const [email, setEmail] = useState<string>(''); // Type for email
//   const [password, setPassword] = useState<string>(''); // Type for password
//   const [isLoading, setIsLoading] = useState<boolean>(false); // Type for loading state
//   const [error, setError] = useState<string | null>(null); // Allow error to be string or null

//   const handleLogin = async () => {
//     setIsLoading(true);
//     setError(null); // Clear any existing error messages

//     // Simulate login logic
//     setTimeout(() => {
//       setIsLoading(false);
//       setError('Invalid login credentials'); // Simulate invalid credentials
//     }, 2000);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.loginBox}>
//         <Text style={styles.title}>Welcome Back</Text>

//         <View style={styles.inputGroup}>
//           <Icon name="envelope" size={25} color="#888" />
//           <TextInput
//             style={styles.input}
//             placeholder="Email Address"
//             value={email}
//             onChangeText={setEmail}
//             keyboardType="email-address"
//             autoCapitalize="none"
//             placeholderTextColor="#888"
//           />
//         </View>

//         <View style={styles.inputGroup}>
//           <Icon name="lock" size={25} color="#888" />
//           <TextInput
//             style={styles.input}
//             placeholder="Password"
//             value={password}
//             onChangeText={setPassword}
//             secureTextEntry
//             placeholderTextColor="#888"
//           />
//         </View>

//         {error && <Text style={styles.errorText}>{error}</Text>} {/* Display error message if it exists */}

//         <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={isLoading}>
//           {isLoading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Login</Text>}
//         </TouchableOpacity>

//         <TouchableOpacity>
//           <Text style={styles.forgotPassword}>Forgot password?</Text>
//         </TouchableOpacity>

//         <View style={styles.footer}>
//           <Text style={styles.footerText}>
//             Don't have an account?{' '}
//             <Text style={styles.signUpLink}>Sign up</Text> {/* Ensure this text is inside a Text component */}
//           </Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1c1e30',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loginBox: {
//     width: '80%',
//     backgroundColor: '#1f2235',
//     padding: 30,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#fff',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   inputGroup: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   input: {
//     flex: 1,
//     padding: 10,
//     borderRadius: 5,
//     backgroundColor: '#fff',
//     marginLeft: 10,
//     fontSize: 16,
//     color: '#000',
//   },
//   button: {
//     backgroundColor: '#1f2235',
//     borderRadius: 5,
//     paddingVertical: 10,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   errorText: {
//     color: '#ff4d4d',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   forgotPassword: {
//     color: '#fff',
//     textAlign: 'right',
//     marginBottom: 10,
//   },
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 20,
//   },
//   footerText: {
//     color: '#fff',
//   },
//   signUpLink: {
//     color: '#1e90ff',
//     textDecorationLine: 'underline',
//   },
// });

// export default Login;











// currect 






// import React, { useState } from 'react';
// import { TextInput, Button, View, Text } from 'react-native';
// import { API_BASE_URL } from '../../constants/api';  // Adjust path based on your structure

// import { useNavigation } from '@react-navigation/native';

// const Login = () => {
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

//       // if (response.ok) {
//       //   // Login successful, handle the token and navigate
//       //   const { token, user } = data;
//       //   // Save token (in AsyncStorage or some secure storage)

//       //   console.log('login successful')
//       // } else {
//       //   // Handle errors
//       //   setErrorMessage(data.message || 'Login failed');
//       // }

//       if (response.ok) {
//         // Login successful, handle the token and navigate
//         const { token, user } = data;

//         // Save token (in AsyncStorage or secure storage)

//         console.log('login successful');
//         // Navigate to Log_videos screen after successful login
//         navigation.navigate('Log_videos');  // Navigation to Log_videos screen
//       } else {
//         // Handle errors
//         setErrorMessage(data.message || 'Login failed');
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//       setErrorMessage('Network error. Please try again later.');
//     }
//   };

//   return (
//     <View>
//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />
//       <Button title="Login" onPress={handleLogin} />
//       {errorMessage && <Text>{errorMessage}</Text>}
//     </View>
//   );
// };

// export default Login;























// import React, { useState } from 'react';
// import { TextInput, Button, View, Text, StyleSheet } from 'react-native';
// import { API_BASE_URL } from '../../constants/api';  // Adjust path based on your structure
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const Login = () => {
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
// console.log(data)
//       if (response.ok) {
//         // Login successful, handle the token and navigate
//         // const { token, user } = data;

//         // Save token and user data in AsyncStorage
//         await AsyncStorage.setItem('username', data.name);  // Assuming `user.username` exists
//         await AsyncStorage.setItem('email', data.email);        // Assuming `user.email` exists
//         await AsyncStorage.setItem('organizationName', data.organizationName);        // Assuming `user.email` exists
//         await AsyncStorage.setItem('createdAt', data.createdAt);        // Assuming `user.email` exists

//         console.log('login successful');
//         // Navigate to Log_videos screen after successful login
//         navigation.navigate('Log_videos');  // Navigation to Log_videos screen
//       } else {
//         // Handle errors
//         setErrorMessage(data.message || 'Login failed');
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//       setErrorMessage('Network error. Please try again later.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />
//       <Button title="Login" onPress={handleLogin} />
//       {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
//     </View>
//   );
// };

// // Adding styles to the component using StyleSheet
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//     backgroundColor: '#f8f8f8',
//   },
//   input: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 15,
//     paddingLeft: 10,
//     borderRadius: 5,
//     backgroundColor: '#fff',
//   },
//   errorText: {
//     color: 'red',
//     marginTop: 10,
//   },
// });

// export default Login;



















// currect 

import React, { useState } from 'react';
import { TextInput, Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { API_BASE_URL } from '../../constants/api'; // Adjust path based on your structure
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '@/context/AuthContext';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();
  const { login } = useAuth();
  

  const handleLogin = async () => {
    // const { login } = useAuth();
    try {
      // const response = await fetch(`${API_BASE_URL}/users/auth`, {
      const response = await fetch('http://localhost:5000/api/users/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        // Save token and user data in AsyncStorage
        await AsyncStorage.setItem('username', data.name);
        await AsyncStorage.setItem('email', data.email);
        await AsyncStorage.setItem('userID', data.userId);
        await AsyncStorage.setItem('organizationName', data.organizationName);
        await AsyncStorage.setItem('createdAt', data.createdAt);

        console.log('login successful');
        login();
        // navigation.navigate('Log_videos'); // Navigate to Log_videos screen
        navigation.navigate('Profile'); // Navigate to Log_videos screen
      } else {
        setErrorMessage(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setErrorMessage('Network error. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.heading}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(28, 30, 48, 1.00)',
  },
  formContainer: {
    width: '90%',
    maxWidth: 400,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(39, 41, 61, 1.00)',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  loginButton: {
    backgroundColor: 'rgba(7, 67, 143, 0.38)', // Corrected to use 'rgba' for transparency
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 1, // Added border width
    borderColor: 'white', // White border color
  },

  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default LoginPage;





















// import React, { useState } from 'react';
// import { TextInput, Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { API_BASE_URL } from '../../constants/api'; // Adjust path based on your structure
// import { useNavigation } from '@react-navigation/native';
// // import { Cookies } from '@react-native-cookies/cookies'; // Import the Cookies library
// import Cookies from 'react-native-cookies';

// const Login = () => {
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
//         // Store token in cookies
//         // await Cookies.set('userJwt', data.jwtToken, {
//         //   path: '/',
//         //   secure: true,  // Set to 'true' in production if your API is HTTPS
//         //   httpOnly: true,  // Set to 'true' for security, not accessible via JavaScript
//         //   sameSite: 'Strict',
//         // });

//         // console.log('login successful');
//         await Cookies.set('userJwt', data.jwtToken, {
//           path: '/',
//           secure: true,
//           httpOnly: true,
//           sameSite: 'Strict',
//         });

//         // Getting the cookie
//         const token = await Cookies.get('userJwt');
//         console.log('Token from cookies:', token);
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

// export default Login;
