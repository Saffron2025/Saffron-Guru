self.addEventListener("install", function(event) {
  self.registration.unregister().then(function() {
    return self.clients.matchAll().then(function(clients) {
      clients.forEach(client => client.navigate(client.url));
    });
  });
});
