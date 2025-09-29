import { Stack } from "expo-router";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { indexStyles } from "../styles/appIndexStyles";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={indexStyles.container}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
