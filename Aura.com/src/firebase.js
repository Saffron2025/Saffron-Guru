import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBNLDA0VPn5MawlQ3sBc6QzuRaOtCrfaoI",
  authDomain: "saffron-guru.firebaseapp.com",
  projectId: "saffron-guru",
  storageBucket: "saffron-guru.appspot.com",
  messagingSenderId: "513374378031",
  appId: "1:513374378031:web:68ad0d2705450e247c4eda",
  measurementId: "G-LN8DVSVKQR",
};

// Init
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

// ✅ Token generator
export const getFCMToken = async () => {
  try {
    const registration = await navigator.serviceWorker.register("/firebase-messaging-sw.js");
    console.log("✅ Service Worker registered:", registration);

    const token = await getToken(messaging, {
      vapidKey: "BM-Keh8pxBwAJRFYU2kgqCzvc4MojsD3rYdmsVexChm9RkL_pK1XaBUmqtRS3eUtX_h2oSsUbV_n6O5sWEBet4U",
      serviceWorkerRegistration: registration,
    });

    if (token) {
      console.log("👉 User FCM Token:", token);
      return token;
    } else {
      console.warn("⚠️ No token generated. Check permissions or HTTPS.");
      return null;
    }
  } catch (error) {
    console.error("❌ Error while getting FCM token:", error);
    return null;
  }
};

// ✅ Listen foreground messages
export const listenForeground = (callback) => {
  const unsubscribe = onMessage(messaging, (payload) => {
    console.log("📩 Foreground Notification:", payload);
    callback(payload);
  });
  return unsubscribe;
};
