import { registerRootComponent } from 'expo';

// Pilih versi aplikasi yang ingin ditampilkan (aktifkan salah satu):
// - wisataku, Praktek 1-1 s.d. 1-6
import App from './App';
// - Tugas Akhir Modul 1, tema Superhero
// import App from './src/TugasModul1';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
