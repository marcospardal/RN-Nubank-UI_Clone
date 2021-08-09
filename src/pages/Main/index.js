import React from 'react';

// components
import Header from '../../components/Header';
import Tabs from '../../components/Tabs'

// styles
import { Container } from './styles';

 
function Main() {
  return(
    <Container>
      <Header />
      <Tabs/>
    </Container>
  )
};

export default Main;