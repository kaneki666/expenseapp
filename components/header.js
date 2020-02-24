import React from 'react';
import {Container, Header, Left, Body, Right, Title} from 'native-base';

const header = () => {
  return (
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>Expense</Title>
        </Body>
        <Right />
      </Header>
    </Container>
  );
};

export default header;
