// import React, { useState, useEffect } from "react";
// import { View, Text, TextInput, Button, Image, StyleSheet, ScrollView } from "react-native";
// import { useDispatch, useSelector } from "react-redux";
// import { setCredentials } from "../../../vite-project/src/slices/authSlice";
// import { useUpdateUserMutation } from "../../../vite-project/src/slices/userApiSlice";
// import { toast } from "react-toastify";
// import Loader from "../../../vite-project/src/components/Loader";
// // import { PROFILE_IMAGE_DIR_PATH } from "../utils/constants";
// import { PROFILE_IMAGE_DIR_PATH } from "../../../vite-project/src/utils/constants";
// // import Sidebar from "../sidebar";
// // import ProfileHeader from './ProfileHeader';
// import * as ImagePicker from 'react-native-image-picker';

// const ProfileScreen = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [organizationName, setOrganizationName] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [profileImage, setProfileImage] = useState(null);

//   const dispatch = useDispatch();
//   const { userInfo } = useSelector((state) => state.auth);
//   const [updateProfile, { isLoading }] = useUpdateUserMutation();

//   useEffect(() => {
//     setName(userInfo.name);
//     setEmail(userInfo.email);
//     setOrganizationName(userInfo.organizationName);
//   }, [userInfo]);

//   const handleImagePicker = () => {
//     ImagePicker.launchImageLibrary({ mediaType: 'photo' }, (response) => {
//       if (response.assets) {
//         setProfileImage(response.assets[0]);
//       }
//     });
//   };

//   const submitHandler = async () => {
//     if (password !== confirmPassword) {
//       toast.error('Passwords do not match.');
//     } else {
//       try {
//         const formData = new FormData();
//         formData.append('name', name);
//         formData.append('email', email);
//         formData.append('organizationName', organizationName);
//         formData.append('password', password);
//         if (profileImage) {
//           formData.append('profileImage', {
//             uri: profileImage.uri,
//             type: profileImage.type,
//             name: profileImage.fileName,
//           });
//         }

//         const responseFromApiCall = await updateProfile(formData).unwrap();
//         dispatch(setCredentials({ ...responseFromApiCall }));
//         toast.success("Profile updated successfully");
//       } catch (err) {
//         toast.error(err?.data?.message || err?.error);
//       }
//     }
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Sidebar />
//       <ProfileHeader />
//       <View style={styles.formContainer}>
//         {userInfo.profileImageName && (
//           <Image
//             source={{ uri: PROFILE_IMAGE_DIR_PATH + userInfo.profileImageName }}
//             style={styles.profileImage}
//           />
//         )}
//         <Text style={styles.heading}>Update Profile</Text>

//         <TextInput
//           style={styles.input}
//           placeholder="Enter name"
//           value={name}
//           onChangeText={(text) => setName(text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Enter email"
//           value={email}
//           onChangeText={(text) => setEmail(text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Enter Organization Name"
//           value={organizationName}
//           onChangeText={(text) => setOrganizationName(text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Enter password"
//           secureTextEntry
//           value={password}
//           onChangeText={(text) => setPassword(text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Re-enter password"
//           secureTextEntry
//           value={confirmPassword}
//           onChangeText={(text) => setConfirmPassword(text)}
//         />

//         <Button title="Choose Profile Picture" onPress={handleImagePicker} />
//         {profileImage && (
//           <Image source={{ uri: profileImage.uri }} style={styles.profileImagePreview} />
//         )}

//         <Button title="Update Profile" onPress={submitHandler} />
//         {isLoading && <Loader />}
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//   },
//   formContainer: {
//     marginTop: 20,
//     padding: 20,
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     shadowColor: "#000",
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   heading: {
//     fontSize: 22,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   input: {
//     height: 50,
//     borderColor: "#ddd",
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 15,
//     paddingLeft: 10,
//   },
//   profileImage: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     objectFit: "cover",
//     alignSelf: "center",
//     marginBottom: 15,
//   },
//   profileImagePreview: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     objectFit: "cover",
//     alignSelf: "center",
//     marginBottom: 15,
//   },
// });

// export default ProfileScreen;





















// import React, { useState, useEffect } from "react";
// import { View, Text, TextInput, Button, Image, StyleSheet, ScrollView } from "react-native";
// import { useDispatch, useSelector } from "react-redux";
// import { setCredentials } from "../../../vite-project/src/slices/authSlice";
// import { useUpdateUserMutation } from "../../../vite-project/src/slices/userApiSlice";
// import { toast } from "react-toastify";
// import Loader from "../../../vite-project/src/components/Loader";
// // import { PROFILE_IMAGE_DIR_PATH } from "../utils/constants";
// import { PROFILE_IMAGE_DIR_PATH } from "../../../vite-project/src/utils/constants";
// // import Sidebar from "../sidebar";
// // import ProfileHeader from './ProfileHeader';
// import * as ImagePicker from 'react-native-image-picker';

// const ProfileScreen = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [organizationName, setOrganizationName] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [profileImage, setProfileImage] = useState(null);

//   const dispatch = useDispatch();
//   const { userInfo } = useSelector((state) => state.auth);
//   const [updateProfile, { isLoading }] = useUpdateUserMutation();

//   useEffect(() => {
//     setName(userInfo.name);
//     setEmail(userInfo.email);
//     setOrganizationName(userInfo.organizationName);
//   }, [userInfo]);

//   const handleImagePicker = () => {
//     ImagePicker.launchImageLibrary({ mediaType: 'photo' }, (response) => {
//       if (response.assets) {
//         setProfileImage(response.assets[0]);
//       }
//     });
//   };

//   const submitHandler = async () => {
//     if (password !== confirmPassword) {
//       toast.error('Passwords do not match.');
//     } else {
//       try {
//         const formData = new FormData();
//         formData.append('name', name);
//         formData.append('email', email);
//         formData.append('organizationName', organizationName);
//         formData.append('password', password);
//         if (profileImage) {
//           formData.append('profileImage', {
//             uri: profileImage.uri,
//             type: profileImage.type,
//             name: profileImage.fileName,
//           });
//         }

//         const responseFromApiCall = await updateProfile(formData).unwrap();
//         dispatch(setCredentials({ ...responseFromApiCall }));
//         toast.success("Profile updated successfully");
//       } catch (err) {
//         toast.error(err?.data?.message || err?.error);
//       }
//     }
//   };
















// import React, { useState } from 'react';
// import { TextInput, Button, View, Text, StyleSheet } from 'react-native';
// import { API_BASE_URL } from '../../constants/api';  // Adjust path based on your structure
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const ProfileScreen = () => {
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
//     <ScrollView style={styles.container}>
//       <Sidebar />
//       <ProfileHeader />
//       <View style={styles.formContainer}>
//         {userInfo.profileImageName && (
//           <Image
//             source={{ uri: PROFILE_IMAGE_DIR_PATH + userInfo.profileImageName }}
//             style={styles.profileImage}
//           />
//         )}
//         <Text style={styles.heading}>Update Profile</Text>

//         <TextInput
//           style={styles.input}
//           placeholder="Enter name"
//           value={name}
//           onChangeText={(text) => setName(text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Enter email"
//           value={email}
//           onChangeText={(text) => setEmail(text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Enter Organization Name"
//           value={organizationName}
//           onChangeText={(text) => setOrganizationName(text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Enter password"
//           secureTextEntry
//           value={password}
//           onChangeText={(text) => setPassword(text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Re-enter password"
//           secureTextEntry
//           value={confirmPassword}
//           onChangeText={(text) => setConfirmPassword(text)}
//         />

//         {isLoading && <Loader />}
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//   },
//   formContainer: {
//     marginTop: 20,
//     padding: 20,
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     shadowColor: "#000",
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   heading: {
//     fontSize: 22,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   input: {
//     height: 50,
//     borderColor: "#ddd",
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 15,
//     paddingLeft: 10,
//   },
//   profileImage: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     objectFit: "cover",
//     alignSelf: "center",
//     marginBottom: 15,
//   },
//   profileImagePreview: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     objectFit: "cover",
//     alignSelf: "center",
//     marginBottom: 15,
//   },
// });

// export default ProfileScreen;


















// currect 


// import React, { useState, useEffect } from 'react';
// import { TextInput, Button, View, Text, StyleSheet, ScrollView, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const ProfileScreen = () => {
//     const [email, setEmail] = useState('');
//     const [organizationName, setOrganizationName] = useState('');
//     const [name, setName] = useState('');
//     const [createdAt, setcreatedAt] = useState('');
//     const [isLoading, setIsLoading] = useState(false); // Loading state
//     const navigation = useNavigation();

//     useEffect(() => {
//         const fetchUserDetails = async () => {
//             try {
//                 const storedName = await AsyncStorage.getItem('username');
//                 const storedEmail = await AsyncStorage.getItem('email');
//                 const storedOrganizationName = await AsyncStorage.getItem('organizationName');
//                 const storedCreatedAt = await AsyncStorage.getItem('createdAt');

//                 if (storedName) setName(storedName);
//                 if (storedEmail) setEmail(storedEmail);
//                 if (storedOrganizationName) setOrganizationName(storedOrganizationName);

//                 if (storedCreatedAt) {
//                     const formattedDate = new Date(storedCreatedAt).toLocaleDateString(); // Format date
//                     setcreatedAt(formattedDate);
//                 }
//             } catch (error) {
//                 console.error('Error retrieving data from AsyncStorage:', error);
//             }
//         };

//         fetchUserDetails();
//     }, []); // Empty dependency array ensures this runs only once when the component mounts

//     return (
//         <ScrollView style={styles.container}>

//             <View style={styles.formContainer}>
//                 {/* Assuming userInfo.profileImageName exists */}

//                 <Text style={styles.heading}>Profile Details</Text>

//                 <Text style={styles.inputtext}>User Name</Text>
//                 <TextInput
//                     style={styles.input}
//                     placeholder={name || 'Enter name'}  // Use name from AsyncStorage as placeholder
//                     value={name}
//                     //   onChangeText={(text) => setName(text)}
//                     editable={false}
//                 />
//                 <Text style={styles.inputtext}>User email</Text>
//                 <TextInput
//                     style={styles.input}
//                     placeholder={email || 'Enter email'}  // Use email from AsyncStorage as placeholder
//                     value={email}
//                     onChangeText={(text) => setEmail(text)}
//                     editable={false}
//                 />
//                 <Text style={styles.inputtext}>Organization Name</Text>
//                 <TextInput
//                     style={styles.input}
//                     placeholder={organizationName || 'Enter Organization Name'}  // Use organizationName from AsyncStorage as placeholder
//                     value={organizationName}
//                     onChangeText={(text) => setOrganizationName(text)}
//                     editable={false}
//                 />
//                 <Text style={styles.inputtext}>Account Created At</Text>
//                 <TextInput
//                     style={styles.input}
//                     placeholder={createdAt || 'Enter Organization Name'}  // Use organizationName from AsyncStorage as placeholder
//                     value={createdAt}
//                     onChangeText={(text) => setCreatedAt(text)}
//                     editable={false}
//                 />


//                 {isLoading && <Loader />}
//                 {/* Optionally, include a save button or submit button */}
//                 {/* Save Profile button, disabled based on form validation */}
//                 <Button
//                     title="Save Profile"
//                     onPress={() => {
//                         /* handle save */
//                     }}
//                     disabled={isLoading || !name || !email || !organizationName}
//                 />
//             </View>
//         </ScrollView>
//     );
// };
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       padding: 10,
//       backgroundColor: 'rgba(28, 30, 48, 1.00)',
//       color: 'white',
//       justifyContent: 'center', // Centers vertically
//       alignItems: 'center', // Centers horizontally
//     },
//     formContainer: {
//       padding: 20,
//       borderRadius: 10,
//       shadowColor: "#000",
//       shadowOpacity: 0.2,
//       shadowRadius: 4,
//       elevation: 2,
//       backgroundColor: 'rgba(39, 41, 61, 1.00)',
//       color: 'white',
//       width: '90%', // Optional: Adjust width for better responsiveness
//       maxWidth: 400, // Optional: Max width for large screens
//     },
//     heading: {
//       fontSize: 22,
//       fontWeight: "bold",
//       marginBottom: 20,
//       color: 'white',
//     },
//     input: {
//       height: 50,
//       color: 'white',
//       borderColor: "#ddd",
//       borderWidth: 1,
//       borderRadius: 5,
//       marginBottom: 15,
//       paddingLeft: 10,
//     },
//     inputtext: {
//       marginTop: 15,
//       marginBottom: 10,
//       paddingLeft: 10,
//       color: 'white',
//     },
//     profileImage: {
//       width: 150,
//       height: 150,
//       borderRadius: 75,
//       objectFit: "cover",
//       alignSelf: "center",
//       marginBottom: 15,
//     },
//   });

// export default ProfileScreen;




























import { TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { TextInput, View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = () => {
    const [email, setEmail] = useState('');
    const [organizationName, setOrganizationName] = useState('');
    const [name, setName] = useState('');
    const [createdAt, setcreatedAt] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Loading state
    const navigation = useNavigation();

    const handleLogout = async () => {
        try {
            // Clear AsyncStorage
            await AsyncStorage.clear();
            console.log('User logged out');
            // Navigate to the login screen
            navigation.navigate('Login');
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };


    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const storedName = await AsyncStorage.getItem('username');
                const storedEmail = await AsyncStorage.getItem('email');
                const storedOrganizationName = await AsyncStorage.getItem('organizationName');
                const storedCreatedAt = await AsyncStorage.getItem('createdAt');

                if (storedName) setName(storedName);
                if (storedEmail) setEmail(storedEmail);
                if (storedOrganizationName) setOrganizationName(storedOrganizationName);

                if (storedCreatedAt) {
                    const formattedDate = new Date(storedCreatedAt).toLocaleDateString(); // Format date
                    setcreatedAt(formattedDate);
                }
            } catch (error) {
                console.error('Error retrieving data from AsyncStorage:', error);
            }
        };

        fetchUserDetails();
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollViewContent}>

            <View style={styles.formContainer}>
                {/* Assuming userInfo.profileImageName exists */}

                <Text style={styles.heading}>Profile Details</Text>

                <Text style={styles.inputtext}>User Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder={name || 'Enter name'}  // Use name from AsyncStorage as placeholder
                    value={name}
                    editable={false}
                />
                <Text style={styles.inputtext}>User email</Text>
                <TextInput
                    style={styles.input}
                    placeholder={email || 'Enter email'}  // Use email from AsyncStorage as placeholder
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    editable={false}
                />
                <Text style={styles.inputtext}>Organization Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder={organizationName || 'Enter Organization Name'}  // Use organizationName from AsyncStorage as placeholder
                    value={organizationName}
                    onChangeText={(text) => setOrganizationName(text)}
                    editable={false}
                />
                <Text style={styles.inputtext}>Account Created At</Text>
                <TextInput
                    style={styles.input}
                    placeholder={createdAt || 'Enter Organization Name'}  // Use organizationName from AsyncStorage as placeholder
                    value={createdAt}
                    onChangeText={(text) => setCreatedAt(text)}
                    editable={false}
                />


                {isLoading && <Loader />}

                {/* <Button
                    title="Save Profile"
                    onPress={() => {
                    }}
                    disabled={isLoading || !name || !email || !organizationName}
                /> */}
                <TouchableOpacity
                    style={[
                        styles.saveButton,
                        {
                            backgroundColor: isLoading || !name || !email || !organizationName
                                // ? 'rgb(255 255 255 / 31%)' // Disabled button color
                                ? 'rgba(255, 255, 255, 0.13)' // Disabled button color
                                : 'rgba(255, 255, 255, 0.31)', // Semi-transparent white
                        } // Disabled color logic
                    ]}
                    onPress={() => {
                        /* handle save */
                    }}
                    disabled={isLoading || !name || !email || !organizationName}
                >
                    <Text style={styles.saveButtonText}>Save Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <Text style={styles.logoutButtonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'rgba(28, 30, 48, 1.00)',
        color: 'white',
    },
    scrollViewContent: {
        flex: 1,
        justifyContent: 'center', // Centers vertically
        alignItems: 'center', // Centers horizontally
    },
    formContainer: {
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
        backgroundColor: 'rgba(39, 41, 61, 1.00)',
        color: 'white',
        width: '90%', // Optional: Adjust width for better responsiveness
        maxWidth: 400, // Optional: Max width for large screens
    },
    heading: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 20,
        color: 'white',
    },
    input: {
        height: 50,
        color: 'white',
        borderColor: "#ddd",
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingLeft: 10,
    },
    saveButton: {
        backgroundColor: 'rgb(255 255 255 / 60%)',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    saveButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000', // Black text color
    },

    inputtext: {
        marginTop: 15,
        marginBottom: 10,
        paddingLeft: 10,
        color: 'white',
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        objectFit: "cover",
        alignSelf: "center",
        marginBottom: 15,
    },
    logoutButton: {
        backgroundColor: 'rgba(200, 0, 0, 0.8)', // Red background for logout
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 15,
        borderWidth: 1,
        borderColor: 'white',
    },
    logoutButtonText: {
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

export default ProfileScreen;
