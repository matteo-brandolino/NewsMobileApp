import React, { useContext } from 'react'
import { ActivityIndicator, StyleSheet, View } from "react-native";
import LayoutNews from './MyTabView/LayoutNews'
import {GlobalContext} from '../context/GlobalState';

export default function Search() {

    const { query, loading } = useContext(GlobalContext);
    
    return (
        <>
            {
                loading ?
                    <View style={[styles.container, styles.horizontal]}>
                        <ActivityIndicator size="large" color="#AA0000" />
                    </View>
                    : 
                    <LayoutNews 
                        url='https://newsapi.org/v2/everything' 
                        params={{
                            q:query,
                            pageSize: 8
                        }} 
                    />
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
    }
  });
