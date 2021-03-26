import React, { memo } from 'react'
import { StyleSheet, Text, TouchableOpacity, Linking } from 'react-native';
import { Card } from 'react-native-elements'
import moment from 'moment'

 function FirstCard({ title, img, url, publishedAt, source }) {
    const onPress = () => {
        Linking.openURL(url)
    }
    return (
        <TouchableOpacity onPress={onPress}>
            <Card containerStyle={{ paddingVertical: 20, paddingHorizontal: 15, borderWidth: 2, elevation: 3}}>
                <Card.Image source={{uri: img}} style={styles.image}  resizeMode='cover' />
                <Text style={styles.text}>
                    {title}
                </Text>
                <Text style={styles.subText}>
                    {moment(publishedAt).startOf('hour').fromNow()} | { source }
                </Text>
            </Card>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    
    button: {
        borderRadius: 30, 
        marginLeft: 'auto', 
        marginRight: 'auto', 
        marginBottom: 0, 
        width:'50%', 
        backgroundColor: '#AA0000'
    },
    image: {
        width: '100%', 
        height: 200
    },
    subText: {
        fontSize: 16
    },
    text: {
        marginVertical: 15,
        fontSize: 20,
        fontFamily: 'Nunito-Bold'
    }
});

export default memo(FirstCard)
