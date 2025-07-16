/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, StatusBar, Dimensions } from 'react-native';
import Header from './components/Header';
import CardGrid from './components/CardGrid';
import Card from './components/Card';
import BottomNav from './components/BottomNav';

const { height } = Dimensions.get('window');

const cards = [
  { label: 'Relationship Builder', icon: require('./assets/logo.png') },
  { label: 'Session Cards', icon: require('./assets/logo.png') },
  { label: 'Relationship Board', icon: require('./assets/logo.png') },
  { label: 'Question Cards', icon: require('./assets/logo.png') },
  { label: 'Relationship Wheel', icon: require('./assets/logo.png') },
  { label: 'Recommendations', icon: require('./assets/logo.png') },
  { label: 'Messenger', icon: require('./assets/logo.png') },
  { label: 'AI Relationship Coach', icon: require('./assets/logo.png') },
  { label: 'Save Journal', icon: require('./assets/logo.png') },
  { label: 'Saved Journal', icon: require('./assets/logo.png') },
  { label: 'My Sanctuary', icon: require('./assets/logo.png') },
  { label: 'More', icon: require('./assets/logo.png') },
];

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#181A36" />
      <View style={styles.background}>
        <Header />
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <CardGrid>
            {cards.map((card, idx) => (
              <Card key={idx} icon={card.icon} label={card.label} />
            ))}
          </CardGrid>
        </ScrollView>
        <BottomNav />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#181A36',
  },
  background: {
    flex: 1,
    backgroundColor: '#181A36',
  },
  scrollContent: {
    paddingBottom: 90,
    paddingTop: 8,
    minHeight: height * 0.8,
  },
});

export default App;
