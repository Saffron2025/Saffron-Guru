importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js");

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

// Background notification
messaging.onBackgroundMessage((payload) => {
  console.log("📩 Background Message:", payload);

  const notificationTitle = payload.notification?.title || "New Notification";
  const notificationOptions = {
    body: payload.notification?.body || "",
    icon: "/logo192.png",
    image: payload.notification?.image || undefined,
    badge: "/logo192.png",
    actions: [
      { action: "view", title: "👉 Get Now" },
      { action: "dismiss", title: "❌ Dismiss" }
    ],
    data: { url: payload.data?.url || "https://saffronguru.com" }
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Click handler
self.addEventListener("notificationclick", (event) => {
  console.log("🔔 Notification clicked:", event);
  event.notification.close();

  if (event.action === "view") {
    event.waitUntil(clients.openWindow(event.notification.data.url));
  } else if (event.action === "dismiss") {
    // Do nothing
  } else {
    event.waitUntil(clients.openWindow("https://saffronguru.com"));
  }
});
