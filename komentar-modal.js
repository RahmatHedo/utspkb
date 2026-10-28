import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function KomentarModal({ vis, setVisible }) {
  const isVisible = vis === true;

  const [teksInput, setTeksInput] = useState('');
  const [dataKomentar, setDataKomentar] = useState([
    {
      id: 1,
      from: 'Peter',
      teks: 'Keren banget pahlawannya!',
    },
    {
      id: 2,
      from: 'Parker',
      teks: 'Aku pengen jadi kaya gini juga',
    },
  ]);

  const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}_${Math.floor(Math.random() * 1000)}`;
  };

  const addKomentar = () => {
    if (teksInput.trim() === '') return;
    setDataKomentar([
      ...dataKomentar,
      {
        id: generateKey('komen'),
        from: 'Pengunjung',
        teks: teksInput.trim(),
      },
    ]);
    setTeksInput('');
  };

  const daftarKomentar = dataKomentar.map((kom) => {
    return (
      <View key={kom.id} style={styles.itemKomentar}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{kom.from[0]}</Text>
        </View>
        <View style={styles.bubbleWrapper}>
          <View style={styles.bubbleHeader}>
            <Text style={styles.userKomentar}>{kom.from}</Text>
            <Text style={styles.timeText}>Baru saja</Text>
          </View>
          <View style={styles.bubble}>
            <Text style={styles.teksKomentar}>{kom.teks}</Text>
          </View>
        </View>
      </View>
    );
  });

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible} onRequestClose={() => setVisible(false)}>
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.backdrop} activeOpacity={1} onPress={() => setVisible(false)} />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.modalWrapper}
        >
          <View style={styles.main}>
            <View style={styles.handle} />
            <View style={styles.headerModal}>
              <View>
                <Text style={styles.headerModalTitle}>Komentar</Text>
                <Text style={styles.headerModalSub}>
                  {dataKomentar.length} {dataKomentar.length === 1 ? 'komentar' : 'komentar'}
                </Text>
              </View>
              <TouchableOpacity style={styles.closeBtn} onPress={() => setVisible(false)} activeOpacity={0.9}>
                <Ionicons name="close" size={18} color="#151515" />
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.listKomentar} showsVerticalScrollIndicator={false} contentContainerStyle={styles.listContent}>
              {daftarKomentar.length === 0 ? (
                <View style={styles.emptyState}>
                  <View style={styles.emptyIcon}>
                    <Ionicons name="chatbubbles-outline" size={22} color="#8e8e93" />
                  </View>
                  <Text style={styles.kosong}>Belum ada komentar</Text>
                  <Text style={styles.kosongSub}>Jadilah yang pertama untuk berbagi pendapat</Text>
                </View>
              ) : (
                daftarKomentar
              )}
            </ScrollView>

            <View style={styles.inputArea}>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  value={teksInput}
                  onChangeText={(teks) => setTeksInput(teks)}
                  placeholder="Tulis komentar..."
                  placeholderTextColor="#9b9ba3"
                  multiline
                />
              </View>
              <TouchableOpacity
                style={[styles.tombolTambah, teksInput.trim() === '' && styles.tombolTambahDisabled]}
                onPress={addKomentar}
                disabled={teksInput.trim() === ''}
                activeOpacity={0.9}
              >
                <Ionicons name="arrow-up" size={18} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(15,15,15,0.5)',
  },
  modalWrapper: {
    width: '100%',
  },
  main: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    overflow: 'hidden',
    maxHeight: '88%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -18 },
    shadowOpacity: 0.12,
    shadowRadius: 30,
    elevation: 20,
  },
  handle: {
    alignSelf: 'center',
    width: 42,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#e5e5ea',
    marginTop: 10,
  },
  headerModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 18,
  },
  headerModalTitle: {
    color: '#151515',
    fontFamily: 'Inter-Bold',
    fontSize: 17,
    letterSpacing: -0.2,
    includeFontPadding: false,
  },
  headerModalSub: {
    color: '#8e8e93',
    marginTop: 2,
    fontSize: 11,
    fontFamily: 'Inter-Medium',
    includeFontPadding: false,
  },
  closeBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7f7f9',
  },
  listKomentar: {
    flexGrow: 0,
  },
  listContent: {
    paddingHorizontal: 24,
    paddingBottom: 18,
    gap: 18,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 36,
    gap: 10,
  },
  emptyIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7f7f9',
    marginBottom: 4,
  },
  kosong: {
    textAlign: 'center',
    color: '#151515',
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    includeFontPadding: false,
  },
  kosongSub: {
    textAlign: 'center',
    color: '#8e8e93',
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    includeFontPadding: false,
  },
  itemKomentar: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f2f2f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#6b6b6b',
    fontFamily: 'PlusJakartaSans-Bold',
    textTransform: 'uppercase',
  },
  bubbleWrapper: {
    flex: 1,
    gap: 8,
  },
  bubbleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userKomentar: {
    fontFamily: 'Inter-SemiBold',
    color: '#151515',
    includeFontPadding: false,
  },
  timeText: {
    color: '#9b9ba3',
    fontSize: 11,
    fontFamily: 'Inter-Medium',
    includeFontPadding: false,
  },
  bubble: {
    backgroundColor: '#f7f7f9',
    borderRadius: 18,
    borderTopLeftRadius: 6,
    paddingHorizontal: 18,
    paddingVertical: 14,
    alignSelf: 'flex-start',
    maxWidth: '92%',
  },
  teksKomentar: {
    color: '#2f2f2f',
    fontFamily: 'Inter-Medium',
    fontSize: 13,
    includeFontPadding: false,
  },
  inputArea: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderTopWidth: 1,
    borderTopColor: '#f2f2f7',
    paddingHorizontal: 18,
    paddingVertical: 12,
    gap: 10,
    backgroundColor: '#fff',
  },
  inputWrapper: {
    flex: 1,
    backgroundColor: '#f7f7f9',
    borderRadius: 999,
    paddingHorizontal: 18,
    paddingVertical: Platform.OS === 'ios' ? 10 : 8,
  },
  input: {
    minHeight: 38,
    maxHeight: 120,
    color: '#151515',
    fontFamily: 'Inter-Medium',
    fontSize: 13,
    includeFontPadding: false,
  },
  tombolTambah: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#151515',
  },
  tombolTambahDisabled: {
    backgroundColor: '#d8d8dc',
  },
});
