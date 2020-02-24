import React, {useState, useContext} from 'react';
import {
  Content,
  Form,
  Item,
  Input,
  Label,
  H2,
  Button,
  Text,
  Left,
} from 'native-base';
import {GlobalContext} from '../context/GlobalState';
import {AsyncStorage} from 'react-native';

const AddTransaction = () => {
  const [item, setItem] = useState('');
  const [amount, setAmount] = useState(0);
  const {addTranscation} = useContext(GlobalContext);

  const handleSubmit = async e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      item,
      amount: +amount,
    };
    addTranscation(newTransaction);

    const data = async () => {
      try {
        await AsyncStorage.setItem('transaction', newTransaction);
      } catch (error) {
        // Error saving data
      }
    };
  };

  const savedata = async () => {
    try {
      const value = await AsyncStorage.getItem('transaction');
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      console.log(erro);
    }
  };

  return (
    <Content style={{paddingTop: 50}}>
      <Left>
        <H2>ADD TRANSACTION</H2>
      </Left>
      <Form style={{paddingTop: 50}}>
        <Item stackedLabel>
          <Label>Item</Label>
          <Input value={item} onChangeText={e => setItem(e)} />
        </Item>
        <Item stackedLabel>
          <Label>Amount</Label>
          <Input value={amount} onChangeText={e => setAmount(e)} />
        </Item>
        <Button block warning onPress={handleSubmit}>
          <Text>ADD TRANSACTION</Text>
        </Button>
        <Button block warning onPress={savedata}>
          <Text>ADD </Text>
        </Button>
      </Form>
    </Content>
  );
};

export default AddTransaction;
