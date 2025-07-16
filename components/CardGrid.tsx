import React from 'react';
import { View, StyleSheet } from 'react-native';

interface CardGridProps {
  children: React.ReactNode;
}

const CardGrid: React.FC<CardGridProps> = ({ children }) => {
  return <View style={styles.grid}>{children}</View>;
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 8,
    marginTop: 8,
  },
});

export default CardGrid; 