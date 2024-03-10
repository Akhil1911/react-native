import React, {useState} from 'react';
import {Button, TextInput, View, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Formik} from 'formik';
import * as Yup from 'yup';

const Home = props => {
  const [password, setPassword] = useState(0);
  const [isUpperCase, setIsUpperCase] = useState(false);
  const [isLowerCase, setisLowerCase] = useState(true);
  const [isNumber, setisNumber] = useState(false);
  const [isSpecial, setisSpecial] = useState(false);

  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);

  const generatePasswordData = passLen => {
    let length = passLen;
    let characterList = '';
    let tempPass = '';
    let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowercase = 'abcdefghijklmnopqrstuvwxyz';
    let nums = '0123456789';
    let specials = '~!@#$%^&*';
    if (isLowerCase) {
      characterList += lowercase;
    }
    if (isUpperCase) {
      characterList += uppercase;
    }
    if (isNumber) {
      characterList += nums;
    }
    if (isSpecial) {
      characterList += specials;
    }

    for (let i = 1; i <= length; i++) {
      let num = Math.ceil(Math.random() * characterList.length);
      tempPass += characterList.charAt(num);
    }
    setPassword(tempPass);
    setIsPasswordGenerated(true);
  };
  return (
    <View>
      <Formik
        initialValues={{passwordLength: ''}}
        validationSchema={Yup.object({
          passwordLength: Yup.number()
            .required('Required')
            .min(4, 'Minimum 4')
            .max(12, '12 Maximum'),
        })}
        onSubmit={values => {
          generatePasswordData(values.passwordLength);
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          handleReset,
        }) => (
          <View>
            <TextInput
              onChangeText={handleChange('passwordLength')}
              onBlur={handleBlur('passwordLength')}
              value={values.passwordLength}
              placeholder="Enter Length"
              keyboardType="numeric"
            />
            {touched.passwordLength && errors.passwordLength && (
              <Text>{errors.passwordLength}</Text>
            )}
            <CheckBox value={isLowerCase} />
            <Text>Lower case</Text>
            <CheckBox value={isUpperCase} onValueChange={setIsUpperCase} />
            <Text
              style={{
                textDecorationLine: isUpperCase ? 'none' : 'line-through',
              }}>
              Uppercase
            </Text>

            <CheckBox value={isNumber} onValueChange={setisNumber} />
            <Text
              style={{
                textDecorationLine: isNumber ? 'none' : 'line-through',
              }}>
              Numbers
            </Text>
            <CheckBox value={isSpecial} onValueChange={setisSpecial} />
            <Text
              style={{
                textDecorationLine: isSpecial ? 'none' : 'line-through',
              }}>
              Specials
            </Text>

            <Button onPress={handleSubmit} title="Submit" />
            <Button onPress={handleReset} title="Cancel" />
          </View>
        )}
      </Formik>

      {isPasswordGenerated ? (
        <View>
          <Text
            style={{
              fontSize: 30,
              textAlign: 'center',
              color: 'black',
              fontWeight: 'bold',
              marginTop: 40,
            }}>
            {password}
          </Text>
        </View>
      ) : null}
    </View>
  );
};
export default Home;
