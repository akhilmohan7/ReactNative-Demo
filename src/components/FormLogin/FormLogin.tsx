/**
 * File: FormLogin.tsx
 * -----
 * Created Date: Thursday November 17th 2022
 * Author: Akhil Mohan
 * -----
 * Last Modified: Fri Nov 18 2022
 * Modified By: Akhil Mohan
 * @packageDocumentation
 */

import React from 'react'
import { InputControl } from '../InputControl';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView } from 'react-native'

export default function FormLogin(  props: any) {

    let formElementArray: any[] = [];

    for (let [key, value] of Object.entries(props.form)) {
        formElementArray.push({ name: key, config: value });
    }

    let formControlsJSX = formElementArray.map((item: any) => {
        return <InputControl 
                    key={item.name} 
                    name={item.name} 
                    config={item.config} 
                    onChange={props.inputChangeHandler} 
                />;
    });

    return (
        <SafeAreaView style={styles.container}>  
            <TouchableOpacity style={styles.skip} onPress={props.onSkipHandler}>
                <Text style={styles.skipTxt}>Skip</Text>
            </TouchableOpacity>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Sign In</Text>
                <Text style={styles.subTitle}>Enter Your Details</Text>
            </View>
            <View style={styles.form}>
                {formControlsJSX.slice(0, 1)}
                {formControlsJSX.slice(1, 2)}
            </View>
            <TouchableOpacity style={styles.button} onPress={props.onBtnHandler}>
                <Text style={styles.buttonTxt}>Sign In</Text>
            </TouchableOpacity>
            <View style={styles.containerFooter}>
                <Text style={styles.forgotTxt}>Forgot your password?</Text>
                <View style={styles.signupTxtContainer}>
                    <Text>Don't have an Account?</Text>
                    <Text style={styles.signupTxt}>Sign Up</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    form:{

    },    
    skip:{
        top: '2%',
        right: '10%',
        position: 'absolute'
    },
    skipTxt:{
        fontWeight: 'bold',
    },
    containerTitle:{
        margin: 10,
        alignItems: 'center'
    },
    title:{
        margin: 10,
        fontSize: 30,
        fontWeight: 'bold'
    },
    subTitle:{
        margin: 10,
        fontSize: 15,
    },
    button:{
        margin: 10,
        padding: 15,
        borderRadius: 35,
        alignItems: 'center',
        backgroundColor: '#3BB0EC'
    },
    buttonTxt:{
        color: 'white'
    },
    containerFooter:{
        alignItems: 'center'
    },
    forgotTxt:{
        margin: 15,
        fontWeight: 'bold'
    },
    signupTxtContainer:{
        flexDirection: 'row'
    },
    signupTxt:{
        marginLeft: 5,
        color: '#5DA7A3'
    }
  });
  