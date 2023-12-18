import { useState } from "react"
import { Ionicons } from "@expo/vector-icons"
import { View, TouchableOpacity } from "react-native"

import { styles } from "./styles"
import { Sheet } from "../../components/Sheet"

export function Home() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleSheet() {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={toggleSheet}
      >
        <Ionicons name="options" size={24} color="#FFF" />
      </TouchableOpacity>

      {isOpen && <Sheet onClose={toggleSheet} />}
    </View>
  )
}
