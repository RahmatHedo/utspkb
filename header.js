import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header({ teks }) {
  return (
    <View style={styles.header}>
      <View style={styles.badge}>
        <Text style={styles.headerTeks}>{teks}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingTop: 54,
    paddingHorizontal: 20,
  },
  badge: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: 'rgba(15,15,15,0.4)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.32)',
  },
  headerTeks: {
    color: 'white',
    fontFamily: 'Inter-ExtraBold',
    letterSpacing: 4,
    fontSize: 9,
    textTransform: 'uppercase',
    includeFontPadding: false,
  },
});
