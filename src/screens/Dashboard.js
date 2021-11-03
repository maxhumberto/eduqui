import React from 'react'
import { } from 'react-native';
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

export default function Dashboard({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>vamos começar</Header>
      <Paragraph>
        Login bem sucedido, bons estudos!
      </Paragraph>

      
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Principal')}
      >
        OK
      </Button>
    </Background>
  )
}
