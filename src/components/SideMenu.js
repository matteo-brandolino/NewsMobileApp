import React, { useState } from 'react';
import {ScrollView, Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import { ListItem } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

const urlList = [
    {
      name: 'Home',
      
    },
    {
      name: 'About',
      
    }
  ]

export default function SideMenu({navigation}) {

    return (
        <View style={styles.container}>
        <ScrollView >
            {
                urlList.map((l, i) => (
                <ListItem
                    activeOpacity={0.5}
                    underlayColor={'#AA0000'}
                    containerStyle={{backgroundColor:'#181818'}} 
                    key={i} 
                    bottomDivider
                    onPress={()=> navigation.navigate(l.name)}
                >
                    <ListItem.Content >
                    <ListItem.Title style={styles.text}>{l.name}</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
                ))
            }
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text style={styles.textContainer}>News API</Text>
        </View>
      </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 0,
        flex: 1,
        backgroundColor: '#181818',

    },
    text: {
        fontSize: 18,
        fontFamily: 'Nunito-regular',
        color:'white'
    },
    textContainer: {
        fontSize: 18,
        fontFamily: 'Nunito-regular',
        color:'black'
    },
    footerContainer: {
        padding: 20,
        backgroundColor: 'lightgrey',
    }
})