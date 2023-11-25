import React from 'react';
import { Text, View } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen() {
  return (
    <MainLayout>
      <View>
        <Text>App Name: ToDo App</Text>
        <Text>Developer: [Nishant]</Text>
        <Text>Date: {new Date().toLocaleDateString()}</Text>
      </View>
    </MainLayout>
  );
}

export default AboutScreen;