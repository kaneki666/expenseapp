import React, {useContext} from 'react';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Right,
  H2,
} from 'native-base';
import {View, Dimensions} from 'react-native';
import {GlobalContext} from '../context/GlobalState';

const screenWidth = Math.round(Dimensions.get('window').width);

const IncomeExpense = () => {
  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  return (
    <Content padder>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        <Card style={{width: screenWidth / 2 - 10}}>
          <CardItem>
            <Body>
              <Text>INCOME</Text>
              <H2 style={{color: '#6ebe90'}}>{income}</H2>
            </Body>
          </CardItem>
        </Card>
        <Card style={{width: screenWidth / 2 - 15}}>
          <CardItem>
            <Body>
              <Text>EXPENSE</Text>
              <H2 style={{color: '#f00000'}}>${expense}</H2>
            </Body>
          </CardItem>
        </Card>
      </View>
    </Content>
  );
};
export default IncomeExpense;
