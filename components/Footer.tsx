import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';

const navItems = [
  { label: 'Home' },
  { label: 'Policies' },
  { label: 'Claims' },
  { label: 'Profile' },
];

interface FooterProps {
  enhanced?: boolean;
}

const Footer: React.FC<FooterProps> = ({ enhanced }) => (
  <View style={[styles.footer, enhanced && styles.footerEnhanced]}>
    {navItems.map((item) => (
      <TouchableOpacity
        key={item.label}
        style={[styles.navItem, item.label === 'Policies' && styles.activeTab, enhanced && styles.enhancedNavItem]}
        activeOpacity={0.7}
      >
        <Text style={[styles.navText, item.label === 'Policies' && styles.activeText, enhanced && styles.enhancedNavText]}>{item.label}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#002C5F',
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: '#E3EAF6',
    shadowColor: '#002C5F',
    shadowOpacity: 0.10,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: -3 },
    elevation: 3,
  },
  footerEnhanced: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: Platform.OS === 'ios' ? 32 : 16,
    borderRadius: 30,
    backgroundColor: '#002C5F',
    paddingVertical: 18,
    paddingHorizontal: 8,
    shadowColor: '#002C5F',
    shadowOpacity: 0.18,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: -6 },
    elevation: 8,
    borderTopWidth: 0,
    zIndex: 100,
  },
  navItem: {
    alignItems: 'center',
    flex: 1,
    paddingVertical: 2,
  },
  enhancedNavItem: {
    marginHorizontal: 6,
    borderRadius: 18,
    paddingVertical: 6,
    backgroundColor: 'transparent',
  },
  navText: {
    color: '#fff',
    fontSize: 15,
    marginTop: 2,
  },
  enhancedNavText: {
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
  activeTab: {
    borderTopWidth: 3,
    borderTopColor: '#FF6F61',
    backgroundColor: 'rgba(255,111,97,0.08)',
  },
  activeText: {
    color: '#FF6F61',
    fontWeight: 'bold',
  },
});

export default Footer; 