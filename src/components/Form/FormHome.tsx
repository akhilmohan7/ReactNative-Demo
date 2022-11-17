/**
 * File: FormHome.tsx
 * -----
 * Created Date: Friday November 11th 2022
 * Author: Akhil Mohan
 * -----
 * Last Modified: Fri Nov 18 2022
 * Modified By: Akhil Mohan
 * @packageDocumentation
 */

import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CarouselBanner from 'react-native-banner-carousel-updated';
import { View, Text, StyleSheet, FlatList, Image, StatusBar } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function FormHome( props: any ) {

    const renderItem = ({ item }: any ) => (
        <View style={styles.containerCard}>
            <Image 
                style={styles.cardImage}
                source={{
                    uri: item.imageUrl,
                }}
            />
            <View style={styles.cardTitleContainer}>
                <Text style={styles.cardTitle}>{item.Shorttext}</Text>
                <View style={styles.cardTitleBtn}>
                    <FontAwesome name="angle-up" color={'#3BB0EC'} size={20} />
                </View>
            </View>
        </View>
    );

    let carouselJSX = () =>(
        //@ts-ignore
        <CarouselBanner loop autoplay index={0} autoplayTimeout={5000}>
            <Image 
                resizeMode="stretch"  
                style={ styles.carouselImg }  
                source={{
                    uri: 'http://proteinium.iroidtechnologies.in/meal_category_images/6165294da47e5.jpg',
                }}
            />
            <Image 
                resizeMode="stretch"  
                style={ styles.carouselImg }  
                source={{
                    uri: 'http://proteinium.iroidtechnologies.in/meal_category_images/616524c164afa.jpg',
                }}
            />
            <Image 
                resizeMode="stretch"  
                style={ styles.carouselImg }  
                source={{
                    uri: 'http://proteinium.iroidtechnologies.in/meal_category_images/61652942d9e4b.jpg',
                }}
            />
        </CarouselBanner>
    )
    
    return (
        <View style={ styles.container }>          
            <StatusBar 
                barStyle='light-content'
                backgroundColor='#3BB0EC'
            />
            <View style={ styles.containerHeader }>            
                <Text style={ styles.header }>iROID</Text>  
                <View style={ styles.containerBell }>     
                    <MaterialCommunityIcons name="bell" color={'white'} size={20} />   
                    <View style={ styles.bellDot }></View>
                </View>               
            </View> 
            
            <FlatList
                data={props.data}
                renderItem={renderItem}
                keyExtractor={item => item.Recipe}
                ListHeaderComponent={ carouselJSX }
            />
        </View>        
    )
}

const styles = StyleSheet.create({
    container: {
    },
    containerHeader:{
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#3BB0EC',
    },
    containerBell:{
        top: '50%',
        right: '10%',
        position: 'absolute',
    },
    bellDot:{        
        width: 8,
        height: 8,
        top: '5%',
        right: '5%',
        borderRadius: 8,
        position: 'absolute',
        backgroundColor: 'red'
    },
    header:{
        fontSize: 30,
        color: 'white'
    },
    containerCard:{
        margin: 10,
        borderRadius: 15,
        shadowColor: 'black',
    },
    cardTitleContainer:{
        bottom: 0,
        padding: 8,
        width: '100%',
        position: 'absolute',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor: '#00000089',
    },
    cardTitle:{
        color: 'white',
        fontWeight: 'bold'
    },
    cardTitleBtn:{
        width: 38,
        height: 38,
        right: '6%',
        elevation: 3,
        bottom: '-60%',
        borderRadius: 38,
        alignItems: 'center',
        position: 'absolute',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    cardImage:{
        height: 150,
        width: '100%',
        borderRadius: 15,
    },    
    carouselImg:{ 
        margin: 10,
        height: 220,
        width: '95%',
        marginBottom: 10,
        borderRadius: 25,
    }
});
