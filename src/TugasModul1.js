import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import InfoPahlawan from '../info-pahlawan';
import ItemPahlawan from '../item-pahlawan';

const dataSuperhero = [
  {
    id: 0,
    judul: 'Captain Avenger',
    keteranganSingkat: 'Super Soldier',
    gambar: require('../assets/img/superhero-1.png'),
    rating: 5,
    detil:
      'Captain Avenger adalah simbol keberanian dan keadilan. Dengan kekuatan dan strategi yang luar biasa, ia selalu berdiri di garis depan melindungi dunia.',
  },
  {
    id: 1,
    judul: 'Hulk',
    keteranganSingkat: 'Rage Incarnate',
    gambar: require('../assets/img/superhero-2.png'),
    rating: 5,
    detil:
      'Hulk adalah wujud amarah yang tak terkendali, namun di balik kekuatannya yang menghancurkan, tersimpan hati yang ingin melindungi yang lemah.',
  },
  {
    id: 2,
    judul: 'Spiderman',
    keteranganSingkat: 'Friendly Neighborhood',
    gambar: require('../assets/img/superhero-3.png'),
    rating: 5,
    detil:
      'Spiderman adalah pahlawan dari jalanan. Dengan lengan laba-laba dan rasa tanggung jawab yang besar, ia menjaga lingkungannya dari kejahatan.',
  },
  {
    id: 3,
    judul: 'Antman',
    keteranganSingkat: 'Size Matters',
    gambar: require('../assets/img/superhero-4.png'),
    rating: 4,
    detil:
      'Antman bisa menyusut dan membesar sesuka hati. Cerdas, humoris, dan selalu siap membantu dengan cara yang tak terduga.',
  },
  {
    id: 4,
    judul: 'Ironman',
    keteranganSingkat: 'Genius Billionaire',
    gambar: require('../assets/img/superhero-5.png'),
    rating: 5,
    detil:
      'Ironman adalah jenius di balik baju besi canggihnya. Kombinasi teknologi, keberanian, dan tekad membuatnya salah satu pahlawan terkuat.',
  },
  {
    id: 5,
    judul: 'Batman',
    keteranganSingkat: 'Dark Knight',
    gambar: require('../assets/img/superhero-6.png'),
    rating: 5,
    detil:
      'Batman melindungi Gotham dengan kecerdasan, pelatihan, dan tekad tanpa henti. Tanpa kekuatan super, ia menjadi simbol ketakutan bagi penjahat.',
  },
  {
    id: 6,
    judul: 'Superman',
    keteranganSingkat: 'Man of Steel',
    gambar: require('../assets/img/superhero-7.png'),
    rating: 5,
    detil:
      'Superman adalah harapan bagi umat manusia. Dengan kekuatan luar biasa, ia selalu memilih untuk melindungi dan menolong siapa pun yang membutuhkan.',
  },
  {
    id: 7,
    judul: 'Dr Strange',
    keteranganSingkat: 'Sorcerer Supreme',
    gambar: require('../assets/img/superhero-8.png'),
    rating: 5,
    detil:
      'Dr Strange menguasai seni mistik untuk melindungi realita dari ancaman dimensi lain. Bijaksana, berani, dan siap berkorban demi keseimbangan dunia.',
  },
  {
    id: 8,
    judul: 'Thor',
    keteranganSingkat: 'God of Thunder',
    gambar: require('../assets/img/superhero-9.png'),
    rating: 5,
    detil:
      'Thor, Dewa Petir Asgard, membawa Mjolnir untuk melindungi baik bumi maupun Asgard. Pahlawan pemberani dengan hati yang mulia.',
  },
];

const dataVillain = [
  {
    id: 0,
    judul: 'Villain One',
    keteranganSingkat: 'Mastermind',
    gambar: require('../assets/img/villain-1.png'),
    rating: 4,
    detil:
      'Sosok licik yang selalu merencanakan kejahatannya dengan cermat. Kecerdasannya kerap membuat para pahlawan kewalahan.',
  },
  {
    id: 1,
    judul: 'Villain Two',
    keteranganSingkat: 'Brute Force',
    gambar: require('../assets/img/villain-2.png'),
    rating: 4,
    detil:
      'Kekuatan fisik yang luar biasa menjadi senjata utamanya. Tak kenal takut dan siap menghancurkan apapun yang menghalanginya.',
  },
  {
    id: 2,
    judul: 'Villain Three',
    keteranganSingkat: 'Shadow Threat',
    gambar: require('../assets/img/villain-3.png'),
    rating: 4,
    detil:
      'Bergerak dalam kegelapan, menyebarkan teror tanpa diketahui keberadaannya. Sangat berbahaya saat menyerang secara tiba-tiba.',
  },
  {
    id: 3,
    judul: 'Villain Four',
    keteranganSingkat: 'Dark Sorcerer',
    gambar: require('../assets/img/villain-4.png'),
    rating: 5,
    detil:
      'Menguasai ilmu hitam untuk menciptakan kekacauan. Ambisinya adalah menguasai dunia dengan kekuatan kegelapan.',
  },
  {
    id: 4,
    judul: 'Villain Five',
    keteranganSingkat: 'Tech Overlord',
    gambar: require('../assets/img/villain-5.png'),
    rating: 4,
    detil:
      'Genius jahat dengan persenjataan teknologi canggih. Menggunakan kecerdasannya untuk menciptakan mesin-mesin pembunuh.',
  },
  {
    id: 5,
    judul: 'Villain Six',
    keteranganSingkat: 'Rogue Warrior',
    gambar: require('../assets/img/villain-6.png'),
    rating: 4,
    detil:
      'Pejuang buas yang haus kekuasaan. Tak segan menghancurkan siapa pun demi mencapai tujuannya.',
  },
];

export default function TugasModul1() {
  const [tipe, setTipe] = useState('superhero');
  const [terpilih, setTerpilih] = useState(0);

  const dataAktif = tipe === 'superhero' ? dataSuperhero : dataVillain;
  const isVillain = tipe === 'villain';
  const countLain = dataAktif.length - 1;

  const ubahData = (t) => {
    setTipe(t);
    setTerpilih(0);
  };

  const ubahTerpilih = (w) => {
    setTerpilih(w);
  };

  const daftarLain = dataAktif.map((item) => {
    if (item.id !== terpilih) {
      return (
        <TouchableOpacity key={item.id} onPress={() => ubahTerpilih(item.id)} activeOpacity={0.9}>
          <ItemPahlawan
            nama={item.judul}
            keterangan={item.keteranganSingkat}
            gambar={item.gambar}
            bintang={item.rating}
            tipe={tipe}
          />
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.bagAtas}>
        <InfoPahlawan data={dataAktif[terpilih]} tipe={tipe} />
      </View>
      <View style={styles.bagBawah}>
        <View style={styles.tabWrapper}>
          <TouchableOpacity
            style={[styles.tabBtn, !isVillain && styles.tabBtnActive]}
            onPress={() => ubahData('superhero')}
            activeOpacity={0.9}
          >
            <Ionicons name="shield-checkmark-outline" size={16} color={!isVillain ? '#fff' : '#6f6f6f'} style={styles.tabIcon} />
            <Text style={[styles.tabText, !isVillain && styles.tabTextActive]}>HEROES</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabBtn, isVillain && styles.tabBtnActiveVillain]}
            onPress={() => ubahData('villain')}
            activeOpacity={0.9}
          >
            <Ionicons name="skull-outline" size={16} color={isVillain ? '#fff' : '#6f6f6f'} style={styles.tabIcon} />
            <Text style={[styles.tabText, isVillain && styles.tabTextActive]}>VILLAINS</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.headerList}>
          <View>
            <Text style={styles.teksDaftarSub}>
              {isVillain ? 'Antagonis Pilihan' : 'Karakter Pilihan'}
            </Text>
            <Text style={styles.teksDaftar}>LAINNYA</Text>
          </View>
          <View style={[styles.pillCount, isVillain && styles.pillCountVillain]}>
            <Text style={[styles.countText, isVillain && styles.countTextVillain]}>{countLain} Karakter</Text>
          </View>
        </View>
        <ScrollView style={styles.daftarScroll} showsVerticalScrollIndicator={false} contentContainerStyle={styles.daftarContent}>
          {daftarLain}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8fa',
  },
  bagAtas: {
    flex: 6.2,
  },
  bagBawah: {
    flex: 3.8,
    paddingHorizontal: 22,
    paddingTop: 16,
  },
  tabWrapper: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f8',
    borderRadius: 999,
    padding: 3,
    marginBottom: 16,
    gap: 4,
    alignSelf: 'center',
    width: '100%',
  },
  tabBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 9,
    borderRadius: 999,
  },
  tabBtnActive: {
    backgroundColor: '#151515',
  },
  tabBtnActiveVillain: {
    backgroundColor: '#151515',
  },
  tabIcon: {
    marginTop: -1,
  },
  tabText: {
    color: '#6f6f6f',
    fontFamily: 'Inter-Bold',
    letterSpacing: 3,
    fontSize: 9,
    includeFontPadding: false,
  },
  tabTextActive: {
    color: '#fff',
  },
  headerList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  teksDaftarSub: {
    color: '#8e8e93',
    fontSize: 9,
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontFamily: 'Inter-SemiBold',
    includeFontPadding: false,
  },
  teksDaftar: {
    color: '#151515',
    fontFamily: 'Inter-ExtraBold',
    letterSpacing: 3,
    marginTop: 3,
    fontSize: 10,
    includeFontPadding: false,
  },
  pillCount: {
    backgroundColor: '#f0f0f4',
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 999,
  },
  pillCountVillain: {
    backgroundColor: '#f5f3ff',
  },
  countText: {
    color: '#151515',
    fontFamily: 'Inter-SemiBold',
    fontSize: 11,
    includeFontPadding: false,
  },
  countTextVillain: {
    color: '#6d28d9',
  },
  daftarScroll: {
    flex: 1,
  },
  daftarContent: {
    paddingBottom: 10,
  },
});
