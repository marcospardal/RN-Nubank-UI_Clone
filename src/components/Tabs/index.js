import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TabsContainer, TabsItem, TabText } from './styles';

function Tabs() {
  return (
    <Container>
      <TabsContainer>
        <TabsItem>
          <Icon name='person-add' size={24} color='#FFF' />
          <TabText>Indicar amigos</TabText>
        </TabsItem>
        <TabsItem>
          <Icon name='chat-bubble-outline' size={24} color='#FFF' />
          <TabText>Cobrar</TabText>
        </TabsItem>
        <TabsItem>
          <Icon name='arrow-downward' size={24} color='#FFF' />
          <TabText>Depositar</TabText>
        </TabsItem>
        <TabsItem>
          <Icon name='arrow-upward' size={24} color='#FFF' />
          <TabText>Transferir</TabText>
        </TabsItem>
        <TabsItem>
          <Icon name='lock' size={24} color='#FFF' />
          <TabText>Bloquear cartão</TabText>
        </TabsItem>
      </TabsContainer>
    </Container>
  )
};

export default Tabs;