import React from 'react';
import { useRouter } from 'expo-router';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function SignUp() {
  const router = useRouter();

  return (
    <ImageBackground
      source={{
        uri: 'https://images.wallpapersden.com/image/download/starry-landscape-4k-cool-blue-moon_bW5tbG6UmZqaraWkpJRobWllrWdma2U.jpg',
      }}
      style={styles.backgroundImage}
      imageStyle={styles.overlay}
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* Heading for Sign Up */}
        <Text style={styles.heading}>Sign Up</Text>
        
        <View style={styles.header}>
          <Text style={styles.title}>Create your Saveetha Hub Account</Text>
          <Text style={styles.subtitle}>Fill in your details to get started</Text>
        </View>

        <View style={styles.form}>
          {/* Input fields */}
          {['Full Name', 'Register Number', 'Department', 'Email', 'Username', 'Password'].map((label, index) => (
            <View key={index} style={styles.inputContainer}>
              <Text style={styles.label}>{label}</Text>
              <TextInput
                style={styles.input}
                placeholder={`Enter your ${label.toLowerCase()}`}
                secureTextEntry={label === 'Password'}
                keyboardType={label === 'Email' ? 'email-address' : 'default'}
              />
            </View>
          ))}

          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Create Account</Text>
          </TouchableOpacity>

          <View style={styles.divider}>
            <View style={styles.line} />
            <Text style={styles.dividerText}>Or continue with</Text>
            <View style={styles.line} />
          </View>

          {/* Google Sign-In Button */}
          <TouchableOpacity style={styles.googleButton}>
            <Image
              source={{
                uri: 'https://www.svgrepo.com/show/475656/google-color.svg',
              }}
              style={styles.googleIcon}
            />
            <Text style={styles.googleButtonText}>Sign in with Google</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => router.replace('auth/sign-in')}
        >
          <Text style={styles.signInText}>Already have an account? Sign in</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width,
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  heading: {
    fontSize: 36, // Adjust font size for the heading
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20, // Space below the heading
    textAlign: 'center', // Center the heading text
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  form: {
    width: '80%',
  },
  inputContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  input: {
    padding: 15,
    fontSize: 16,
  },
  label: {
    color: '#333', 
    marginBottom: 5,
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#f9a826',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'white',
  },
  dividerText: {
    color: 'white',
    marginHorizontal: 10,
  },
  googleButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
   },
   googleIcon:{
     width :20 ,
     height :20 ,
     marginRight :10 ,
   },
   googleButtonText:{
     color:'black' ,
     fontWeight:'bold' ,
   },
   signInButton:{
     padding :15 ,
   },
   signInText:{
     color:'white' ,
     textAlign:'center' ,
   }
});
