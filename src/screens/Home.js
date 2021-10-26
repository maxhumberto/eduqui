import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { MaterialMat } from '.'
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import Button from '../components/homeButton'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ScreenContainer } from 'react-native-screens'

const Avatar = (props) => (
  <Image style={styles.avatar} source={{ uri: props.url }} />
)

const Heading = (props) => <Text style={styles.heading}>{props.children}</Text>

const Title = (props) => <Text style={styles.title}>{props.children}</Text>

const Card1 = (props) => (
  <View style={CardStyles.card}>
    <Avatar url={'https://cdn-icons.flaticon.com/png/512/4645/premium/4645370.png?token=exp=1634336307~hmac=f2c065ead72deb837e2152b07b3cd2ae'} />
    <View style={{ textAlign: 'center', marginTop: 7 }}>
      <Title>Matemática</Title>
    </View>
  </View>
)

const Card2 = (props) => (
  <View style={CardStyles.card}>
    <Avatar url={'https://cdn-icons.flaticon.com/png/512/4645/premium/4645348.png?token=exp=1634336290~hmac=7be17c6bfe67eab93ce13d2e4f676fb4'} />
    <View style={{ textAlign: 'center', marginTop: 7 }}>
      <Title>Português</Title>
    </View>
  </View>
)

const Card3 = (props) => (
  <View style={CardStyles.card}>
    <Avatar url={'https://cdn-icons.flaticon.com/png/512/4645/premium/4645270.png?token=exp=1634336135~hmac=cfecf956af3ba6da98f340157e1a56ff'} />
    <View style={{ textAlign: 'center', marginTop: 7 }}>
      <Title>Física</Title>
    </View>
  </View>
)
const Card4 = (props) => (
  <View style={CardStyles.card}>
    <Avatar url={'https://cdn-icons.flaticon.com/png/512/4645/premium/4645266.png?token=exp=1634336290~hmac=7bdca2984ab04985ec460827e838bda1'} />
    <View style={{ textAlign: 'center', marginTop: 7 }}>
      <Title>Química</Title>
    </View>
  </View>
)
const Card5 = (props) => (
  <View style={CardStyles.card}>
    <Avatar url={'https://cdn-icons.flaticon.com/png/512/4645/premium/4645272.png?token=exp=1634336290~hmac=7ca914f0978e9221bb7b93f5d9e2b5f8'} />
    <View style={{ textAlign: 'center', marginTop: 7 }}>
      <Title>Biologia</Title>
    </View>
  </View>
)

const Card6 = (props) => (
  <View style={CardStyles.card}>
    <Avatar url={'https://cdn-icons.flaticon.com/png/512/4645/premium/4645308.png?token=exp=1634336290~hmac=5e6f604bfcb117538269f61e242d5ff7'} />
    <View style={{ textAlign: 'center', marginTop: 7 }}>
      <Title>Geografia</Title>
    </View>
  </View>
)

const Card7 = (props) => (
  <View style={CardStyles.card}>
    <Avatar url={'https://cdn-icons.flaticon.com/png/512/4645/premium/4645364.png?token=exp=1634336307~hmac=2f64e4e88e179a6f376938ebd1d098f3'} />
    <View style={{ textAlign: 'center', marginTop: 7 }}>
      <Title>História</Title>
    </View>
  </View>
)

const Card8 = (props) => (
  <View style={CardStyles.card}>
    <Avatar url={'https://cdn-icons.flaticon.com/png/512/4645/premium/4645261.png?token=exp=1634336290~hmac=28a17c12ba6ad10f755b5ba3417ef123'} />
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

function Post1 ({navigation}) {
  return  (
    <ScreenContainer>
      <View style={PostStyles.layout}>
          <Image style={PostStyles.image} source={{ uri: 'https://image.freepik.com/vetores-gratis/texto-tipografico-de-matematica-com-ilustracao_277904-9392.jpg' }} /> 
        <View style={PostStyles.content}>
          <Text style={PostStyles.title}>Matemática</Text>
          <Text style={PostStyles.description} numberOfLines={7}>
            Material:
            Video Aulas:
            Exercicios:
            Tempo Estimado:
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
                                                         
const Post2 = ( {navigation}) => (
  <ScreenContainer>
    <View style={PostStyles.layout}>
        <Image style={PostStyles.image} source={{ uri: 'https://image.freepik.com/vetores-gratis/texto-tipografico-de-matematica-com-ilustracao_277904-9392.jpg' }} /> 
      <View style={PostStyles.content}>
        <Text style={PostStyles.title}>Português</Text>
        <Text style={PostStyles.description} numberOfLines={7}>
          Material:
          Video Aulas:
          Exercicios:
          Tempo Estimado:
        </Text>
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

const Post3 = ( {navigation}) => (
  <ScreenContainer>
    <View style={PostStyles.layout}>
        <Image style={PostStyles.image} source={{ uri: 'https://image.freepik.com/vetores-gratis/cabecalho-tipografico-fisico-os-alunos-exploram-eletricidade-magnetismo-ondas-de-luz-e-forcas-disciplina-escolar-estudo-teorico-e-pratico-ilustracao-vetorial-isolada_277904-14212.jpg'}} /> 
      <View style={PostStyles.content}>
        <Text style={PostStyles.title}>Física</Text>
        <Text style={PostStyles.description} numberOfLines={7}>
          Material:2
          Video Aulas:
          Exercicios:
          Tempo Estimado:
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

const Post4 = ( {navigation}) => (
  <ScreenContainer>
    <View style={PostStyles.layout}>
        <Image style={PostStyles.image} source={{ uri: 'https://image.freepik.com/vetores-gratis/cabecalho-tipografico-quimico-licao-escolar-elemento-e-formula-quimica-de-aprendizagem-do-aluno-experiencia-cientifica-em-laboratorio-com-reagentes-ilustracao-vetorial-plana_277904-14206.jpg'}} /> 
      <View style={PostStyles.content}>
        <Text style={PostStyles.title}>Química</Text>
        <Text style={PostStyles.description} numberOfLines={7}>
          Material:
          Video Aulas:
          Exercicios:
          Tempo Estimado:
        </Text>
      </View>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('MateriaQui')}
      >
        OK
      </Button>
    </View>
  </ScreenContainer>
)

const Post5 = ( {navigation}) => (
  <ScreenContainer>
    <View style={PostStyles.layout}>
        <Image style={PostStyles.image} source={{ uri: 'https://image.freepik.com/vetores-gratis/cabecalho-tipografico-de-biologia-alunos-explorando-a-natureza-e-organismos-vivos_277904-14204.jpg' }} /> 
      <View style={PostStyles.content}>
        <Text style={PostStyles.title}>Biologia</Text>
        <Text style={PostStyles.description} numberOfLines={7}>
          Material:
          Video Aulas:
          Exercicios:
          Tempo Estimado:
        </Text>
      </View>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('MateriaBio')}
      >
        OK
      </Button>
    </View>
  </ScreenContainer>
)

const Post6 = ( {navigation}) => (
  <ScreenContainer>
    <View style={PostStyles.layout}>
        <Image style={PostStyles.image} source={{ uri:'https://image.freepik.com/vetores-gratis/cabecalho-tipografico-de-geografia-alunos-aprendendo-as-terras_277904-12889.jpg'}} /> 
      <View style={PostStyles.content}>
        <Text style={PostStyles.title}>Geografia</Text>
        <Text style={PostStyles.description} numberOfLines={7}>
          Material:
          Video Aulas:
          Exercicios:
          Tempo Estimado:
        </Text>
      </View>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('MateriaGeo')}
      >
        OK
      </Button>
    </View>
  </ScreenContainer>
)

const Post7 = ( {navigation}) => (
  <ScreenContainer>
    <View style={PostStyles.layout}>
        <Image style={PostStyles.image} source={{ uri: 'https://image.freepik.com/vetores-gratis/cabecalho-tipografico-da-historia-disciplina-escolar-de-historia-conhecimento-do-passado-e-civilizacoes-antigas-ideia-de-ciencia-e-educacao-ilustracao-em-vetor-isolada-em-estilo-simples_277904-15586.jpg' }} /> 
      <View style={PostStyles.content}>
        <Text style={PostStyles.title}>História</Text>
        <Text style={PostStyles.description} numberOfLines={7}>
          Material:
          Video Aulas:
          Exercicios:
          Tempo Estimado:
        </Text>
      </View>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('MateriaHis')}
      >
        OK
      </Button>
    </View>
  </ScreenContainer>
)

const Post8 = ( {navigation}) => (
  <ScreenContainer>
    <View style={PostStyles.layout}>
        <Image style={PostStyles.image} source={{ uri: 'https://image.freepik.com/vetores-gratis/cabecalho-tipografico-de-redacao-jornalista-e-designer-trabalhando-em-artigo-de-revista-e-foto-edicao-de-revistas-selecao-de-conteudo-plano-de-lancamento-e-promocao-ilustracao-em-vetor-plana-isolada_277904-14482.jpg' }} /> 
      <View style={PostStyles.content}>
        <Text style={PostStyles.title}>Redação</Text>
        <Text style={PostStyles.description} numberOfLines={7}>
          Material:
          Video Aulas:
          Exercicios:
          Tempo Estimado:
        </Text>
      </View>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('MateriaRed')}
      >
        OK
      </Button>
    </View>
  </ScreenContainer>
)

const Post9 = ( {navigation}) => (
  <ScreenContainer>
    <View style={PostStyles.layout}>
        <Image style={PostStyles.image} source={{ uri: 'https://image.freepik.com/vetores-gratis/cabecalho-tipografico-em-ingles-estude-linguas-estrangeiras-na-escola-aula-de-gramatica-ou-audio-ideia-de-comunicacao-global-estudar-vocabulario-estrangeiro-ilustracao-vetorial-plana_277904-13213.jpg' }} /> 
      <View style={PostStyles.content}>
        <Text style={PostStyles.title}>Inglês</Text>
        <Text style={PostStyles.description} numberOfLines={7}>
          Material:
          Video Aulas:
          Exercicios:
          Tempo Estimado:
        </Text>
      </View>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('MateriaIng')}
      >
        OK
      </Button>
    </View>
  </ScreenContainer>
)

const Post10 = ( {navigation}) => (
  <ScreenContainer>
    <View style={PostStyles.layout}>
        <Image style={PostStyles.image} source={{ uri: 'https://image.freepik.com/vetores-gratis/cabecalho-tipografico-em-espanhol-curso-de-espanhol-na-escola-de-linguas-estude-linguas-estrangeiras-com-falante-nativo-ideia-de-comunicacao-global-ilustracao-vetorial-no-estilo-cartoon_277904-15607.jpg' }} /> 
      <View style={PostStyles.content}>
        <Text style={PostStyles.title}>Espanhol</Text>
        <Text style={PostStyles.description} numberOfLines={7}>
          Material:
          Video Aulas:
          Exercicios:
          Tempo Estimado:
        </Text>
      </View>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('MateriaEsp')}
      >
        OK
      </Button>
    </View>
  </ScreenContainer>
) 


const Stack = createStackNavigator()

const HomeScreen = () => (
  <ScrollView>
    <Heading>Materias</Heading>
    <ScrollView>
      <ScrollView style={{ flex: 1, flexDirection: 'row' }} horizontal>
        <Card1/>
        <Card2/>
        <Card3/>
        <Card4/>
        <Card5/>
        <Card6/>
        <Card7/>
        <Card8/>
        <Card9/>
        <Card10/>
      </ScrollView>
      <Heading>Materias</Heading>
      <Post1/>
      <Post2/>
      <Post3/>
      <Post4/>
      <Post5/>
      <Post6/>
      <Post7/>
      <Post8/>
      <Post9/>
      <Post10/>
    </ScrollView>
  </ScrollView>
)

const App = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#FAF9FA' }}>
    <HomeScreen />
  </SafeAreaView>
)

export default App

// const data = {
//   materia: [
//     {
//       id: 'materia-1',
//       name: 'Português',
//       avatar:
//         'https://cdn-icons.flaticon.com/png/512/4645/premium/4645348.png?token=exp=1634336290~hmac=7be17c6bfe67eab93ce13d2e4f676fb4',
//     },

//     {
//       id: 'materia-2',
//       name: 'Matematica',
//       avatar:
//         'https://cdn-icons.flaticon.com/png/512/4645/premium/4645370.png?token=exp=1634336307~hmac=f2c065ead72deb837e2152b07b3cd2ae',
//     },
//     {
//       id: 'materia-3',
//       name: 'Física',
//       avatar:
//         'https://cdn-icons.flaticon.com/png/512/4645/premium/4645270.png?token=exp=1634336135~hmac=cfecf956af3ba6da98f340157e1a56ff',
//     },
//     {
//       id: 'materia-4',
//       name: 'Quimica',
//       avatar:
//         'https://cdn-icons.flaticon.com/png/512/4645/premium/4645266.png?token=exp=1634336290~hmac=7bdca2984ab04985ec460827e838bda1',
//     },
//     {
//       id: 'materia-5',
//       name: 'Biologia',
//       avatar:
//         'https://cdn-icons.flaticon.com/png/512/4645/premium/4645272.png?token=exp=1634336290~hmac=7ca914f0978e9221bb7b93f5d9e2b5f8',
//     },

//     {
//       id: 'materia-6',
//       name: 'Geografia',
//       avatar:
//         'https://cdn-icons.flaticon.com/png/512/4645/premium/4645308.png?token=exp=1634336290~hmac=5e6f604bfcb117538269f61e242d5ff7',
//     },

//     {
//       id: 'materia-7',
//       name: 'Historia',
//       avatar:
//         'https://cdn-icons.flaticon.com/png/512/4645/premium/4645364.png?token=exp=1634336307~hmac=2f64e4e88e179a6f376938ebd1d098f3',
//     },

//     {
//       id: 'materia-8',
//       name: 'Redação',
//       avatar:
//         'https://cdn-icons.flaticon.com/png/512/4645/premium/4645261.png?token=exp=1634336290~hmac=28a17c12ba6ad10f755b5ba3417ef123',
//     },
//     {
//       id: 'materia-9',
//       name: 'Ingles',
//       avatar: 'https://cdn-icons-png.flaticon.com/512/3106/3106381.png',
//     },
//     {
//       id: 'materia-10',
//       name: 'Espanhol',
//       avatar: 'https://cdn-icons-png.flaticon.com/512/2122/2122673.png',
//     },
//   ],

//   posts: [
//     {
//       id: 'post-1',
//       image:
//         'https://image.freepik.com/vetores-gratis/cabecalho-tipografico-em-portugues-escola-de-idiomas-portugues_277904-15599.jpg',
//       title: 'Português',
//       description: 'Material:\nVideo Aulas:\nExercicios:\nTempo Estimado:',
//       teladestino: 'MaterialMat',
//     },

//     {
//       id: 'post-2',
//       image:
//         'https://image.freepik.com/vetores-gratis/texto-tipografico-de-matematica-com-ilustracao_277904-9392.jpg',
//       title: 'Matematica',
//       description: 'Material:\nVideo Aulas:\nExercicios:\nTempo Estimado:',
//     },

//     {
//       id: 'post-3',
//       image:
//         'https://image.freepik.com/vetores-gratis/cabecalho-tipografico-fisico-os-alunos-exploram-eletricidade-magnetismo-ondas-de-luz-e-forcas-disciplina-escolar-estudo-teorico-e-pratico-ilustracao-vetorial-isolada_277904-14212.jpg',
//       title: 'Fisica',
//       description: 'Material:\nVideo Aulas:\nExercicios:\nTempo Estimado:',
//     },
//     {
//       id: 'post-4',
//       image:
//         'https://image.freepik.com/vetores-gratis/cabecalho-tipografico-quimico-licao-escolar-elemento-e-formula-quimica-de-aprendizagem-do-aluno-experiencia-cientifica-em-laboratorio-com-reagentes-ilustracao-vetorial-plana_277904-14206.jpg',
//       title: 'Quimica',
//       description: 'Material:\nVideo Aulas:\nExercicios:\nTempo Estimado:',
//     },
//     {
//       id: 'post-5',
//       image:
//         'https://image.freepik.com/vetores-gratis/cabecalho-tipografico-de-biologia-alunos-explorando-a-natureza-e-organismos-vivos_277904-14204.jpg',
//       title: 'Biologia',
//       description: 'Material:\nVideo Aulas:\nExercicios:\nTempo Estimado:',
//     },
//     {
//       id: 'post-6',
//       image:
//         'https://image.freepik.com/vetores-gratis/cabecalho-tipografico-de-geografia-alunos-aprendendo-as-terras_277904-12889.jpg',
//       title: 'Geografia',
//       description: 'Material:\nVideo Aulas:\nExercicios:\nTempo Estimado:',
//     },

//     {
//       id: 'post-7',
//       image:
//         'https://image.freepik.com/vetores-gratis/cabecalho-tipografico-da-historia-disciplina-escolar-de-historia-conhecimento-do-passado-e-civilizacoes-antigas-ideia-de-ciencia-e-educacao-ilustracao-em-vetor-isolada-em-estilo-simples_277904-15586.jpg',
//       title: 'Historia',
//       description: 'Material:\nVideo Aulas:\nExercicios:\nTempo Estimado:',
//     },

//     {
//       id: 'post-8',
//       image:
//         'https://image.freepik.com/vetores-gratis/cabecalho-tipografico-de-redacao-jornalista-e-designer-trabalhando-em-artigo-de-revista-e-foto-edicao-de-revistas-selecao-de-conteudo-plano-de-lancamento-e-promocao-ilustracao-em-vetor-plana-isolada_277904-14482.jpg',
//       title: 'Redação',
//       description: 'Material:\nVideo Aulas:\nExercicios:\nTempo Estimado:',
//     },

//     {
//       id: 'post-9',
//       image:
//         'https://image.freepik.com/vetores-gratis/cabecalho-tipografico-em-ingles-estude-linguas-estrangeiras-na-escola-aula-de-gramatica-ou-audio-ideia-de-comunicacao-global-estudar-vocabulario-estrangeiro-ilustracao-vetorial-plana_277904-13213.jpg',
//       title: 'Ingles',
//       description: 'Material:\nVideo Aulas:\nExercicios:\nTempo Estimado:',
//     },

//     {
//       id: 'post-10',
//       image:
//         'https://image.freepik.com/vetores-gratis/cabecalho-tipografico-em-espanhol-curso-de-espanhol-na-escola-de-linguas-estude-linguas-estrangeiras-com-falante-nativo-ideia-de-comunicacao-global-ilustracao-vetorial-no-estilo-cartoon_277904-15607.jpg',
//       title: 'Espanhol',
//       description: 'Material:\nVideo Aulas:\nExercicios:\nTempo Estimado:',
//     },
//   ],
// }

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
