import { register } from 'register-service-worker';
import notify from './utils/notify';

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.PUBLIC_URL}service-worker.js`, {
    ready() {
      console.log(
        'App is being served from cache by a service worker.\n' +
          'For more details, visit https://goo.gl/AFskqB'
      );
    },
    cached() {
      console.log('Content has been cached for offline use.');
    },
    updated() {
      notify({
        description: 'Versi baru app ini kini tersedia. Sila tutup tab ini dan buka semua app.'
      });
      console.log('New content is available; please refresh.');
    },
    offline() {
      notify({
        description: 'Tiada sambungan internet. App berjalan dalam mod offline.'
      });
      console.log('No internet connection found. App is running in offline mode.');
    },
    error(error) {
      console.error('Error during service worker registration:', error);
    }
  });
}
