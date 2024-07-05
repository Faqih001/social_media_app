import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

// Button component with custom styles and text prop to display button text and onPress prop to handle button click event 
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1ca1f2',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
  },
});

// Button component with onPress and text props 
export const Button = ({ onPress, text }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);
