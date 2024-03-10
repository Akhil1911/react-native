import {View, Text} from 'react-native';
import React from 'react';

const UserData = ({propsName}) => {
  return (
    <View>
      <Text style={{fontSize: 20, textAlign: 'center'}}>
        Name : {propsName}
      </Text>
      <Text style={{fontSize: 20, textAlign: 'center'}}>Age : 19</Text>
      <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 40}}>
        Address : India
      </Text>
    </View>
  );
};

export default UserData;
