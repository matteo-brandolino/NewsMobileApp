import React, { memo } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import { Card } from 'react-native-elements'
import moment from 'moment'

function CommonCard({ title, img, url, publishedAt, source }) {
    const onPress = () => {
        Linking.openURL(url)
    }
    return (
        <TouchableOpacity onPress={onPress}>
            <Card containerStyle={styles.container}>
                <View style={styles.viewContainer}>
                    <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={{ uri: img }}
                    />
                    <View style={styles.subViewContainer}>
                        <Text style={styles.text}>{title}</Text>
                        <Text style={styles.subText}>
                            {moment(publishedAt).startOf('hour').fromNow()} | { source }
                        </Text>
                    </View>
                </View>
            </Card>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container : {
        paddingVertical: 20, 
        paddingHorizontal: 15, 
        borderWidth: 2, 
        elevation: 3,
    },
    viewContainer: {
        flexDirection:'row',
    }, 
    subViewContainer: {
        marginHorizontal: 10,
        flexShrink:1,
    },   
    button: {
        borderRadius: 30, 
        marginLeft: 'auto', 
        marginRight: 'auto', 
        marginBottom: 0, 
        width:'50%', 
        backgroundColor: '#AA0000'
    },
    image: {
        width: '40%',
        height: '100%' 
    },
    text: {
        marginVertical: 15,
        fontSize: 16,
        fontFamily: 'Nunito-Bold'
    },
    subText: {
        fontSize: 14
    },
});

export default memo(CommonCard)
