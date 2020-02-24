import React, {useContext} from 'react';
import {
  Container,
  H2,
  Content,
  List,
  ListItem,
  Text,
  Left,
  Right,
  Icon,
} from 'native-base';
import {Transaction} from './Transaction';

import {GlobalContext} from '../context/GlobalState';

const TransactionList = () => {
  const {transactions} = useContext(GlobalContext);

  return (
    <Content>
      <Left>
        <H2>History</H2>
      </Left>
      <List>
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </List>
    </Content>
  );
};

export default TransactionList;
