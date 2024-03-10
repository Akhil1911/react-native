import {View, Text, Button, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';

const Btn = () => {
  const [count, setcount] = useState(0);
  useEffect(() => {}, [count]);
  return (
    <View>
      {/* <Button

        title="Press Me"
        color={'black'}
        onPress={() => {
          console.warn('Pressed!!!');
        }}
      /> */}
      <Text
        style={{
          textAlign: 'center',
          fontSize: 40,
          marginTop: 10,
        }}>
        {count}
      </Text>
      <TouchableOpacity
        onPress={() => {
          setcount(count + 1);
        }}
        style={{backgroundColor: 'black', padding: 20, marginTop: 200}}>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 40}}>
          Increment
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Btn;
