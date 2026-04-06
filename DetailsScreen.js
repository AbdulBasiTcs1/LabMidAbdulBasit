import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen({ route }) {
  const { name, student, features, tools } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Project Details</Text>
      <Text>Project: {name}</Text>
      <Text>Student: {student}</Text>
      <Text>Features: {features}</Text>
      <Text>Tools: {tools}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 }
});
