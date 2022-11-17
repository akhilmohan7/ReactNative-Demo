/**
 * File: Login.tsx
 * -----
 * Created Date: Thursday November 17th 2022
 * Author: Akhil Mohan
 * -----
 * Last Modified: Fri Nov 18 2022
 * Modified By: Akhil Mohan
 * @packageDocumentation
 */

import produce from 'immer';
import React, { useState } from 'react'
import { ToastAndroid } from 'react-native';
import axios, { loginURL } from '../../axios';
import FormLogin from '../../components/FormLogin/FormLogin'

export default function Login( props: any ) {

    const [form, setForm] = useState({
        username: {
            elementType: 'input',
            elementConfig: {
              help: '',
              type: 'text',
              disabled: false,
              placeholder: 'Username',
              warning: 'Enter the username',
            },
            value: '',
            validation: {
              required: true,
            },
            valid: true,
            touched: false,
        },    
        password: {
            elementType: 'input',
            elementConfig: {
              help: '',
              type: 'password',
              disabled: true,
              placeholder: 'Password',
              warning: 'Enter the password',
            },
            value: '',
            validation: {
              required: true,
            },
            valid: false,
            touched: false,
          },
    });

    const inputChangeHandler = (event: any, controlName: string) => {
        
        let updatedForm: any = null;
        updatedForm = produce(form, (formControl: any) => {

            formControl[controlName].value = event.nativeEvent.text;
        });
    
        setForm(updatedForm);
    };

    let onBtnHandler = () => {

        if( form.username.value !== '' && form.password.value !== '' ){

            let dataLogin: any = new FormData();

            dataLogin.append('lang_id', 'en');
            dataLogin.append('device_token', 'sss');
            dataLogin.append('email', form.username.value);
            dataLogin.append('password', form.password.value);

            let formObj = {
                url: loginURL,
                method: 'post',
                data: dataLogin,
                headers: { "Content-Type": "multipart/form-data" }                
            }

            axios(formObj)
                .then(function (response) {
                    
                    ToastAndroid.show(response.data.message, ToastAndroid.SHORT);

                    props.navigation.navigate('Tab')
                })
                .catch(function (error) {
                    console.log('error----------', error);
                    ToastAndroid.show('Error', ToastAndroid.SHORT);
                });
        }
        else{
            
            ToastAndroid.show('Enter username and password', ToastAndroid.SHORT);
        }
    }

    let onSkipHandler = () =>{

        props.navigation.navigate('Tab')
    }

    return (
        <FormLogin 
            form={form}   
            onBtnHandler={onBtnHandler} 
            onSkipHandler={onSkipHandler}
            inputChangeHandler={inputChangeHandler}    
        />
    )  
}