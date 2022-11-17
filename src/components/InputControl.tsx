/**
 * File: input.tsx
 * -----
 * Created Date: Wednesday August 18th 2021
 * Author: Vineetha
 * -----
 * Last Modified: Fri Nov 18 2022
 * Modified By: Akhil Mohan
 * @packageDocumentation
 */

import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export const InputControl = (props: any) => {

  let inputElement: any = null;

  switch (props.config.elementType) {
    case 'input':
      if (props.config.elementConfig.type === 'text') {
        inputElement = (
          <TextInput
            style={styles.input}
            value={props.config.value}
            placeholder={props.config.elementConfig.placeholder}
            onChange={(event) => props.onChange(event, props.name)}
          />
        );      
      } else if (props.config.elementConfig.type === 'password') {
        inputElement = (
          <TextInput
            secureTextEntry
            style={styles.input}
            textContentType='password'
            value={props.config.value}
            placeholder={props.config.elementConfig.placeholder}
            onChange={(event) => props.onChange(event, props.name)}
          />
        );
      } 
    break;

    default:
      inputElement = <input onChange={(event: any) => props.onChange(event, props.name)} />;
  }


  return (
    <View>
      {inputElement}
    </View>    
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 10,
    padding: 15,
    borderRadius: 35,
    paddingHorizontal: 35,
    backgroundColor: '#F2F2F2'
  },
});
