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

const Card1 = (props) => (
  <View style={CardStyles.card}>
    <Avatar
      url={
        'https://cdn-icons.flaticon.com/png/512/4645/premium/4645370.png?token=exp=1634336307~hmac=f2c065ead72deb837e2152b07b3cd2ae'
      }
    />
    <View style={{ textAlign: 'center', marginTop: 7 }}>
      <Title>Matemática</Title>
    </View>
  </View>
)

const Card2 = (props) => (
  <View style={CardStyles.card}>
    <Avatar
      url={
        'https://cdn-icons.flaticon.com/png/512/4645/premium/4645348.png?token=exp=1634336290~hmac=7be17c6bfe67eab93ce13d2e4f676fb4'
      }
    />
    <View style={{ textAlign: 'center', marginTop: 7 }}>
      <Title>Português</Title>
    </View>
  </View>
)

const Card3 = (props) => (
  <View style={CardStyles.card}>
    <Avatar
      url={
        'https://cdn-icons.flaticon.com/png/512/4645/premium/4645270.png?token=exp=1634336135~hmac=cfecf956af3ba6da98f340157e1a56ff'
      }
    />
    <View style={{ textAlign: 'center', marginTop: 7 }}>
      <Title>Física</Title>
    </View>
  </View>
)
const Card4 = (props) => (
  <View style={CardStyles.card}>
    <Avatar
      url={
        'https://cdn-icons.flaticon.com/png/512/4645/premium/4645266.png?token=exp=1634336290~hmac=7bdca2984ab04985ec460827e838bda1'
      }
    />
    <View style={{ textAlign: 'center', marginTop: 7 }}>
      <Title>Química</Title>
    </View>
  </View>
)
const Card5 = (props) => (
  <View style={CardStyles.card}>
    <Avatar
      url={
        'https://cdn-icons.flaticon.com/png/512/4645/premium/4645272.png?token=exp=1634336290~hmac=7ca914f0978e9221bb7b93f5d9e2b5f8'
      }
    />
    <View style={{ textAlign: 'center', marginTop: 7 }}>
      <Title>Biologia</Title>
    </View>
  </View>
)

const Card6 = (props) => (
  <View style={CardStyles.card}>
    <Avatar
      url={
        'https://cdn-icons.flaticon.com/png/512/4645/premium/4645308.png?token=exp=1634336290~hmac=5e6f604bfcb117538269f61e242d5ff7'
      }
    />
    <View style={{ textAlign: 'center', marginTop: 7 }}>
      <Title>Geografia</Title>
    </View>
  </View>
)

const Card7 = (props) => (
  <View style={CardStyles.card}>
    <Avatar
      url={
        'https://cdn-icons.flaticon.com/png/512/4645/premium/4645364.png?token=exp=1634336307~hmac=2f64e4e88e179a6f376938ebd1d098f3'
      }
    />
    <View style={{ textAlign: 'center', marginTop: 7 }}>
      <Title>História</Title>
    </View>
  </View>
)

const Card8 = (props) => (
  <View style={CardStyles.card}>
    <Avatar
      url={
        'https://cdn-icons.flaticon.com/png/512/4645/premium/4645261.png?token=exp=1634336290~hmac=28a17c12ba6ad10f755b5ba3417ef123'
      }
    />
    <View style={{ textAlign: 'center', marginTop: 7 }}>
      <Title>Redação</Title>
    </View>
  </View>
)

const Card9 = (props) => (
  <View style={CardStyles.card}>
    <Avatar url={'https://cdn-icons-png.flaticon.com/512/3106/3106381.png'} />
    <View style={{ textAlign: 'center', marginTop: 7 }}>
      <Title>Inglês</Title>
    </View>
  </View>
)

const Card10 = (props) => (
  <View style={CardStyles.card}>
    <Avatar url={'https://cdn-icons-png.flaticon.com/512/2122/2122673.png'} />
    <View style={{ textAlign: 'center', marginTop: 7 }}>
      <Title>Espanhol</Title>
    </View>
  </View>
)

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

const CardStyles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    margin: 7,
    width: 75,
    borderColor: 'lightgray',
    borderStyle: 'solid',
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
})
