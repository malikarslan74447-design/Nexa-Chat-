const cacheName = 'ayaz-messenger-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './nexa.jpg'  // <--- Ye line add kar dena
];

// Install Service Worker
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Fetch Files from Cache
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
