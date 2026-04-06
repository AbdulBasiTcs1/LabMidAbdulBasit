import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  const projectData = {
    name: "Project Study Planner",
    student: "Your Name",
    features: "Task scheduling, reminders, progress tracking",
    tools: "React Native, Expo, AsyncStorage"
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{projectData.name}</Text>
      <Text>Student: {projectData.student}</Text>
      <Text>Features: {projectData.features}</Text>
      <Text>Tools: {projectData.tools}</Text>

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', projectData)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 }
});
