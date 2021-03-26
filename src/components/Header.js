import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';

function Header() {
    
    const navigation = useNavigation();

    const openMenu = () => {
       navigation.openDrawer()
    }
    return (
        <>
        <StatusBar backgroundColor='#7C0A02' />
        <View style={styles.header}>
            <MaterialIcons name='menu' size={28} style={{...styles.icon, ...styles.menu}} onPress={() => openMenu()} />
            <View>
                <Text style={styles.headerText}>
                    <View style={styles.textContainer}>
                        <Text style={{...styles.headerText, ...styles.spanText}}>A</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={{...styles.headerText, ...styles.spanText}}>B</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={{...styles.headerText, ...styles.spanText}}>C</Text>
                    </View>
                    <View style={styles.marginText}>
                        <Text style={styles.headerText}>NEWS</Text>
                    </View>
                </Text>
            </View>
            <MaterialIcons name='search' size={28} 
                style={{...styles.icon, ...styles.search}}
                onPress={()=> navigation.navigate('Search')}
            />
            
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        color:'white',
    },
    headerText: {
        fontSize: 25,
        color:'#fff',
        letterSpacing: 2

    },
    spanText : {
        backgroundColor: 'white',
        color: '#AA0000',
        letterSpacing: 10,
    },
    textContainer: {
        paddingHorizontal: 2
    },
    marginText: {
        paddingLeft: 5
    },
    icon: {
        position: 'absolute',
        color:'white'
    },
    menu: {
        left:0
    },
    search: {
        right:0,
    }
})

export default Header
