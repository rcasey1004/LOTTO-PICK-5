self.addEventListener('fetch', function(event) {
  // This tells Chrome: "I am a real App, not just a website."
  event.respondWith(fetch(event.request));
});
