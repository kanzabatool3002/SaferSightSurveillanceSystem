// import React from 'react';
// import { View, StyleSheet, FlatList, Dimensions } from 'react-native';
// import Video from 'react-native-video';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const { width } = Dimensions.get('window');
// const VIDEO_SIZE = width / 2 - 10; // Two videos per row with spacing

// const videos = [
//     { id: '1', uri: 'videos/Mobile_snatching.mp4' },
//     { id: '2', uri: 'videos/snatching.mp4' },
//     //   { id: '3', uri: 'https://example.com/video3.mp4' },
//     //   { id: '4', uri: 'https://example.com/video4.mp4' },
// ];

// const Home = () => {
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
//         <div>
//             <View style={styles.container}>
//             <h1>Home</h1>
//             </View>
//             <div>
//                 <h3>All devices</h3>
//                 <h3>Shared Devices</h3>
//                 <Icon name="bars" size={30} color="#000" />
//             </div>
//             <FlatList
//                 data={videos}
//                 renderItem={renderVideo}
//                 keyExtractor={(item) => item.id}
//                 numColumns={2}
//                 contentContainerStyle={styles.list}
//             />
//         </div>
//     );
// };

// const styles = StyleSheet.create({
//     list: {
//         padding: 10,
//     },
//     videoContainer: {
//         width: VIDEO_SIZE,
//         height: VIDEO_SIZE,
//         margin: 5,
//         backgroundColor: '#000',
//     },
//     video: {
//         width: '100%',
//         height: '50%',
//     },
// });

// export default Home;





























// import React from 'react';
// import { View, StyleSheet, FlatList, Dimensions, Text } from 'react-native';
// import Video from 'react-native-video';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const { width } = Dimensions.get('window');
// const VIDEO_SIZE = width / 2 - 20; // Two videos per row with spacing

// const videos = [
//     { id: '1', uri: 'videos/Mobile_snatching.mp4' },
//     { id: '2', uri: 'videos/snatching.mp4' },
//     // { id: '3', uri: 'https://example.com/video3.mp4' },
//     // { id: '4', uri: 'https://example.com/video4.mp4' },
// ];

// const Home = () => {
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
//             {/* Header Section */}
//             <View style={styles.header}>
//                 <Text style={styles.headerTitle}>Home</Text>
//             </View>

//             {/* Subheader Section */}
//             <View style={styles.subHeader}>
//                 <Text style={styles.subHeaderText}>All Devices</Text>
//                 <Text style={styles.subHeaderText}>Shared Devices</Text>
//                 <Icon name="bars" size={24} color="#555" style={styles.menuIcon} />
//             </View>

//             {/* Video Wall */}
//             <FlatList
//                 data={videos}
//                 renderItem={renderVideo}
//                 keyExtractor={(item) => item.id}
//                 numColumns={2}
//                 contentContainerStyle={styles.list}
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#f8f9fa',
//     },
//     header: {
//         backgroundColor: '#007bff',
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
//         paddingHorizontal: 15,
//         paddingVertical: 10,
//         backgroundColor: '#fff',
//         marginTop: 10,
//         borderRadius: 8,
//         shadowColor: '#000',
//         shadowOpacity: 0.1,
//         shadowOffset: { width: 0, height: 2 },
//         shadowRadius: 4,
//         elevation: 3,
//     },
//     subHeaderText: {
//         fontSize: 16,
//         fontWeight: '600',
//         color: '#333',
//     },
//     menuIcon: {
//         marginLeft: 10,
//     },
//     list: {
//         padding: 10,
//     },
//     videoContainer: {
//         width: VIDEO_SIZE,
//         height: VIDEO_SIZE,
//         margin: 10,
//         borderRadius: 10,
//         overflow: 'hidden',
//         backgroundColor: '#ddd',
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

// export default Home;

















// import React from 'react';
// import { View, StyleSheet, FlatList, Dimensions, Text, TouchableOpacity } from 'react-native';
// import Video from 'react-native-video';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const { width } = Dimensions.get('window');
// const VIDEO_SIZE = width / 2 - 20; // Two videos per row with spacing

// const videos = [
//     { id: '1', uri: 'videos/Mobile_snatching.mp4' },
//     { id: '2', uri: 'videos/snatching.mp4' },
//     // { id: '3', uri: 'https://example.com/video3.mp4' },
//     // { id: '4', uri: 'https://example.com/video4.mp4' },
// ];

// const Home = () => {
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
//             {/* Header Section */}
//             <View style={styles.header}>
//                 <Text style={styles.headerTitle}>Home</Text>
//             </View>

//             {/* Subheader Section */}
//             <View style={styles.subHeader}>
//                 <TouchableOpacity activeOpacity={0.7} style={styles.hoverEffect}>
//                     <Text style={styles.subHeaderText}>All Devices</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity activeOpacity={0.7} style={styles.hoverEffect}>
//                     <Text style={styles.subHeaderText}>Shared Devices</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity activeOpacity={0.7} style={styles.hoverEffect}>
//                     <Icon name="bars" size={24} color="#bbb" style={styles.menuIcon} />
//                 </TouchableOpacity>
//             </View>

//             {/* Video Wall */}
//             <FlatList
//                 data={videos}
//                 renderItem={renderVideo}
//                 keyExtractor={(item) => item.id}
//                 numColumns={2}
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
//         paddingHorizontal: 15,
//         paddingVertical: 10,
//         backgroundColor: '#27293d',
//         marginTop: 10,
//         borderRadius: 8,
//         shadowColor: '#000',
//         shadowOpacity: 0.3,
//         shadowOffset: { width: 0, height: 2 },
//         shadowRadius: 4,
//         elevation: 3,
//         // paddingLeft: 10,
//         padding:10,

//     },
//     subHeaderText: {
//         fontSize: 16,
//         fontWeight: '600',
//         color: '#bbb',
//     },
//     hoverEffect: {
//         padding: 5,
//         borderRadius: 5,
//     },
//     menuIcon: {
//         marginLeft: 10,
//     },
//     list: {
//         padding: 10,
//     },
//     videoContainer: {
//         width: VIDEO_SIZE,
//         height: VIDEO_SIZE,
//         margin: 10,
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

// export default Home;






















// import React from 'react';
// import { View, StyleSheet, FlatList, Dimensions, Text, TouchableOpacity } from 'react-native';
// import Video from 'react-native-video';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const { width } = Dimensions.get('window');
// const VIDEO_SIZE = width / 2 - 20; // Two videos per row with spacing

// const videos = [
//     { id: '1', uri: 'videos/Mobile_snatching.mp4' },
//     { id: '2', uri: 'videos/snatching.mp4' },
//     // { id: '3', uri: 'https://example.com/video3.mp4' },
//     // { id: '4', uri: 'https://example.com/video4.mp4' },
// ];

// const Home = () => {
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
//             {/* Header Section */}
//             <View style={styles.header}>
//                 <Text style={styles.headerTitle}>Home</Text>
//             </View>

//             {/* Subheader Section */}
//             <View style={styles.subHeader}>
//                 <TouchableOpacity activeOpacity={0.7} style={styles.hoverEffect}>
//                     <Text style={styles.subHeaderText}>All Devices</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity activeOpacity={0.7} style={styles.hoverEffect}>
//                     <Text style={styles.subHeaderText}>Shared Devices</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity activeOpacity={0.7} style={styles.hoverEffect}>
//                     <Icon name="bars" size={24} color="#bbb" style={styles.menuIcon} />
//                 </TouchableOpacity>
//             </View>

//             {/* Video Wall */}
//             <FlatList
//                 data={videos}
//                 renderItem={renderVideo}
//                 keyExtractor={(item) => item.id}
//                 numColumns={2}
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
//         paddingHorizontal: 150, // Increased padding for space on left and right
//         paddingVertical: 15, // Adjusted for consistent padding
//         backgroundColor: '#27293d',
//         marginHorizontal: 15, // Adds space to the left and right of the entire subheader
//         marginTop: 10,
//         borderRadius: 8,
//         shadowColor: '#000',
//         shadowOpacity: 0.3,
//         shadowOffset: { width: 0, height: 2 },
//         shadowRadius: 4,
//         elevation: 3,
//     },
//     subHeaderText: {
//         fontSize: 16,
//         fontWeight: '600',
//         color: '#bbb',
//     },
//     hoverEffect: {
//         padding: 5,
//         borderRadius: 5,
//         fontSize: 70,
//         fontWeight: '700',
//         color: '#bbb',
//     },
//     menuIcon: {
//         marginLeft: 10,
//     },
//     list: {
//         padding: 10,
//     },
//     videoContainer: {
//         width: VIDEO_SIZE,
//         height: VIDEO_SIZE,
//         margin: 10,
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

// export default Home;























import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Dimensions, Text, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');
const VIDEO_SIZE = width / 2 - 20; // Two videos per row with spacing

const videos = [
    { id: '1', uri: 'videos/Mobile_snatching.mp4' },
    { id: '2', uri: 'videos/snatching.mp4' },
];

const Home = () => {
    const [hoveredItem, setHoveredItem] = useState(null);

    const renderVideo = ({ item }) => (
        <View style={styles.videoContainer}>
            <Video
                source={{ uri: item.uri }}
                style={styles.video}
                resizeMode="cover"
                repeat
            />
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Home</Text>
            </View>

            {/* Subheader Section */}
            <View style={styles.subHeader}>
                {['All Devices', 'Shared Devices'].map((text, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.hoverEffect,
                            hoveredItem === index && styles.hovered,
                        ]}
                        onPressIn={() => setHoveredItem(index)}
                        onPressOut={() => setHoveredItem(null)}
                        activeOpacity={0.7}
                    >
                        <Text
                            style={[
                                styles.subHeaderText,
                                hoveredItem === index && styles.hoveredText,
                            ]}
                        >
                            {text}
                        </Text>
                    </TouchableOpacity>
                ))}
                <TouchableOpacity
                    style={[
                        styles.hoverEffect,
                        hoveredItem === 'menu' && styles.hovered,
                    ]}
                    onPressIn={() => setHoveredItem('menu')}
                    onPressOut={() => setHoveredItem(null)}
                    activeOpacity={0.7}
                >
                    <Icon
                        name="bars"
                        size={24}
                        style={[
                            styles.menuIcon,
                            hoveredItem === 'menu' && styles.hoveredText,
                        ]}
                    />
                </TouchableOpacity>
            </View>

            {/* Video Wall */}
            <FlatList
                data={videos}
                renderItem={renderVideo}
                keyExtractor={(item) => item.id}
                numColumns={2}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c1e30',
    },
    header: {
        backgroundColor: '#27293d',
        paddingVertical: 15,
        alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    subHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#27293d',
        marginHorizontal: 15,
        marginTop: 10,
        borderRadius: 8,
        // shadowColor: '#000',
        // shadowOpacity: 0.3,
        // shadowOffset: { width: 0, height: 2 },
        // shadowRadius: 4,
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)', // Web-specific shadow

        elevation: 3,
    },
    subHeaderText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#bbb',
    },
    hoverEffect: {
        padding: 10,
        borderRadius: 5,
    },
    hovered: {
        backgroundColor: '#444', // Lighter background color on hover
    },
    hoveredText: {
        fontSize: 18, // Larger font size on hover
        fontWeight: '700',
        color: '#fff',
    },
    menuIcon: {
        marginLeft: 10,
        color: '#bbb',
    },
    list: {
        padding: 10,
    },
    videoContainer: {
        width: VIDEO_SIZE,
        height: VIDEO_SIZE,
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#444',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    video: {
        width: '100%',
        height: '100%',
    },
});

export default Home;
















