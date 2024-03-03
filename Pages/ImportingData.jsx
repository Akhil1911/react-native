import { View, Text } from 'react-native'
import React from 'react'
import UserData from '../components/UserData';
import CompanyData from '../components/CompanyData';

const ImportingData = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 40,
          textAlign: 'center',
          marginTop: 100,
          marginBottom: 50,
        }}>
        Personal Data
      </Text>
      <UserData />
      <Text
        style={{
          fontSize: 40,
          textAlign: 'center',
          marginTop: 50,
          marginBottom: 50,
        }}>
        Company Data
      </Text>
      <CompanyData />
    </View>
  );
}

export default ImportingData