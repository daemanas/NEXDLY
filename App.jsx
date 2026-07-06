import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/navigation/Navigation'
const App = () => {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <Navigation />
    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({})