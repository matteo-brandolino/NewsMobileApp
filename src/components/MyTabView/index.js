import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import LayoutNews from './LayoutNews/index';

export default function MyTabView() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Top News' },
    { key: 'second', title: 'Latest News' },
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      style={{ backgroundColor: '#AA0000'}}
      renderLabel={({ route,color }) => (
        <Text style={{ color, fontSize: 18 }}>
          {route.title}
        </Text>
      )}
    />
  );
  
  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <LayoutNews 
                  url='https://newsapi.org/v2/top-headlines' 
                  params={{country: 'us', pageSize: 12}} 
                />;
      case 'second':
        return <LayoutNews 
                  url='https://newsapi.org/v2/everything' 
                  params={{
                    q:'*',
                    from: new Date(new Date().getTime() - 180*60000).toISOString(),
                    to: new Date().toISOString(),}} 
                />
      default:
        return null;
    }
  };

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  container: {
    fontSize: 30
  }
});