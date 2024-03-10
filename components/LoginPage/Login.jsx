import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Login = () => {
  return (
    <View>
      <Svg
        height={100}
        width="100%"
        viewBox="0 0 1440 320"
        style={{position: 'absolute'}}>
        <Path
          fill="#ff5500"
          fill-opacity="1"
          d="M0,288L60,288C120,288,240,288,360,256C480,224,600,160,720,128C840,96,960,96,1080,122.7C1200,149,1320,203,1380,229.3L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></Path>
      </Svg>
    </View>
  );
};

export default Login;
