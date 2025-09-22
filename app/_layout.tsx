import { Tabs, useSegments } from 'expo-router';
import React from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';

export default function TabLayout() {
  const segments = useSegments() as string[];

  // segments === [] means home page
  const isHomePage = segments.length === 0;
  const { height } = useWindowDimensions();
  const adjustedHeight = height - 30; // reduce height by 40px (~1cm)

  return (
    <View style={[styles.container, { height: adjustedHeight }]}>
      <Tabs
        screenOptions={{
          headerShown: false, // remove top header everywhere
          tabBarStyle: {
            display:  'none', // hide bottom tab based on current route
          },
        }}
      >
        <Tabs.Screen name="index" options={{ title: "Home" }} />
        <Tabs.Screen name="login" options={{ title: "Login" }} />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
