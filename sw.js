// This is the "Safe Pass-Through" Service Worker
self.addEventListener('install', (event) => {
    self.skipWaiting(); // Forces the new version to take over immediately
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim()); // Take control of the page immediately
});

self.addEventListener('fetch', (event) => {
    // Just pass the request through to the internet
    event.respondWith(fetch(event.request));
});
