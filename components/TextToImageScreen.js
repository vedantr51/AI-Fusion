import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';

const TextToImageScreen = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    if (!prompt.trim()) {
      Alert.alert('Error', 'Please enter a prompt');
      return;
    }
    console.log('Starting image generation for prompt:', prompt);
    setLoading(true);
    try {
      const encodedPrompt = encodeURIComponent(prompt);
      const url = `https://pollinations.ai/prompt/${encodedPrompt}`;
      console.log('Generated image URL:', url);
      // Pollinations.ai generates the image on the fly, so we can set the URL directly
      setImageUrl(url);
      console.log('Image generation request sent, waiting for image to load...');
    } catch (error) {
      console.log('Error generating image:', error);
      Alert.alert('Error', 'Failed to generate image');
    } finally {
      setLoading(false);
      console.log('Image generation process completed');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Text-to-Image Generator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter image prompt"
        value={prompt}
        onChangeText={setPrompt}
      />
      <TouchableOpacity style={styles.button} onPress={generateImage} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? 'Generating...' : 'Generate Image'}</Text>
      </TouchableOpacity>
      {imageUrl && (
        <Image source={{ uri: imageUrl }} style={styles.image} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
});

export default TextToImageScreen;