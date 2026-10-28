import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Rating({ jumlah, warna = 'white', ukuran = 14 }) {
  const deret = [1, 2, 3, 4, 5];
  const iconRating = deret.map((h) => {
    if (h <= jumlah) {
      return <AntDesign key={h} name="star" color={warna} size={ukuran} />;
    } else {
      return <AntDesign key={h} name="staro" color={warna} size={ukuran} />;
    }
  });

  return <View style={styles.rating}>{iconRating}</View>;
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    gap: 4,
  },
});
