import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ViewStyle } from 'react-native';

interface CardProps {
  icon: any; // Accepts a local require or remote URI
  label: string;
  onPress?: () => void;
  style?: ViewStyle;
  badge?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ icon, label, onPress, style, badge }) => {
  return (
    <TouchableOpacity style={[styles.card, style]} onPress={onPress} activeOpacity={0.85}>
      <View style={styles.iconContainer}>
        {typeof icon === 'string' ? (
          <Image source={{ uri: icon }} style={styles.icon} />
        ) : (
          <Image source={icon} style={styles.icon} />
        )}
        {badge && <View style={styles.badge}>{badge}</View>}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#23244A',
    borderRadius: 18,
    paddingVertical: 22,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 6,
    minWidth: 100,
    minHeight: 110,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  iconContainer: {
    position: 'relative',
    marginBottom: 10,
  },
  icon: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
  },
  badge: {
    position: 'absolute',
    top: -6,
    right: -6,
  },
  label: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 2,
  },
});

export default Card; 