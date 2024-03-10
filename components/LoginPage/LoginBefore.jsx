import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
const LoginBefore = () => {
  const navigate = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <Image
        source={require('../../assets/LoginBefore.png')}
        style={{height: 550, width: '100%', objectFit: 'contain'}}
      />
      <View style={styles.dataContainer}>
        <View>
          <Text style={styles.letsGetStarted}>Let's Get Started</Text>
        </View>
        <View style={styles.heading}>
          <Text style={styles.dash}></Text>
          <Text
            style={{fontSize: 15, marginHorizontal: 10, marginVertical: -10}}>
            Login or Signup with
          </Text>
          <Text style={styles.dash}></Text>
          <Text></Text>
        </View>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            marginTop: '-7%',
          }}>
          <Text
            onPress={() => navigate.navigate('Login')}
            style={styles.phoneBtn}>
            Phone Number
          </Text>
        </TouchableOpacity>
        <View style={styles.dataFooter}>
          <Text style={styles.dataFooterFirst}>
            by proceeding you agree to our{' '}
          </Text>
          <View style={styles.dataFooterSecond}>
            <Text style={{fontWeight: 'bold', color: 'black'}}>
              Terms Of Use
            </Text>
            <Text style={styles.dataFooterFirst}>And</Text>
            <Text style={{fontWeight: 'bold', color: 'black'}}>
              Privacy Policy
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginBefore;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  dataContainer: {
    // marginRight: 40,
    gap: 30,
  },
  heading: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  dash: {
    borderTopWidth: 0.5,
    borderTopColor: 'gray',
    width: 90,
  },
  letsGetStarted: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
  phoneBtn: {
    backgroundColor: 'red',
    color: 'white',
    padding: 20,
    textAlign: 'center',
    borderRadius: 10,
    fontSize: 18,
    width: '100%',
    // marginHorizontal: 18,
  },
  dataFooter: {
    alignItems: 'center',
  },
  dataFooterFirst: {
    textTransform: 'capitalize',
    letterSpacing: 1,
    fontWeight: '500',
    fontSize: 13,
    marginBottom: 2,
  },
  dataFooterSecond: {
    display: 'flex',
    flexDirection: 'row',
    gap: 6,
  },
});
