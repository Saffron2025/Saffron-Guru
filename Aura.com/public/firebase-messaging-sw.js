// public/firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js");

// ✅ Firebase config (same as firebase.js but compat version)
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

// ✅ Background notifications
messaging.onBackgroundMessage((payload) => {
  console.log("📩 Background Message:", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/logo192.png" // make sure this file exists in public/
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
