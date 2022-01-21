/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyDm8I6rw7IzOzgEe5XaEP1_nSg51p8n98U",
  authDomain: "randomneon.firebaseapp.com",
  projectId: "randomneon",
  storageBucket: "randomneon.appspot.com",
  messagingSenderId: "728790464890",
  appId: "1:728790464890:web:5e860141e84f87243d3ec3",
  measurementId: "G-LWFC277NPM"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
