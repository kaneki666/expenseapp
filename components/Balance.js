import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, H1, H2, H3, Text, View} from 'native-base';

import {GlobalContext} from '../context/GlobalState';

const styles = StyleSheet.create({
  root: {
    alignSelf: 'center',
    paddingTop: 15,
  },
});

const Balance = () => {
  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map(item => item.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <View style={styles.root}>
      <Text>Your Balance</Text>
      <H1>${total}</H1>
    </View>
  );
};

export default Balance;
