// public/firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js");

// ✅ Same config
firebase.initializeApp({
  apiKey: "AIzaSyBNLDA0VPn5MawlQ3sBc6QzuRaOtCrfaoI",
  authDomain: "saffron-guru.firebaseapp.com",
  projectId: "saffron-guru",
  storageBucket: "saffron-guru.appspot.com",
  messagingSenderId: "513374378031",
  appId: "1:513374378031:web:68ad0d2705450e247c4eda",
  measurementId: "G-LN8DVSVKQR"
});

const messaging = firebase.messaging();

// ✅ Background notification
messaging.onBackgroundMessage((payload) => {
  console.log("📩 Background Message:", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/logo192.png" // make sure this exists in public/
  });
});
