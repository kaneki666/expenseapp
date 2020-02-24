import React, {useContext} from 'react';
import {StyleSheet, Button, ImageBackground} from 'react-native';
import {ListItem, Left, Text, Right, Card, Icon} from 'native-base';
import {GlobalContext} from '../context/GlobalState';

const styles = StyleSheet.create({
  minus: {
    borderRightWidth: 5,
    borderRightColor: '#f00000',
  },
  plus: {
    borderRightWidth: 5,
    borderRightColor: '#6ebe90',
  },
  minusmoney: {
    color: '#f00000',
  },
  plusmoney: {
    color: '#6ebe90',
  },
});

export const Transaction = ({transaction}) => {
  const {deleteTransaction} = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <Card>
      <ListItem>
        <Button
          title="x"
          onPress={() => deleteTransaction(transaction.id)}
          color="#f00000"
        />
        <Left key={transaction.id}>
          <Text>{transaction.item}</Text>
        </Left>
        <Right style={transaction.amount < 0 ? styles.minus : styles.plus}>
          <Text
            style={
              transaction.amount < 0 ? styles.minusmoney : styles.plusmoney
            }>
            {sign}${Math.abs(transaction.amount)}
          </Text>
        </Right>
      </ListItem>
    </Card>
  );
};

export default Transaction;
