// import { Tabs } from 'expo-router';
// import React from 'react';

// import { TabBarIcon } from '@/components/navigation/TabBarIcon';
// import { Colors } from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';

// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         headerShown: false,
//       }}>
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="explore"
//         options={{
//           title: 'Explore',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }


















// import { Tabs } from 'expo-router';
// import React from 'react';

// import { TabBarIcon } from '@/components/navigation/TabBarIcon';
// import { Colors } from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';

// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'dark'].tint,
//         headerShown: true, // Hide header for all screens
//       }}>
//       {/* Login Page */}
//       <Tabs.Screen
//         name="loginpage"
//         options={{
//           title: 'Login',
//           tabBarButton: () => null, // Hide login from the bottom tab
//         }}
//       />
//       {/* Log Videos Page */}
//       <Tabs.Screen
//         name="log_videos"
//         options={{
//           title: 'Log Videos',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon name={focused ? 'videocam' : 'videocam-outline'} color={color} />
//           ),
//         }}
//       />
//       {/* Home Page (Hidden from Tab) */}
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Home',
//           tabBarButton: () => null, // Hide home from the bottom tab
//         }}
//       />
      
//     </Tabs>
//   );
// }








// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Login from './Login'; // Import your Login component
// import LogVideos from './Log_videos'; // Import your LogVideos component

// const Stack = createStackNavigator();

// function Layout() {
//   return (
//     <Stack.Navigator initialRouteName="Login">
//       <Stack.Screen name="Login" component={Login} />
//       <Stack.Screen name="Log_videos" component={LogVideos} />
//     </Stack.Navigator>
//   );
// }

// export default Layout;












// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import { Stack } from 'expo-router';
// import { CustomBottomTab } from './tabbottom';

// export default function Layout() {
//   return (
//     <View style={styles.container}>
//       <Stack screenOptions={{ headerShown: false }} />
//       <CustomBottomTab />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });






import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Stack, useSegments } from 'expo-router';
import { CustomBottomTab } from './tabbottom';
import ProtectedRoute from '@/components/ProtectedRoute';
export default function Layout() {
  const segments = useSegments();

  // const isLoginPage = segments.includes('/');

  const isLoginPage = segments.includes('Login');

  return (
    <View style={styles.container}>
      {/* Stack handles navigation */}
      <Stack screenOptions={{ headerShown: false }} />
      
      {/* Conditionally render CustomBottomTab */}
      {!isLoginPage && <CustomBottomTab />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});



// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import { Stack, useSegments } from 'expo-router';
// import { CustomBottomTab } from './tabbottom';

// export default function Layout() {
//   const segments = useSegments();

//   // Check if the current route is the root route (index.tsx)
//   const isRootPage = segments.length === 0;

//   return (
//     <View style={styles.container}>
//       {/* Stack handles navigation */}
//       <Stack screenOptions={{ headerShown: false }} />

//       {/* Conditionally render CustomBottomTab */}
//       {!isRootPage && <CustomBottomTab />}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
