import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { API_BASE_URL } from '../../constants/api'; // Adjust path based on your structure
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '@/context/AuthContext';
const Logout = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      // Clear AsyncStorage
      await AsyncStorage.clear();
      logout();
      console.log('User logged out');
      // Navigate to the login screen
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
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

export default Logout;
