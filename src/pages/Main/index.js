import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

// components
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';

// styles
import { Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation } from './styles';

 
function Main() {
  return(
    <Container>
      <Header />
        <Content>
            <Card>
              <CardHeader>
                <Icon name='attach-money' size={28} color='#666'/>
                <Icon name='visibility-off' size={28} color='#666'/>
              </CardHeader>
              <CardContent>
                <Title>Saldo disponível</Title>
                <Description>R$ 197.611,65</Description>
              </CardContent>
              <CardFooter>
                <Annotation>
                  Transferência de R$ 20,00 recebida de Marcos Davi Nascimento hoje às 6:00
                </Annotation>
              </CardFooter>
            </Card>
        </Content>
      <Tabs/>
    </Container>
  )
};

export default Main;