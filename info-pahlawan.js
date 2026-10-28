import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import Header from './header';
import Rating from './rating';
import KomentarModal from './komentar-modal';

export default function InfoPahlawan({ data, tipe = 'superhero' }) {
  const [detil, setDetil] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePressInfo = () => {
    setDetil(!detil);
  };

  const handlePressKomen = () => {
    setModalVisible(true);
  };

  const tampilanDetil = detil ? (
    <View style={styles.detilCard}>
      <View style={styles.detilHeader}>
        <Text style={styles.detilTitle}>{tipe === 'superhero' ? 'Tentang Pahlawan' : 'Tentang Villain'}</Text>
        <View style={styles.detilPill}>
          <Text style={styles.detilPillText}>{tipe === 'superhero' ? 'Hero' : 'Villain'}</Text>
        </View>
      </View>
      <Text style={styles.detilText}>{data.detil}</Text>
    </View>
  ) : null;

  return (
    <ImageBackground style={styles.container} source={data.gambar} imageStyle={styles.bgImage}>
      <KomentarModal vis={modalVisible} setVisible={setModalVisible} />
      <Header teks={tipe === 'superhero' ? 'HEROES' : 'VILLAINS'} />
      <LinearGradient
        colors={
          tipe === 'villain'
            ? ['rgba(12,0,24,0)', 'rgba(12,0,24,0.4)', 'rgba(12,0,24,0.92)']
            : ['rgba(12,12,12,0)', 'rgba(12,12,12,0.38)', 'rgba(12,12,12,0.94)']
        }
        locations={[0, 0.48, 1]}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={styles.info}>
        <View style={styles.lokasi}>
          <View style={styles.titleWrap}>
            <Text style={styles.lokasiKeterangan}>{data.keteranganSingkat}</Text>
            <Text style={styles.lokasiTeks} numberOfLines={2}>
              {data.judul}
            </Text>
          </View>
          <View style={styles.ratingWrapper}>
            <Rating jumlah={data.rating} warna="#fff" ukuran={16} />
            <Text style={styles.ratingText}>{data.rating}.0</Text>
          </View>
        </View>
        {tampilanDetil}
        <View style={styles.menuContext}>
          <TouchableOpacity
            style={[styles.actionButton, detil && styles.actionButtonActive]}
            onPress={handlePressInfo}
            activeOpacity={0.9}
          >
            <Ionicons name={detil ? 'information-circle' : 'information-circle-outline'} size={20} color="#fff" />
            <Text style={styles.actionText}>Info</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={handlePressKomen} activeOpacity={0.9}>
            <Ionicons name="chatbubble-ellipses-outline" size={20} color="#fff" />
            <Text style={styles.actionText}>Komentar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    height: '100%',
  },
  bgImage: {
    resizeMode: 'cover',
  },
  info: {
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    paddingBottom: 24,
    zIndex: 2,
  },
  lokasi: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 18,
    gap: 18,
  },
  titleWrap: {
    flex: 1,
  },
  lokasiKeterangan: {
    color: 'rgba(255,255,255,0.8)',
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontSize: 9,
    fontFamily: 'Inter-SemiBold',
    includeFontPadding: false,
  },
  lokasiTeks: {
    color: 'white',
    fontSize: 32,
    fontFamily: 'Inter-ExtraBold',
    marginTop: 6,
    letterSpacing: -0.6,
    includeFontPadding: false,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(15,15,15,0.38)',
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.34)',
  },
  ratingText: {
    color: '#fff',
    fontFamily: 'Inter-SemiBold',
    fontSize: 11,
    includeFontPadding: false,
  },
  detilCard: {
    backgroundColor: 'rgba(12,12,12,0.76)',
    borderRadius: 22,
    paddingHorizontal: 22,
    paddingVertical: 18,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.18)',
    gap: 10,
  },
  detilHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detilTitle: {
    color: '#fff',
    fontFamily: 'Inter-Bold',
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontSize: 9,
    includeFontPadding: false,
  },
  detilPill: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.16)',
  },
  detilPillText: {
    color: '#fff',
    fontSize: 10,
    fontFamily: 'Inter-SemiBold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    includeFontPadding: false,
  },
  detilText: {
    color: 'rgba(255,255,255,0.92)',
    fontFamily: 'Inter-Medium',
    fontSize: 13,
    includeFontPadding: false,
  },
  menuContext: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 999,
    backgroundColor: 'rgba(15,15,15,0.42)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.38)',
  },
  actionButtonActive: {
    backgroundColor: 'rgba(255,255,255,0.26)',
  },
  actionText: {
    color: '#fff',
    fontFamily: 'Inter-SemiBold',
    fontSize: 12,
    includeFontPadding: false,
  },
});
