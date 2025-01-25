import { useRouter } from 'expo-router';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';

export default function GetStarted() {

    const router = useRouter(); // Initialize the router

    const handlePress = () => {
      console.log('Navigating to auth/sign-in'); // Debugging log
      router.push('auth/sign-in'); // Navigate to the route
    };
    
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={{
          uri: 'https://images.wallpapersden.com/image/download/starry-landscape-4k-cool-blue-moon_bW5tbG6UmZqaraWkpJRobWllrWdma2U.jpg',
        }}
        style={styles.backgroundImage}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.overlay}>
          {/* Header Text */}
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Welcome to Saveetha Hub</Text>
            <Text style={styles.subtitle}>
              Your gateway to seamless digital experiences and innovative solutions
            </Text>
          </View>

          {/* Feature Cards */}
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <View style={styles.iconContainer}>
                <Text style={styles.icon}>📈</Text>
              </View>
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardTitle}>Smart Analytics</Text>
                <Text style={styles.cardDescription}>
                  Advanced insights for better decision making
                </Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.iconContainer}>
                <Text style={styles.icon}>🛡️</Text>
              </View>
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardTitle}>Enhanced Security</Text>
                <Text style={styles.cardDescription}>
                  State-of-the-art protection for your data
                </Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.iconContainer}>
                <Text style={styles.icon}>🔄</Text>
              </View>
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardTitle}>Real-time Sync</Text>
                <Text style={styles.cardDescription}>
                  Instant updates across all your devices
                </Text>
              </View>
            </View>
          </View>

          {/* Pagination Dots */}
          <View style={styles.paginationContainer}>
            <View style={[styles.dot, styles.activeDot]}></View>
            <View style={styles.dot}></View>
            <View style={styles.dot}></View>
          </View>

          {/* Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={handlePress}>
            <Text style={styles.buttonText}>Begin Journey</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  imageStyle: {
    opacity: 0.9,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#f0f0f0',
    textAlign: 'center',
    lineHeight: 22,
  },
  cardContainer: {
    width: '100%',
    marginBottom: 30,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#F7F9F7',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e3f2fd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
    color: '#1B9AF5',
  },
  cardTextContainer: {
    marginLeft: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#1B9AF5',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    position: 'absolute', // Position the button at the bottom
    bottom: 30,           // Distance from the bottom of the screen
    left: 20,             // Padding from the left edge
    right: 20,            // Padding from the right edge
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000', // Adjust text color for better contrast
  },
  
});
