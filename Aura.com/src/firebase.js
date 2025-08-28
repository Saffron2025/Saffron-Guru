// src/firebase.js
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

// ✅ Firebase config (from your Firebase console)
const firebaseConfig = {
  apiKey: "AIzaSyBNLDA0VPn5MawlQ3sBc6QzuRaOtCrfaoI",
  authDomain: "saffron-guru.firebaseapp.com",
  projectId: "saffron-guru",
  storageBucket: "saffron-guru.appspot.com",
  messagingSenderId: "513374378031",
  appId: "1:513374378031:web:68ad0d2705450e247c4eda",
  measurementId: "G-LN8DVSVKQR"
};

// ✅ Initialize Firebase app
const app = initializeApp(firebaseConfig);

// ✅ Messaging instance export
export const messaging = getMessaging(app);

// ✅ Get FCM Token function
export const getFCMToken = async () => {
  try {
    const token = await getToken(messaging, {
      vapidKey: "BM-Keh8pxBwAJRFYU2kgqCzvc4MojsD3rYdmsVexChm9RkL_pK1XaBUmqtRS3eUtX_h2oSsUbV_n6O5sWEBet4U" // replace with your Web Push certificate key
    });

    if (token) {
      console.log("✅ FCM Token:", token);
      return token;
    } else {
      console.log("❌ No registration token available. Request permission to generate one.");
    }
  } catch (error) {
    console.error("❌ Error retrieving FCM token:", error);
  }
};
