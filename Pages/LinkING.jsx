import React from 'react';
import {Button, Linking, StyleSheet, View} from 'react-native';
const LinkING = () => {
  const openUrl = async url => {
    const supported = await Linking.canOpenURL(url);
    console.warn(supported);

  };
  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          openUrl('https://github.com/Akhil1911');
        }}
        title="Press Me"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LinkING;
