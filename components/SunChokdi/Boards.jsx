import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const Boards = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const handleClick = i => {
    const newArray = [...squares];
    if (newArray[i] || declareWinner(squares)) {
      return;
    }
    if (isX) {
      newArray[i] = 'X';
    } else {
      newArray[i] = '0';
    }
    setSquares(newArray);
    setIsX(!isX);
  };

  const winner = declareWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (isX ? 'X' : 'O');
  }

  return (
    <View style={{flex: 1, backgroundColor: 'green', justifyContent: 'center'}}>
      <Text
        style={{
          fontSize: 40,
          color: 'white',
          textAlign: 'center',
          backgroundColor: 'black',
          margin: 20,
          borderRadius: 10,
          padding: 20,
        }}>
        {status}
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          margin: 10,
          justifyContent: 'space-around',
        }}>
        <Text
          onPress={() => {
            handleClick(0);
          }}
          style={{
            height: 100,
            fontSize: 30,
            textAlignVertical: 'center',
            textAlign: 'center',
            width: 100,
            backgroundColor: 'black',
            color: 'white',
          }}>
          {squares[0]}
        </Text>
        {/* 1 */}
        <Text
          onPress={() => {
            handleClick(1);
          }}
          style={{
            height: 100,
            fontSize: 30,
            textAlignVertical: 'center',
            textAlign: 'center',
            width: 100,
            backgroundColor: 'black',
            color: 'white',
          }}>
          {squares[1]}
        </Text>
        {/* 2 */}
        <Text
          onPress={() => {
            handleClick(2);
          }}
          style={{
            height: 100,
            fontSize: 30,
            textAlignVertical: 'center',
            textAlign: 'center',
            width: 100,
            backgroundColor: 'black',
            color: 'white',
          }}>
          {squares[2]}
        </Text>
        {/* 3 */}
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          margin: 10,
          justifyContent: 'space-around',
        }}>
        <Text
          onPress={() => {
            handleClick(3);
          }}
          style={{
            height: 100,
            fontSize: 30,
            textAlignVertical: 'center',
            textAlign: 'center',
            width: 100,
            backgroundColor: 'black',
            color: 'white',
          }}>
          {squares[3]}
        </Text>
        {/* 4 */}
        <Text
          onPress={() => {
            handleClick(4);
          }}
          style={{
            height: 100,
            fontSize: 30,
            textAlignVertical: 'center',
            textAlign: 'center',
            width: 100,
            backgroundColor: 'black',
            color: 'white',
          }}>
          {squares[4]}
        </Text>
        {/* 5 */}
        <Text
          onPress={() => {
            handleClick(5);
          }}
          style={{
            height: 100,
            fontSize: 30,
            textAlignVertical: 'center',
            textAlign: 'center',
            width: 100,
            backgroundColor: 'black',
            color: 'white',
          }}>
          {squares[5]}
        </Text>
        {/* 6 */}
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          margin: 10,
          justifyContent: 'space-around',
        }}>
        <Text
          onPress={() => {
            handleClick(6);
          }}
          style={{
            height: 100,
            fontSize: 30,
            textAlignVertical: 'center',
            textAlign: 'center',
            width: 100,
            backgroundColor: 'black',
            color: 'white',
          }}>
          {squares[6]}
        </Text>
        {/* 7 */}
        <Text
          onPress={() => {
            handleClick(7);
          }}
          style={{
            height: 100,
            fontSize: 30,
            textAlignVertical: 'center',
            textAlign: 'center',
            width: 100,
            backgroundColor: 'black',
            color: 'white',
          }}>
          {squares[7]}
        </Text>
        {/* 8 */}
        <Text
          onPress={() => {
            handleClick(8);
          }}
          style={{
            height: 100,
            fontSize: 30,
            textAlignVertical: 'center',
            textAlign: 'center',
            width: 100,
            backgroundColor: 'black',
            color: 'white',
          }}>
          {squares[8]}
        </Text>
        {/* 9 */}
      </View>
      <Text
        onPress={() => {
          setSquares([]);
          setIsX(true);
        }}
        style={{
          fontSize: 40,
          color: 'white',
          textAlign: 'center',
          backgroundColor: 'black',
          margin: 20,
          borderRadius: 10,
          padding: 20,
        }}>
        Reset Game
      </Text>
    </View>
  );
};

export default Boards;

const declareWinner = squares => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] == squares[b] && squares[a] == squares[c]) {
      return squares[a];
    }
  }
  return null;
};
