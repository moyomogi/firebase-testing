// Import and configure the Firebase SDK
import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging/sw';
import { getFirebaseConfig } from './firebase-config';

const firebaseApp = initializeApp(getFirebaseConfig());
getMessaging(firebaseApp);
// これは任意
// const analytics = getAnalytics(firebaseApp);
console.info('Firebase messaging service worker is set up');
