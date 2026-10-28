import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Rating from './rating';

export default function ItemPahlawan({ nama, keterangan, gambar, bintang, tipe = 'superhero' }) {
  const accentColor = tipe === 'villain' ? '#7c3aed' : '#111111';

  return (
    <View style={styles.item}>
      <View style={styles.thumbWrapper}>
        <Image style={styles.thumb} source={gambar} />
      </View>
      <View style={styles.barisTeks}>
        <Text style={styles.barisNama} numberOfLines={1}>
          {nama}
        </Text>
        <Text style={styles.barisKeterangan} numberOfLines={1}>
          {keterangan}
        </Text>
        <View style={styles.metaRow}>
          <Rating jumlah={bintang} warna={accentColor} ukuran={12} />
          <Text style={[styles.scoreText, { color: accentColor }]}>{bintang}.0</Text>
        </View>
      </View>
      <View style={styles.chevron}>
        <Ionicons name="chevron-forward" size={18} color="#9b9ba3" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 11,
    borderWidth: 1,
    borderColor: '#f4f4f7',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.015,
    shadowRadius: 16,
    elevation: 1,
  },
  thumbWrapper: {
    borderRadius: 14,
    overflow: 'hidden',
  },
  thumb: {
    width: 64,
    height: 92,
  },
  barisTeks: {
    marginLeft: 16,
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    gap: 4,
  },
  barisNama: {
    color: '#151515',
    fontFamily: 'Inter-Bold',
    fontSize: 15,
    letterSpacing: -0.2,
    includeFontPadding: false,
  },
  barisKeterangan: {
    color: '#8e8e93',
    fontSize: 9,
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontFamily: 'Inter-SemiBold',
    includeFontPadding: false,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 6,
  },
  scoreText: {
    fontSize: 11,
    fontFamily: 'Inter-SemiBold',
    includeFontPadding: false,
  },
  chevron: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f8fb',
  },
});
