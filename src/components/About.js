import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const About = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Inventore explicabo aperiam ullam obcaecati error quis adipisci. 
                Delectus error ex similique officiis, ipsam itaque. 
                Itaque, quasi possimus! 
                Aperiam consequuntur non at, dicta labore numquam. 
                Beatae ipsum eius ullam ex laboriosam fugiat, 
                debitis magnam quam amet explicabo nulla harum voluptatum itaque facilis enim nam 
                suscipit quis fugit animi quasi sequi iusto. Nesciunt!    
            </Text>   
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:24,
    },
    text: {
        fontSize: 18

    }
})

export default About