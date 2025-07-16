import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';

const icons = [
  require('../assets/logo.png'), // Home (placeholder)
  require('../assets/logo.png'), // Search (placeholder)
  require('../assets/logo.png'), // Center action (highlighted)
  require('../assets/logo.png'), // Notifications (placeholder)
  require('../assets/logo.png'), // Profile (placeholder)
];

const BottomNav = () => {
  return (
    <View style={styles.container}>
      {icons.map((icon, idx) => (
        <TouchableOpacity
          key={idx}
          style={[styles.iconButton, idx === 2 && styles.centerButton]}
          activeOpacity={0.7}
        >
          <Image source={icon} style={[styles.icon, idx === 2 && styles.centerIcon]} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#181A36',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    shadowColor: '#000',
    shadowOpacity: 0.10,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: -2 },
    elevation: 8,
  },
  iconButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 4,
  },
  icon: {
    width: 28,
    height: 28,
    opacity: 0.7,
  },
  centerButton: {
    backgroundColor: '#4B5AF7',
    borderRadius: 18,
    padding: 8,
    marginTop: -18,
    shadowColor: '#4B5AF7',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 10,
  },
  centerIcon: {
    width: 36,
    height: 36,
    opacity: 1,
  },
});

export default BottomNav; 