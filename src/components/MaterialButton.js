import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export default function BackButton() {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.image}
        source={{uri:'/src/assets/material-icon.png'}}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 45,
    height: 45,
  },
})