import React from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Text style={styles.greeting}>Hey Suraj,</Text>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
          style={styles.profileIcon}
        />
      </View>
      <Text style={styles.subtitle}>What would you like to do?</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        placeholderTextColor="#A0A0A0"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#fff',
  },
  subtitle: {
    color: '#B0B0B0',
    fontSize: 16,
    marginTop: 4,
    marginBottom: 16,
  },
  searchBar: {
    backgroundColor: '#23244A',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
    color: '#fff',
    fontSize: 16,
  },
});

export default Header; 