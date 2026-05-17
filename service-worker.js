const CACHE_NAME = '730-congiunto-cache-v2';
const urlsToCache = [
  '/730/',
  '/730/index.html',
  '/730/manifest.json',
  '/730/libs/jszip.min.js',
  '/730/libs/FileSaver.min.js',
  '/730/fonts/poppins-latin-400-normal.woff2',
  '/730/fonts/poppins-latin-400-normal.woff',
  '/730/fonts/poppins-latin-600-normal.woff2',
  '/730/fonts/poppins-latin-600-normal.woff',
  '/730/icons/icon-192x192.png',
  '/730/icons/icon-512x512.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(name) {
          return name !== CACHE_NAME;
        }).map(function(name) {
          return caches.delete(name);
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
