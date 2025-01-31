// import React, { useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
// import { User, Mail, Lock } from "lucide-react-native";
// import Animated, { useSharedValue, withTiming, useAnimatedStyle } from "react-native-reanimated"; // Import Reanimated

// const Signup = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const opacity = useSharedValue(0);  // Use shared values for animation state
//   const translateY = useSharedValue(20);

//   // Animated style for reanimated component
//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       opacity: withTiming(opacity.value, { duration: 500 }),
//       transform: [{ translateY: withTiming(translateY.value, { duration: 500 }) }],
//     };
//   });

//   React.useEffect(() => {
//     // Trigger animation on mount
//     opacity.value = 1;
//     translateY.value = 0;
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Animated.View style={[styles.signupBox, animatedStyle]}> {/* Use animated styles */}
//         <Text style={styles.header}>Create Account</Text>
//         <View style={styles.inputGroup}>
//           <User size={20} color="white" />
//           <TextInput
//             placeholder="Full Name"
//             placeholderTextColor="#999"
//             value={name}
//             onChangeText={(text) => setName(text)}
//             style={styles.input}
//           />
//         </View>

//         <View style={styles.inputGroup}>
//           <Mail size={20} color="white" />
//           <TextInput
//             placeholder="Email Address"
//             placeholderTextColor="#999"
//             value={email}
//             onChangeText={(text) => setEmail(text)}
//             keyboardType="email-address"
//             style={styles.input}
//           />
//         </View>

//         <View style={styles.inputGroup}>
//           <Lock size={20} color="white" />
//           <TextInput
//             placeholder="Password"
//             placeholderTextColor="#999"
//             value={password}
//             onChangeText={(text) => setPassword(text)}
//             secureTextEntry={true}
//             style={styles.input}
//           />
//         </View>

//         <TouchableOpacity style={styles.button} onPress={() => setIsLoading(true)} disabled={isLoading}>
//           {isLoading ? (
//             <ActivityIndicator size="small" color="#000" />
//           ) : (
//             <Text style={styles.buttonText}>Sign Up</Text>
//           )}
//         </TouchableOpacity>

//         <View style={styles.loginLink}>
//           <Text style={styles.loginText}>Already have an account?</Text>
//           <TouchableOpacity>
//             <Text style={styles.loginLinkText}> Login</Text>
//           </TouchableOpacity>
//         </View>
//       </Animated.View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#1F2937",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   signupBox: {
//     backgroundColor: "#374151",
//     padding: 20,
//     borderRadius: 10,
//     width: "90%",
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 20,
//     color: "#fff",
//   },
//   inputGroup: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#4B5563",
//     borderRadius: 10,
//     marginBottom: 15,
//     paddingHorizontal: 10,
//   },
//   input: {
//     flex: 1,
//     color: "#fff",
//     paddingVertical: 10,
//   },
//   button: {
//     backgroundColor: "#9CA3AF",
//     padding: 15,
//     borderRadius: 10,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#1F2937",
//     fontWeight: "bold",
//   },
//   loginLink: {
//     flexDirection: "row",
//     justifyContent: "center",
//     marginTop: 20,
//   },
//   loginText: {
//     color: "#fff",
//   },
//   loginLinkText: {
//     color: "#3B82F6",
//     fontWeight: "bold",
//   },
// });

// export default Signup;






























import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import { User, Mail, Lock } from "lucide-react-native";
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from "react-native-reanimated"; // Import Reanimated

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const opacity = useSharedValue(0);  // Use shared values for animation state
  const translateY = useSharedValue(20);

  // Animated style for reanimated component
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, { duration: 500 }),
      transform: [{ translateY: withTiming(translateY.value, { duration: 500 }) }],
    };
  });

  React.useEffect(() => {
    // Trigger animation on mount
    opacity.value = 1;
    translateY.value = 0;
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.signupBox, animatedStyle]}> {/* Use animated styles */}
        <Text style={styles.header}>Create Account</Text>

        {/* Full Name Input */}
        <View style={styles.inputGroup}>
          <User size={20} color="white" />
          <TextInput
            placeholder="Full Name"
            placeholderTextColor="#CBD5E1" // Light text color for placeholder
            value={name}
            onChangeText={(text) => setName(text)}
            style={styles.input}
          />
        </View>

        {/* Email Input */}
        <View style={styles.inputGroup}>
          <Mail size={20} color="white" />
          <TextInput
            placeholder="Email Address"
            placeholderTextColor="#CBD5E1" // Light text color for placeholder
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            style={styles.input}
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputGroup}>
          <Lock size={20} color="white" />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#CBD5E1" // Light text color for placeholder
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            style={styles.input}
          />
        </View>

        {/* Signup Button */}
        <TouchableOpacity style={styles.button} onPress={() => setIsLoading(true)} disabled={isLoading}>
          {isLoading ? (
            <ActivityIndicator size="small" color="#1E293B" />
          ) : (
            <Text style={styles.buttonText}>Sign Up</Text>
          )}
        </TouchableOpacity>

        {/* Login Link */}
        <View style={styles.loginLink}>
          <Text style={styles.loginText}>Already have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.loginLinkText}> Login</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A", // Dark blue background
    justifyContent: "center",
    alignItems: "center",
  },
  signupBox: {
    backgroundColor: "#1E293B", // Slightly lighter blue
    padding: 20,
    borderRadius: 10,
    width: "90%",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#E2E8F0", // Gradient-like effect with light text
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#334155", // Input background
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    color: "#E2E8F0", // Light input text
    paddingVertical: 10,
  },
  button: {
    backgroundColor: "#CBD5E1", // Lighter button background
    padding: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#1E293B", // Dark button text color
    fontWeight: "bold",
  },
  loginLink: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  loginText: {
    color: "#E2E8F0", // Light login text
  },
  loginLinkText: {
    color: "#38BDF8", // Blue link text
    fontWeight: "bold",
  },
});

export default Signup;
