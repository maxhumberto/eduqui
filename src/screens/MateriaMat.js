import React from 'react'
import { StatusBar } from 'expo-status-bar';
import Paragraph from '../components/Paragraph'
import Header from '../components/Header'
import { Image,
  SafeAreaView, 
  ScrollView,
  StyleSheet, 
  Text, 
  View,
  } from 'react-native';
  import Button from '../components/homeButton'

 

const Avatar = (props) => (
  <Image
    style={styles.avatar}
    source={{ uri: props.url }}
  />
);

const Heading = (props) => (
  <Text style={styles.heading}>
    {props.children}
  </Text>
);

const Title = (props) => (
  <Text style={styles.title}>
    {props.children}
  </Text>
);


const Card = (props) => (
  <View style={CardStyles.card}>
  <Avatar url={props.avatar}/>
    <View style={{textAlign: 'center', marginTop: 7}}>
      <Title>{props.name}</Title>
    </View>
  </View>
);


const Post = (props, navigation) => (
  <View style={PostStyles.layout}>
    <Image style={PostStyles.image} source={{ uri: props.image }}/>
    <View style={PostStyles.content}>
      <Text style={PostStyles.title}>{props.title}</Text>
      <Text style={PostStyles.description} numberOfLines={7}>{props.description}
      </Text>
    </View>
    <Button
        mode="contained"
        onPress={() => navigation.navigate (props.teladestino)}
        >
       Acesso
      </Button>
  </View>

);

const MaterialMat = () => (
  
  <ScrollView>
    <Heading>Materias</Heading>
    <ScrollView>
     <ScrollView style={{flex: 1, flexDirection: 'row'}} horizontal>
    {
      data.materia.map((materia) => (
        <Card
        key={materia.id}
        name={materia.name}
          avatar={materia.avatar}
          />
          ))
        }
    </ScrollView>
    <Heading>Materias</Heading>
       {
         data.posts.map((post) => (
           <Post
           key={post.id}
           image={post.image}
           title={post.title}
           description={post.description}
           teladestino={post.teladestino}  />
           
           ))
          }

  
    </ScrollView>
    
  </ScrollView>
);

const App = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#FAF9FA' }}>
    <MaterialMat />
  </SafeAreaView>
);

export default App;

const data = {
  materia: [
    {
      id: 'materia-1', 
      name: 'Português', 
      avatar: 'https://cdn-icons.flaticon.com/png/512/4645/premium/4645348.png?token=exp=1634336290~hmac=7be17c6bfe67eab93ce13d2e4f676fb4'
      , 
    },
    
    {
      id: 'materia-2', 
      name: 'Matematica', 
      avatar: 'https://cdn-icons.flaticon.com/png/512/4645/premium/4645370.png?token=exp=1634336307~hmac=f2c065ead72deb837e2152b07b3cd2ae',
    },
    {
      id: 'materia-3', 
      name: 'Física', 
      avatar: 'https://cdn-icons.flaticon.com/png/512/4645/premium/4645270.png?token=exp=1634336135~hmac=cfecf956af3ba6da98f340157e1a56ff',
    },
    {
      id: 'materia-4',
      name: 'Quimica',
      avatar: 'https://cdn-icons.flaticon.com/png/512/4645/premium/4645266.png?token=exp=1634336290~hmac=7bdca2984ab04985ec460827e838bda1',
    },
    {
      id: 'materia-5',
      name: 'Biologia',
      avatar: 'https://cdn-icons.flaticon.com/png/512/4645/premium/4645272.png?token=exp=1634336290~hmac=7ca914f0978e9221bb7b93f5d9e2b5f8',
    },
    
    {
      id: 'materia-6',
      name: 'Geografia',
      avatar: 'https://cdn-icons.flaticon.com/png/512/4645/premium/4645308.png?token=exp=1634336290~hmac=5e6f604bfcb117538269f61e242d5ff7',
    },
    
    {
      id: 'materia-7',
      name: 'Historia',
      avatar: 'https://cdn-icons.flaticon.com/png/512/4645/premium/4645364.png?token=exp=1634336307~hmac=2f64e4e88e179a6f376938ebd1d098f3',
    },
      
    {
      id: 'materia-8',
      name: 'Redação',
        avatar: 'https://cdn-icons.flaticon.com/png/512/4645/premium/4645261.png?token=exp=1634336290~hmac=28a17c12ba6ad10f755b5ba3417ef123',
      },
      {
        id: 'materia-9',
        name: 'Ingles',
        avatar: 'https://cdn-icons-png.flaticon.com/512/3106/3106381.png',
      },
      {
        id: 'materia-10',
        name: 'Espanhol',
        avatar: 'https://cdn-icons-png.flaticon.com/512/2122/2122673.png',
      },
    ],
    
    posts: [
      {
      id: 'post-1',
      image: 'https://image.flaticon.com/icons/png/512/1242/1242449.png',
      title: 'Material',
      description: 'Material:\nVideo Aulas:\nExercicios:\nTempo Estimado:',
    },
    {
      id: 'post-2',
      image: 'https://image.flaticon.com/icons/png/128/1242/1242445.png',
      title: 'Videos',
      description: 'Material:\nVideo Aulas:\nExercicios:\nTempo Estimado:',
    },
    {
      id: 'post-3',
      image: 'https://image.flaticon.com/icons/png/512/1242/1242446.png',
      title: 'Exercicios',
      description: 'Material:\nVideo Aulas:\nExercicios:\nTempo Estimado:',
    },
  ],
}

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 55,
    width: 60,
    height: 60,
    marginTop: 3
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 18,
    margin: 5
  },
  title: {
    fontSize: 9,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
});

const PostStyles = StyleSheet.create({
  layout: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5
  },
  image: {
    borderRadius: 10,
    width: 100,
    height: 50,
    margin: 7,
    flex: 1
  },
  content: {
    margin: 3,
    flex: 2
  },
  title: {
    textTransform: 'uppercase',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 1
  },
  description: {
    fontSize: 13
  },
});

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
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  }
});