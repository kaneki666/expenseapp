import React from 'react';
import {ScrollView} from 'react-native';

import {Header, Left, Body, Right, Title} from 'native-base';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import Transaction from './components/Transaction';
import TransactionList from './components/TransactionList';

import AddTransaction from './components/AddTransaction';
import {GlobalProvider} from './context/GlobalState';
const App = () => {
  return (
    <>
      <Header>
        <Left />
        <Body>
          <Title>Expense</Title>
        </Body>
        <Right />
      </Header>
      <GlobalProvider>
        <ScrollView>
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </ScrollView>
      </GlobalProvider>
    </>
  );
};

export default App;
