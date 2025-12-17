import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';

const SummarizeScreen = () => {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const summarizeText = async () => {
    if (!text.trim()) {
      Alert.alert('Error', 'Please enter text to summarize');
      return;
    }
    console.log('Starting text summarization for text length:', text.length);
    setLoading(true);
    try {
      console.log('Sending request to Hugging Face API...');
      const response = await fetch('https://api-inference.huggingface.co/models/facebook/bart-large-cnn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputs: text }),
      });
      console.log('Received response from API, status:', response.status);
      const data = await response.json();
      console.log('Parsed response data:', data);
      if (data && data[0] && data[0].summary_text) {
        setSummary(data[0].summary_text);
        console.log('Summary generated successfully');
      } else {
        console.log('No summary in response');
        Alert.alert('Error', 'Failed to summarize');
      }
    } catch (error) {
      console.log('Error summarizing text:', error);
      Alert.alert('Error', 'Failed to summarize');
    } finally {
      setLoading(false);
      console.log('Text summarization process completed');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Text Summarizer</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter text to summarize"
        value={text}
        onChangeText={setText}
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={summarizeText} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? 'Summarizing...' : 'Summarize'}</Text>
      </TouchableOpacity>
      {summary ? (
        <ScrollView style={styles.summaryContainer}>
          <Text style={styles.summary}>{summary}</Text>
        </ScrollView>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
    height: 100,
    textAlignVertical: 'top',
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
  summaryContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#CCC',
    padding: 10,
    borderRadius: 5,
  },
  summary: {
    fontSize: 16,
  },
});

export default SummarizeScreen;