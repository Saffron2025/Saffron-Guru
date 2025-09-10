self.addEventListener("install", (event) => {
  self.skipWaiting(); // immediately move to activate
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    self.registration.unregister().then(() => {
      return self.clients.matchAll().then((clients) => {
        clients.forEach((client) => client.navigate(client.url));
      });
    })
  );
});
