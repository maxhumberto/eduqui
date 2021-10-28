import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { Provider } from 'react-native-paper'
import { ScreenContainer } from 'react-native-screens'
import Button from './src/components/MaterialButton.js'

const Avatar = (props) => (
  <Image style={styles.avatar} source={{ uri: props.url }} />
)

const Heading = (props) => <Text style={styles.heading}>{props.children}</Text>

const Title = (props) => <Text style={styles.title}>{props.children}</Text>

function Post1({ navigation }) {
  return (
    <ScreenContainer>
      <View style={PostStyles.layout}>
        <Image
          style={PostStyles.image}
          source={{
            uri: 'https://image.flaticon.com/icons/png/512/1242/1242449.png',
          }}
        />
        <View style={PostStyles.content}>
          <Text style={PostStyles.title}>Matemática</Text>
          <Text style={PostStyles.description} numberOfLines={7}>
            Material: Video Aulas: Exercicios: Tempo Estimado:
          </Text>
        </View>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('MateriaMat')}
        >
          OK
        </Button>
      </View>
    </ScreenContainer>
  )
}

const Post2 = ({ navigation }) => (
  <ScreenContainer>
    <View style={PostStyles.layout}>
      <Image
        style={PostStyles.image}
        source={{
          uri: 'https://image.flaticon.com/icons/png/128/1242/1242445.png',
        }}
      />
      <View style={PostStyles.content}>
        <Text style={PostStyles.title}>Português</Text>
      </View>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('MateriaPor')}
      >
        OK
      </Button>
    </View>
  </ScreenContainer>
)

const Post3 = ({ navigation }) => (
  <ScreenContainer>
    <View style={PostStyles.layout}>
      <Image
        style={PostStyles.image}
        source={{
          uri: 'https://image.flaticon.com/icons/png/512/1242/1242449.png',
        }}
      />
      <View style={PostStyles.content}>
        <Text style={PostStyles.title}>Física</Text>
        <Text style={PostStyles.description} numberOfLines={7}>
          Material:2 Video Aulas: Exercicios: Tempo Estimado:
        </Text>
      </View>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('MateriaFis')}
      >
        OK
      </Button>
    </View>
  </ScreenContainer>
)


const styles = StyleSheet.create({
  avatar: {
    borderRadius: 55,
    width: 60,
    height: 60,
    marginTop: 3,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 18,
    margin: 5,
  },
  title: {
    fontSize: 9,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
})

const PostStyles = StyleSheet.create({
  layout: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  image: {
    borderRadius: 10,
    width: 100,
    height: 50,
    margin: 7,
    flex: 1,
  },
  content: {
    margin: 3,
    flex: 2,
  },
  title: {
    textTransform: 'uppercase',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 1,
  },
  description: {
    fontSize: 13,
  },
})