import "react-native-gesture-handler"

import { StatusBar } from "expo-status-bar"
import { GestureHandlerRootView } from "react-native-gesture-handler"

import { Home } from "./src/screens/Home"

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="light" backgroundColor="transparent" translucent />

      <Home />
    </GestureHandlerRootView>
  )
}
