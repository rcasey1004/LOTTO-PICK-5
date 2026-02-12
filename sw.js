// Simple Service Worker to allow installation
self.addEventListener('install', (event) => {
    console.log('Service Worker: Installed');
});

self.addEventListener('fetch', (event) => {
    // This allows the app to load content
    event.respondWith(fetch(event.request));
});
