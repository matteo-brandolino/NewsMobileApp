import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, FlatList, StatusBar, SafeAreaView, RefreshControl } from 'react-native';
import axios from 'axios';
import { API_KEY } from '@env'
import FirstCard from './FirstCard';
import CommonCard from './CommonCard';

export default function LayoutNews( { url, params }) {
    const [data, setData] = useState()
    const [refreshing, setRefreshing] = useState(false)
    
    const getData = async () => {
      try {
        const response = await axios.get(
          url, 
          {
            params: {
              ...params, 
              apiKey: API_KEY
            }
          }
          );
          setData(response.data.articles);
        } catch (error) {
          // handle error
          console.log(error.message);
        }
      };
      
    const wait = (timeout) => {
      return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const onRefresh = useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    }, []);

    const renderItem = ({ item }) => {
      switch (true) {
        case data.indexOf(item) === 0:
          return <FirstCard 
                    key={data.indexOf(item)}  
                    title={item.title} 
                    img={item.urlToImage}
                    url={item.url} 
                    publishedAt={item.publishedAt} 
                    source={item.source.name} 
                  />
        default:
          return <CommonCard 
                    key={data.indexOf(item)} 
                    title={item.title} 
                    img={item.urlToImage}
                    url={item.url} 
                    publishedAt={item.publishedAt} 
                    source={item.source.name} 
                  />
      }
    }

    useEffect(() => {
      getData()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, idx) => idx}
          onEndReachedThreshold={0.5}
          removeClippedSubviews={true}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        />
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      marginBottom: 30
    }
  });

