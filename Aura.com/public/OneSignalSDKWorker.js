importScripts('https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js');

// Custom push handler (fallback)
self.addEventListener('push', function(event) {
  let data = {};
  try {
    if (event.data) {
      const textData = event.data.text();
      try {
        data = JSON.parse(textData);
      } catch (e) {
        data = { message: textData };
      }
    }
  } catch (e) {
    console.error("Push data error:", e);
  }

  const title = data.title || "Saffron Guru";
  const options = {
    body: data.message || "You have a new update from Saffron Guru",
   icon: "/Products/SaffronGuruLogo-192.png",
    badge: "/Products/SaffronGuruLogo-192.png"
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});
